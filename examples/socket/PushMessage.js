import pako from "pako";
import ProtoBuffer from "./ProtoBuffer_pb";

/**
 *支持的类型
 */
const unPackAnyDeserialize = {
  KLine: ProtoBuffer.KLine.deserializeBinary,
  Depth: ProtoBuffer.Depth.deserializeBinary,
  Trade: ProtoBuffer.Trade.deserializeBinary,
  Statistics: ProtoBuffer.Statistics.deserializeBinary
};

const listAnyTypeName = ["Trade", "Statistics"];

// /**
//  * 推送行情数据
//  */
// function sendEvent() {
//   let event = new ProtoBuffer.TradeEvent();
//   event.setSymbol("btc_usdt");
//   event.setActiveOrderId(1);
//   event.setActiveOrderUid(1);
//   event.setActiveOrderPrice("100");
//   event.setActiveOrderType(1);
//   event.setMatchedOrderId(1);
//   event.setMatchedOrderUid(1);
//   event.setMatchedOrderPrice("100");
//   event.setPrice("100");
//   event.setQty("100");
//   let depth = new ProtoBuffer.Depth();
//   depth.setAsksList([
//     new proto.Depth.Item(),
//     new proto.Depth.Item()
//   ]);
//   depth.setBidsList([
//     new proto.Depth.Item(),
//     new proto.Depth.Item()
//   ]);
//   event.setDepth(depth);
//   return event.serializeBinary();
// }

/**
 * 解包 google.protobuf.Any 对象,并返回结果
 * @param {!google.protobuf.Any} any
 */
function unPackAny(any) {
  let typeName = any.getTypeName(); // 获取Any包装的message对象的类型名称
  if (!unPackAnyDeserialize[typeName]) {
    return "the Message type '" + typeName + "' is not defiend in .proto file";
  }
  let val = any.unpack(unPackAnyDeserialize[typeName], typeName).toObject();
  if (typeName === "Depth") {
    return {
      price: val.lastStrikePrice,
      asks: val.asksList,
      bids: val.bidsList
    };
  }
  if (typeName === "Statistics") {
    return val.valuesList.map(it => {
      it.rate = parseFloat(it.rate) / 100;
      return it;
    });
  }

  if (listAnyTypeName.includes(typeName)) {
    return val.valuesList;
  } else {
    return val;
  }
}

/**
 * 将 字节流 中需要的Map数据取出，并解包Any型的value, 组装成可读的对象并返回
 * @param message
 * @returns {}
 */
export function unPackMessage(message) {
  if (typeof message === "string") {
    try {
      return JSON.parse(message);
    } catch (err) {
      console.log(message);
      return message;
    }
  }

  if (message instanceof ArrayBuffer) {
    let buffer = message;
    try {
      buffer = pako.ungzip(message);
    } catch (err) {
      console.warn(err);
    }

    let pushMessage = ProtoBuffer.PushMessage.deserializeBinary(buffer);
    let data = unPackAny(pushMessage.getData());
    return { topic: pushMessage.getTopic(), symbol: pushMessage.getSymbol(), data: data };
  }
}
