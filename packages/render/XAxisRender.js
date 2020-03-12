import AxisRender from "./AxisRender"

class XAxisRender extends AxisRender {

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
export default XAxisRender