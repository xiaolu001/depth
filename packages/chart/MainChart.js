import Chart from "./Chart"
import XAxisRender from "../render/XAxisRender"
import YAxisRender from "../render/YAxisRender"
import MainRender from "../render/MainRender"
class MainChart extends Chart {
    constructor(dom, dataProvider, interval, style) {
        super(dom)
        this.style = style;
        this.xAxisRender = new XAxisRender(this.viewPortHandler, dataProvider, interval)
        this.yAxisRender = new YAxisRender(this.viewPortHandler, dataProvider, interval)
        this.mainRender = new MainRender(this.viewPortHandler, dataProvider, interval)
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
export default MainChart