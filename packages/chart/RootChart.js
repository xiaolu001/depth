
import Chart from "./Chart"


import MainChart from "./MainChart"
import MaskChart from "./MaskChart"
import DataProvider from "../internal/DataProvider"
import MouseEvent from "../internal/MouseEvent"
import styeleConfing from "../config/index.json"
class DepthMainChart extends Chart {
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
        this.style = this.deepObjectMerge(styeleConfing, style)
        this.locale = locale
        this.dataProvider = new DataProvider()
        this.dataProvider.init(this.data, this.decimal, this.locale)
        this.mainChart = new MainChart(this.dom, this.dataProvider, this.interval, this.style)
        this.mainChart.init(this.dom)
        this.maskChart = new MaskChart(this.dom, this.dataProvider, this.interval, this.style)
        this.maskChart.init(this.dom)
        this.calcChartDimensions()
        this.initEvent()
    }
    /**
      * 初始化事件
    */
    initEvent() {
        const mouseEvent = new MouseEvent(this.maskChart, this.dataProvider, this.viewPortHandler);
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
export default DepthMainChart