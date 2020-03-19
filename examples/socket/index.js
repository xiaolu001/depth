/**
 * WebSocket(https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)的封装，全局一个实例，避免资源浪费；
 * 可以通过订阅不同的主题(topic)来实现不同的数据处理
 *
 * 使用方法如下：
 *  import { subscribe, unsubscribe } from "../socket";
 *
 * 订阅某个主题：
 *  let sub = 'sub?topic1:symbol1[;topic2:symbol1]'
 *  subscribe(topic1,symbol1, message => {
 *      console.log(message.topic);
 *      console.log(message.symbol);
 *      console.log(message.data);
 *  });
 *
 * 取消订阅：
 *  unsubscribe(topic1, handler)
 *
 */
// import { unPackMessage } from './PushMessage';
const defaultBinaryType = 'arraybuffer';
const messageHandlers = {};
const reconnectTimeoutMs = 3000;
var subscriptions = [];
var forceClose = false;
var socket = null;

const reconnect = () => connect();
/**
 * WebSocket 连接事件
 */
const onOpen = function(event) {
  console.info('###connected:');
  if (subscriptions.length > 0) {
    //重新连接后尝试重新订阅
    subscriptions.forEach((it) => send(it));
    console.info('###sub:', subscriptions);
  }
};
/**
 * 关闭事件
 */
const onClose = function(event) {
  console.warn('###closed:');
  if (!forceClose) {
    if (!forceClose) {
      setTimeout(reconnect, reconnectTimeoutMs);
    }
  }
};

/**
 * 异常事件
 */
const onError = function(event) {
  console.error('###error:', event);
  if (!forceClose) {
    setTimeout(reconnect, reconnectTimeoutMs);
  }
};

const messaging = function(message) {
  if (message.data) {
    let handlers = messageHandlers[message.topic];
    if (handlers) {
      handlers.forEach((handle) => handle(message));
    }
  }
};

/**
 * 接收消息事件
 */
const onMessage = function(event) {
  import('./PushMessage').then(({ unPackMessage }) => {
    const message = unPackMessage(event.data);
    messaging(message);
  });
};

/**
 * 发送订阅指令，发送前检查是否已经连接
 *
 * @param {string} message 要发送的消息
 */
function send(message) {
  connect();
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  } else {
    console.warn('socket status is ', socket.readyState);
  }
}

export function connect(url) {
  if (typeof window === 'undefined') {
    return;
  }
  if (typeof WebSocket === 'undefined') {
    //TODO: 可以引导到支持的浏览器下载地址
    alert('您的浏览器不支持WebSocket');
    return;
  }

  //如果未创建或者已经关闭，重新初始化连接
  if (!socket || socket.readyState === WebSocket.CLOSING || socket.readyState === WebSocket.CLOSED) {
    //获取默认的WebSocket地址
    const DEFAULT_WS =
      location.protocol === 'http:'
        ? 'ws://' + location.host + '/ws/connect/v2'
        : 'wss://' + location.host + '/ws/connect/v2';
    const ws = url || process.env.WS_URL || DEFAULT_WS;
    // const ws = 'ws://engine-connector.dev.svc.cluster.local:8080/ws/connect/v2';
    // 实例化socket
    socket = new WebSocket(ws);
    socket.binaryType = defaultBinaryType;
    socket.onopen = onOpen;
    socket.onclose = onClose;
    socket.onerror = onError;
    socket.onmessage = onMessage;
    console.log('###create WebSocket[%s] instance success', url);
  }
}

/**
 * 订阅消息，并指定处理函数
 *
 * @param {string: stat|trade,depth,kline_xxx} channel 要订阅的主题
 *  stat：24小时统计信息
 *  trade：交易历史
 *  depth：买卖盘
 *  kline_xxx：K线，包括（kline_1min|kline_5min|kline_15min|kline_30min|kline_1hour|kline_1day|kline_1week|kline_1mon）
 * @param {string} symbol 要订阅的交易对，使用下划线分割，比如btc_usdt，大小写不敏感
 * @param {function(Object)} handler 处理消息的函数
 */
export function subscribe(channel, symbol, handler, limit) {
  let sub = `sub?${channel}:${symbol}`;
  if (limit) {
    sub = `${sub}
    limit?${channel}:${limit}`;
  }
  console.log('>>>', sub);
  if (handler) {
    let handlers = messageHandlers[channel] || [];
    if (handlers.indexOf(handler) < 0) {
      handlers.push(handler);
      messageHandlers[channel] = handlers;
    }
    subscriptions.push(sub);
  }
  send(sub);

  // if (limit) {
  //   console.log('limit',limit)
  //   send(`limit?${channel}:${limit}`);
  // }
}

export function unsubscribe(channel, handler) {
  let sub = `sub?${channel}:`;
  console.log('>>>', sub);
  send(sub);
  subscriptions = subscriptions.filter((it) => it.indexOf(sub) === -1);
  let handlers = messageHandlers[channel] || [];
  if (handlers.indexOf(handler) > -1) {
    handlers = handlers.filter((it) => it != handler);
    messageHandlers[channel] = handlers;
  }
}

/**
 * 关闭WebSocket连接，程序明确退出的时候使用。大部分情况下只需要调用{unsubscribe}即可。
 */
export function close() {
  forceClose = true;
  socket.close();
}
