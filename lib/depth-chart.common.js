module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fd77");
/******/ })
/************************************************************************/
/******/ ({

/***/ "29ee":
/***/ (function(module) {

module.exports = JSON.parse("{\"depth\":{\"background\":\"#161C2C\",\"buyColor\":\"#159B74\",\"sellColor\":\"#BC2351\",\"globalAlpha\":0.4,\"lineWidth\":2},\"xAxis\":{\"height\":\"25\",\"line\":{\"color\":\"#fff\",\"size\":0.5},\"tickLine\":{\"color\":\"#fff\",\"size\":0.5}},\"yAxis\":{\"width\":60,\"line\":{\"color\":\"#fff\",\"size\":0.5},\"tickLine\":{\"color\":\"#fff\",\"size\":0.5},\"position\":\"rigth\",\"tickTextPosition\":\"outside\"}}");

/***/ }),

/***/ "c53a":
/***/ (function(module) {

module.exports = JSON.parse("{\"zh\":{\"price\":\"委托价\",\"sum\":\"累计\"},\"en\":{\"price\":\"Price\",\"sum\":\"Sum\"},\"ko\":{\"price\":\"가격\",\"sum\":\"루계\"},\"ja\":{\"price\":\"価格\",\"sum\":\"累計\"},\"zh_TW\":{\"price\":\"價格\",\"sum\":\"累計\"}}");

/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fd77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.2.3@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./packages/internal/ViewPortHandler.js
class ViewPortHandler {
  constructor() {
    // 绘制区域参数
    this.contentRect = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
    // 整个view的高度
    this.height = 0
    // 整个view的宽度
    this.width = 0
  }

  /**
   * 设置尺寸
   * @param width
   * @param height
   * @param offsetLeft
   * @param offsetRight
   * @param offsetTop
   * @param offsetBottom
   */
  setDimensions(width, height, offsetLeft, offsetRight, offsetTop, offsetBottom) {

    this.width = width
    this.height = height
    this.contentRect.left = offsetLeft
    this.contentRect.right = offsetRight
    this.contentRect.top = offsetTop
    this.contentRect.bottom = offsetBottom
  }

  contentTop() {
    return this.contentRect.top
  }

  contentLeft() {
    return this.contentRect.left
  }

  contentRight() {
    return this.width - this.contentRect.right
  }

  contentBottom() {
    return this.height - this.contentRect.bottom
  }
  // mainChartWidth(){

  // }
  // mainChartWidth(){

  // }
  /**
   * 获取中间点坐标
   */
  getContentCenter() {
    const point = {}
    point.x = (this.contentLeft() + this.contentRight()) / 2
    point.y = (this.contentTop() + this.contentBottom()) / 2
    return point
  }
}

/* harmony default export */ var internal_ViewPortHandler = (ViewPortHandler);

// CONCATENATED MODULE: ./packages/chart/Chart.js


class Chart_Chart {
  constructor() {
    this.viewPortHandler = new internal_ViewPortHandler();

  }
  init(dom) {
    if (dom) {
      const canvasDom = document.createElement('canvas');
      canvasDom.style.position = 'absolute'
      canvasDom.style.right = '0'
      canvasDom.style.left = '0'
      this.canvasDom = canvasDom;
      this.ctx = this.canvasDom.getContext('2d');
      dom.appendChild(this.canvasDom);
    }

  }
  /**
* 设置图尺寸
* @param chartTop
* @param width
* @param height
* @param offsetLeft
* @param offsetRight
* @param offsetTop
* @param offsetBottom
*/
  setChartDimensions(chartTop, width, height, offsetLeft, offsetRight, offsetTop = 0, offsetBottom = 25) {
    this.clearCanvas()
    this.canvasDom.style.top = `${chartTop}px`
    this.canvasDom.style.width = `${width}px`
    this.canvasDom.style.height = `${height}px`
    this.canvasDom.width = width
    this.canvasDom.height = height
    this.viewPortHandler.setDimensions(width, height, offsetLeft, offsetRight, offsetTop, offsetBottom)
    this.draw()
  }
  /**
* 清空画布
*/
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.viewPortHandler.width, this.viewPortHandler.height)
  }
  /**
   * 刷新
   */
  flush() {
    this.clearCanvas()
    this.draw()
  }
  /**
* 绘制
*/
  draw() {
  }
}
/* harmony default export */ var chart_Chart = (Chart_Chart);
// CONCATENATED MODULE: ./packages/render/Render.js
class Render {
  constructor(viewPortHandler, dataProvider, interval) {
    this.viewPortHandler = viewPortHandler
    this.dataProvider = dataProvider
    this.interval = interval
  }
}

/* harmony default export */ var render_Render = (Render);

// CONCATENATED MODULE: ./packages/render/AxisRender.js

class AxisRender_AxisRender extends render_Render {
    constructor(viewPortHandler, dataProvider,interval) {
        super(viewPortHandler, dataProvider,interval)
    }
}
/* harmony default export */ var render_AxisRender = (AxisRender_AxisRender);
// CONCATENATED MODULE: ./packages/render/XAxisRender.js


class XAxisRender_XAxisRender extends render_AxisRender {

    /**
    * 绘制轴线
    * @param ctx
    * @param xAxis
    */
    renderAxisLine(ctx, xAxis) {
        ctx.strokeStyle = xAxis.line.color //轴线颜色
        ctx.lineWidth = xAxis.line.size //轴线粗细
        ctx.beginPath()
        ctx.moveTo(this.viewPortHandler.contentLeft(), this.viewPortHandler.contentBottom())
        ctx.lineTo(this.viewPortHandler.contentRight(), this.viewPortHandler.contentBottom())
        ctx.stroke()
        ctx.closePath()
    }

    /**
    * 绘制刻度
    * @param ctx
    * @param xAxis
    */
    renderTickLines(ctx, xAxis) {
        ctx.lineWidth = xAxis.tickLine.size
        ctx.strokeStyle = xAxis.tickLine.color
        ctx.textAlign = 'center'
        ctx.font = "12px sans-serif"
        ctx.fillStyle = xAxis.tickLine.color;
        const startY = this.viewPortHandler.contentBottom()
        const endY = startY + 5
        const startX = (this.viewPortHandler.contentRight() / 30)
        
         let yAxisWidth = 0
        // if (yAxis.position === "left") {
        //     yAxisWidth += yAxis.width
        // }
        const divide = startX * 4
        const difference = this.dataProvider.adjacent() * 2;  //this.dataProvider.maxPrice() - this.dataProvider.minPrice();

        const startVol = difference / 30
        const divideVol = startVol * 4
        const decimal = this.dataProvider.getPriceDecimal()
        for (let i = 0; i < 8; i++) {
            const x = yAxisWidth + startX + i * divide;
            const vol = this.dataProvider.minPrice() + startVol + i * divideVol;
            ctx.beginPath()
            ctx.moveTo(x, startY)
            ctx.lineTo(x, endY)

            ctx.fillText(vol.toFixed(decimal), x, endY + 10);
            ctx.stroke()
            ctx.closePath()
        }
    }

}
/* harmony default export */ var render_XAxisRender = (XAxisRender_XAxisRender);
// CONCATENATED MODULE: ./packages/render/YAxisRender.js


class YAxisRender_XAxisRender extends render_AxisRender {

    /**
   * 绘制轴线
   * @param ctx
   * @param yAxis
   */
    renderAxisLine(ctx, yAxis) {

        ctx.strokeStyle = yAxis.line.color
        ctx.lineWidth = yAxis.line.size
        ctx.beginPath()
        if (yAxis.position === 'left') {
            ctx.moveTo(this.viewPortHandler.contentLeft(), this.viewPortHandler.contentTop())
            ctx.lineTo(this.viewPortHandler.contentLeft(), this.viewPortHandler.contentBottom())
        } else {
            ctx.moveTo(this.viewPortHandler.contentRight(), this.viewPortHandler.contentTop())
            ctx.lineTo(this.viewPortHandler.contentRight(), this.viewPortHandler.contentBottom())
        }

        ctx.stroke()
        ctx.closePath()
    }
    /**
   * 绘制刻度
   * @param ctx
   * @param xAxis
   */
    renderTickLines(ctx, yAxis) {
        ctx.lineWidth = yAxis.tickLine.size;
        ctx.strokeStyle = yAxis.tickLine.color;
        ctx.font = "12px sans-serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        ctx.fillStyle = yAxis.tickLine.color;
        const tickLineLength = 5;
        let startX;
        let endX;
        if (yAxis.position === 'left') {
            startX = this.viewPortHandler.contentLeft()
            if (yAxis.tickTextPosition === 'outside') {
                endX = startX - tickLineLength //刻度内置
            } else {
                endX = startX + tickLineLength//刻度外置
            }
        } else {
            startX = this.viewPortHandler.contentRight()
            if (yAxis.tickTextPosition === 'outside') {
                endX = startX + tickLineLength//刻度内置
            } else {
                endX = startX - tickLineLength//刻度外置
            }
        }
       
        const height = this.viewPortHandler.contentBottom();
        const maxVol = this.dataProvider.maxVol()
        const divide = (height / 16) * 3
        const divideVol = (maxVol / 16) * 3

        for (let i = 0; i < 6; i++) {
            const y = height - i * divide
            const xVol = this.renderTickLinesValue(i * divideVol)
            ctx.beginPath()
            ctx.moveTo(startX, y)
            ctx.lineTo(endX, y)
            ctx.fillText(xVol, endX + 5, y)
            ctx.stroke()
            ctx.closePath()
        }
    }
    /**
     * 刻度值显示规则处理
     * @param value
     */
    renderTickLinesValue(value) {
        if (value > 1000) {
            let val = (value / 10000).toString()
            return `${this.decimal(val)}K`
        } else if (value > 1000000) {
            let val = (value / 1000000).toString()
            return `${this.decimal(val)}M`
        }
        return value
    }
    decimal(val) {
        if (val.indexOf('.') > -1) {
            let str = val.substr(0, 5);
            if (str.charAt(str.length - 1) === '.') {
                return val.substr(0, 4)
            }
            return str
        } else {
            return val.substr(0, 4)
        }
    }
}
/* harmony default export */ var YAxisRender = (YAxisRender_XAxisRender);
// CONCATENATED MODULE: ./packages/render/MainRender.js

class MainRender_MainRender extends render_Render {
    renderDraw(ctx, depth) {

        const max = this.dataProvider.maxVol()
        const width = (this.viewPortHandler.contentRight() - this.interval) / 2
        const height = this.viewPortHandler.contentBottom()
        const leftData = this.dataProvider.leftData
        const rightData = this.dataProvider.rightData
        const leftDataLenght = leftData.length
        const rightDataLenght = rightData.length
        const letfDataWidth = width / leftDataLenght
        const rightDataWidth = width / rightDataLenght
        const { background } = depth
        this.drawBg(ctx, this.viewPortHandler.width, this.viewPortHandler.height, background)
        this.drawLeft(ctx, width, height, max, leftData, letfDataWidth, depth)
        this.drawRight(ctx, width, height, max, rightData, rightDataWidth, depth)

    }
    drawLeft(ctx, width, height, max, leftData, dataWidth, depth) {
        let x = 0, y = 0
        ctx.beginPath()
        ctx.lineWidth = 2
        ctx.moveTo(width, height)
        leftData.forEach((item, index) => {
            x = width - parseInt(index) * dataWidth
            y = height - item.t / max * height
            ctx.lineTo(x, y)
        })
        ctx.fillStyle = depth.buyColor
        ctx.strokeStyle = depth.buyColor
        ctx.stroke()
        ctx.globalAlpha = depth.globalAlpha
        ctx.lineTo(0, y)
        ctx.lineTo(0, height)
        ctx.lineTo(width, height)
        ctx.fill()
        ctx.closePath()
    }
    drawRight(ctx, width, height, max, rightData, dataWidth, depth) {
        let x = 0, y = 0
        ctx.beginPath()
        ctx.globalAlpha = 1
        ctx.lineWidth = depth.lineWidth
        ctx.moveTo(width + this.interval, height)
        rightData.forEach((item, index) => {
            x = width + this.interval + parseInt(index) * dataWidth + 1
            y = height - item.t / max * height
            ctx.lineTo(x, y)
        })
        ctx.fillStyle = depth.sellColor
        ctx.strokeStyle = depth.sellColor
        ctx.shadowColor = "none"
        ctx.stroke()
        ctx.globalAlpha = depth.globalAlpha
        ctx.lineTo(width * 2 + this.interval, y)
        ctx.lineTo(width * 2 + this.interval, height)
        ctx.lineTo(width + this.interval, height)
        ctx.fill()
        ctx.closePath()

    }
    drawBg(ctx, width, height, background) {

        ctx.beginPath()
        ctx.globalAlpha = 1
        ctx.fillStyle = background
        ctx.fillRect(0, 0, width, height)
        ctx.closePath()
    }
}
/* harmony default export */ var render_MainRender = (MainRender_MainRender);
// CONCATENATED MODULE: ./packages/chart/MainChart.js




class MainChart_MainChart extends chart_Chart {
    constructor(dom, dataProvider, interval, style) {
        super(dom)
        this.style = style;
        this.xAxisRender = new render_XAxisRender(this.viewPortHandler, dataProvider, interval)
        this.yAxisRender = new YAxisRender(this.viewPortHandler, dataProvider, interval)
        this.mainRender = new render_MainRender(this.viewPortHandler, dataProvider, interval)
    }
    draw() {
        const { xAxis, yAxis, depth } = this.style
        this.mainRender.renderDraw(this.ctx, depth)
        this.yAxisRender.renderAxisLine(this.ctx, yAxis)
        this.yAxisRender.renderTickLines(this.ctx, yAxis)
        this.xAxisRender.renderAxisLine(this.ctx, xAxis)
        this.xAxisRender.renderTickLines(this.ctx, xAxis,yAxis)
    }
}
/* harmony default export */ var chart_MainChart = (MainChart_MainChart);
// EXTERNAL MODULE: ./packages/config/locale.json
var config_locale = __webpack_require__("c53a");

// CONCATENATED MODULE: ./packages/render/MaskRender.js


class MaskRender_MaskRender extends render_Render {
    constructor(viewPortHandler, dataProvider, interval) {
        super(viewPortHandler, dataProvider, interval)
        this.interval = interval;
        this.dataProvider = dataProvider;
        this.locale = config_locale[this.dataProvider.getLocale()]
        this.priceDecimal = this.dataProvider.getPriceDecimal()
        this.valueDecimal = this.dataProvider.getValueDecimal()
    }
    point(ctx, offsetX, offsetY, selectColor) {
        ctx.beginPath()
        ctx.globalAlpha = 0.5
        ctx.fillStyle = selectColor
        ctx.arc(offsetX, offsetY, 12, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.globalAlpha = 0.8
        ctx.fillStyle = selectColor

        ctx.arc(offsetX, offsetY, 8, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.globalAlpha = 1
        ctx.fillStyle = 'rgba(255,255,255, 1)'
        ctx.arc(offsetX, offsetY, 5, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
    }
    popup(ctx, offsetX, offsetY, selectColor, direction) {

        offsetY = offsetY > 140 ? offsetY - 130 : offsetY + 30;

        let newOffsetX = direction ? offsetX - 160 : offsetX

        //线
        ctx.beginPath()

        ctx.globalAlpha = 1
        ctx.fillStyle = selectColor;
        ctx.fillRect(offsetX, offsetY, 4, 100)
        ctx.closePath()
        //框
        ctx.beginPath()
        ctx.fillStyle = selectColor;
        ctx.globalAlpha = 0.4

        ctx.fillRect(newOffsetX, offsetY, 160, 100)
        ctx.closePath()

    }
    labelText(ctx, offsetX, offsetY, selectColor, direction, item) {
        offsetY = offsetY > 140 ? offsetY : offsetY + 160;
        let newOffsetX = direction ? offsetX - 140 : offsetX + 20

        ctx.beginPath()
        ctx.font = '14px SFCompactDisplay-Semibold,SFCompactDisplay'
        ctx.fillStyle = selectColor
        ctx.globalAlpha = 0.8
        ctx.fillText(this.locale['price'], newOffsetX, offsetY - 110);
        ctx.closePath()

        ctx.beginPath()
        ctx.font = '14px bold'
        ctx.fillStyle = "#fff";
        ctx.globalAlpha = 1
        ctx.fillText(`${item.p.toFixed(this.priceDecimal)}`, newOffsetX, offsetY - 90);
        ctx.closePath()

        ctx.beginPath()
        ctx.font = '14px bold'
        ctx.fillStyle = selectColor
        ctx.globalAlpha = 0.8

        ctx.fillText(this.locale['sum'], newOffsetX, offsetY - 65);
        ctx.closePath()

        ctx.beginPath()
        ctx.font = '14px bold'
        ctx.fillStyle = "#fff";
        ctx.globalAlpha = 1
        ctx.fillText(`${parseFloat(item.t).toFixed(this.valueDecimal)}`, newOffsetX, offsetY - 45);
        ctx.closePath()
    }
}
/* harmony default export */ var render_MaskRender = (MaskRender_MaskRender);
// CONCATENATED MODULE: ./packages/chart/MaskChart.js


class MaskChart_MaskChart extends chart_Chart {
    constructor(dom, dataProvider, interval, style) {
        super(dom)
        this.interval = interval;
        this.dataProvider = dataProvider;
        this.maskRender = new render_MaskRender(this.viewPortHandler,dataProvider, interval);
        

        this.style = style;
       
    }
   
    draw(offsetX) {
        this.maxVol = this.dataProvider.maxVol()
      
        let width = this.viewPortHandler.contentRight();
        let height = this.viewPortHandler.contentBottom()
        let halfWidth = width / 2;
        let middleStart = halfWidth - this.interval / 2;
        let middleEnd = halfWidth + this.interval / 2;
        if ((middleStart < offsetX && offsetX < middleEnd) || offsetX > width || offsetX < 0) {
            return false;
        }
        let direction = offsetX > halfWidth ? true : false
        let { depth } = this.style
        let selectColor = !direction ? depth.buyColor : depth.sellColor
        let itemWidth = middleStart / 200;
        let offsetXIndex = Math.floor(offsetX / itemWidth) || 0
        let intervalIndex = Math.floor(this.interval / itemWidth) || 0
        let index = offsetXIndex > 199 ? (offsetXIndex - intervalIndex) : offsetXIndex;

        let data = []
        if (direction) {
            data = this.dataProvider.rightData
            index = index - 200;
        } else {
            data = this.dataProvider.leftData
            index = 199 - index;
        }
        let item = data[index];
       
        if (item) {
            let offsetY = height - item.t / this.maxVol * height
            this.maskRender.point(this.ctx, offsetX, offsetY, selectColor)
            this.maskRender.popup(this.ctx, offsetX, offsetY, selectColor, direction, item)
            this.maskRender.labelText(this.ctx, offsetX, offsetY, selectColor, direction, item)
        }

    }
    flush(offsetX, offsetY) {
        this.clearCanvas()
        this.draw(offsetX, offsetY)
    }
}
/* harmony default export */ var chart_MaskChart = (MaskChart_MaskChart);
// CONCATENATED MODULE: ./packages/internal/DataProvider.js

class DataProvider {
    constructor() {
        this.data = {}
        this.decimal = 0
        this.leftData = []
        this.rightData = []
    }
    init(data, decimal,locale) {
       
        this.data = data
        this.length = 200;
        this.decimal = decimal
        this.locale = locale
        this.leftData = this.dataFill(this.data['bids'], 'bids') //买
        this.rightData = this.dataFill(this.data['asks'], 'asks') //卖
        
    }

    /**
     * x轴半轴长
     * 
     */
    adjacent() {
        let leftArray = this.data['bids']
        let leftArrayLength = leftArray.length;
        let rightArray = this.data['asks']
        let rightArrayLength = rightArray.length;
        if (leftArrayLength < 1 || rightArrayLength < 1) {
            console.log("数据长度不够")
            return false
        }
        const vol1 = Math.abs(leftArray[0].price - leftArray[leftArrayLength - 1].price)
        const vol2 = Math.abs(rightArray[0].price - rightArray[rightArrayLength - 1].price)
        const min = Math.min(vol1, vol2);
        return min
    }
    getPriceDecimal() {
        return parseInt(this.decimal.price)
    }
    getValueDecimal(){
        return parseInt(this.decimal.value)
    }
    getLocale(){
        return this.locale
    }
    initDataLeft(key) {
        let arr = []
        let minPrice = this.minPrice();

        let semiaxis = this.adjacent()
        let difference = semiaxis / this.length
        let len = this.length
        let total = 0
        if (key == 'asks') {
            minPrice = minPrice + semiaxis;
        }
        for (let i = 0; i < len; i++) {
            let obj = {
                p: minPrice + difference * i,
                v: 0,
                t: total
            }

            arr.push(obj)
        }
        if (key == 'asks') {
            return arr
        }
        return arr.reverse()
    }
    dataFill(array, key) {
        let arr = this.initDataLeft(key)
        let len = this.length
        let semiaxis = this.adjacent()
        let difference = semiaxis / this.length
        let total = 0
        for (let i = 0; i < len; i++) {
            let item = arr[i]

            array.forEach(element => {
                if (Math.abs(item.p - element.price) < difference) {
                    total = total + element.volume
                    item.v = element.volume

                }
                item.t = total.toFixed(8);
            })

        }
        return arr;
    }
    originalData(array, key) {
        let arr = []
        let min = this.minPrice();
        let semiaxis = this.adjacent()
        let minPrice = min
        if (key == 'asks') {
            minPrice = min + semiaxis;
        } else {
            // debugger
            // console.log('bids', array)
            // let arr1 = array = array.reverse()
            // console.log('bids', arr1)
        }

        let difference = semiaxis / this.length
        let len = this.length;
        let total = 0
        for (let i = 0; i < len; i++) {
            let obj = {
                p: minPrice + difference * i,
                v: 0,
                t: total
            }
            array.forEach(element => {
                if (Math.abs(obj.p - element.price) <difference) {
                    total = total + element.volume;
                    obj.v = element.volume
                    obj.t = total;
                }
            })
            arr.push(obj);
        }
        //console.log(arr)
        return arr
    }
    processingData(array) {
        let total = 0
        let arr = []
        let max = this.maxPrice();
        if (array.length > 0) {
            let keys = Object.keys(array[0])
            array.forEach(element => {
                // console.log(element,max)
                if (element.price > max) {
                    return;
                }
                total += element[keys[1]]
                element = {
                    p: element[keys[0]],
                    v: element[keys[1]],
                    t: total
                }

                arr.push(element)
            })
            // console.log(arr)
            return arr
        }
        return []

    }
    maxPrice() {
        return this.adjacent() * 2 + this.minPrice();
    }
    minPrice() {
        let len = this.data['bids'].length - 1
        if (len > 0) {
            return this.data['bids'][len].price
        }
    }
    maxVol() {
        let leftLen = this.leftData.length - 1;
        let rightLent = this.rightData.length - 1
        let max = Math.max(this.leftData[leftLen].t, this.rightData[rightLent].t)
        return max + max / 8

    }

}
/* harmony default export */ var internal_DataProvider = (DataProvider);
// CONCATENATED MODULE: ./packages/internal/eventHelper.js

/**
 * 阻止事件
 * @param e
 */
function stopEvent (e) {
  if (e && e.stopPropagation) {
    e.stopPropagation()
  } else {
    window.event.cancelBubble = true
  }
  if (e && e.preventDefault) {
    e.preventDefault()
  } else {
    window.event.returnValue = false
  }
}



// CONCATENATED MODULE: ./packages/internal/MouseEvent.js

class MouseEvent_MouseEvent {
    constructor(maskChart, dataProvider, viewPortHandler) {
        this.maskChart = maskChart;
        this.dataProvider = dataProvider;
        this.viewPortHandler = viewPortHandler;
    }
    mouseMove(e) {
        let { offsetX,offsetY } = e;
        stopEvent(e)
        if (!this.waitingForMouseMoveAnimationFrame) {
            this.waitingForMouseMoveAnimationFrame = true
            this.maskChart.flush(offsetX,offsetY);
            this.waitingForMouseMoveAnimationFrame = false
        }
    }
    mouseLeave(e) {
        stopEvent(e)

        this.maskChart.clearCanvas();
    }
}
/* harmony default export */ var internal_MouseEvent = (MouseEvent_MouseEvent);
// EXTERNAL MODULE: ./packages/config/index.json
var config = __webpack_require__("29ee");

// CONCATENATED MODULE: ./packages/chart/RootChart.js









class RootChart_DepthMainChart extends chart_Chart {
    constructor(params) {
        super(params.dom)
        let { dom, width, height, data, decimal, interval, style, locale } = params
        this.dom = dom
        dom.style.position = 'relative'
        dom.style.height = `${height}px`;
        dom.style.width = `${width}px`;
        this.width = width || this.dom.offsetWidth //图宽
        this.height = height || this.height.offsetHeight//图高
        this.data = data || {} //数据
        this.decimal = {
            price: decimal && decimal.price || 3,
            value: decimal && decimal.value || 4
        }//x轴小数位数
        this.interval = interval || 2//中间间隙
     
      
        this.style = this.deepObjectMerge(config,style)
       
        this.locale = locale


        this.dataProvider = new internal_DataProvider()

        this.dataProvider.init(this.data, this.decimal, this.locale)
        this.mainChart = new chart_MainChart(this.dom, this.dataProvider, this.interval, this.style)
        this.mainChart.init(this.dom)

        this.maskChart = new chart_MaskChart(this.dom, this.dataProvider, this.interval, this.style)
        this.maskChart.init(this.dom)
        this.calcChartDimensions()
        this.initEvent()
    }
    /**
      * 初始化事件
    */
    initEvent() {
        const mouseEvent = new internal_MouseEvent(this.maskChart, this.dataProvider, this.viewPortHandler);
        let domNode = this.dom;

        domNode.addEventListener('mousemove', (e) => {
            mouseEvent.mouseMove(e)
        })
        domNode.addEventListener('mouseleave', (e) => {
            mouseEvent.mouseLeave(e)
        })

    }
    /**
      * 修改数据源
    */
    updata(data) {
        this.data = data
        this.dataProvider.init(data, this.decimal, this.locale)
        this.mainChart.flush()
    }
    /**
    * 计算图的尺寸
    */
    calcChartDimensions() {
        const xAxisHeight = this.calcXAxisHeight()//x轴高度
        const yAxisWidth = this.calcYAxisWidth() //y轴宽度
        const domWidth = this.width
        const domHeight = this.height

        let offsetLeft = 0
        let offsetRight = 0
        const offsetTop = 0
        const offsetBottom = xAxisHeight
        if (this.style.yAxis.position === 'left') {
            offsetLeft = yAxisWidth
        } else {
            offsetRight = yAxisWidth
        }
        this.mainChart.setChartDimensions(0, domWidth, domHeight, offsetLeft, offsetRight, offsetTop, offsetBottom)
        this.maskChart.setChartDimensions(0, domWidth, domHeight, offsetLeft, offsetRight, offsetTop, offsetBottom)
    }


    /**
    * 计算x轴高度
   */
    calcXAxisHeight() {
        return this.style.xAxis.height
    }
    /**
   * 计算y轴宽度
   */
    calcYAxisWidth() {
        return this.style.yAxis.width
    }
    deepObjectMerge(FirstOBJ, SecondOBJ) { // 深度合并对象
        for (var key in SecondOBJ) {
            FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ?
                this.deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key];
        }
        return FirstOBJ;
    }

}
/* harmony default export */ var RootChart = (RootChart_DepthMainChart);
// CONCATENATED MODULE: ./packages/index.js

/* harmony default export */ var packages_0 = (RootChart);
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@4.2.3@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=depth-chart.common.js.map