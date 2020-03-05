import Render from "./Render"
class MainRender extends Render {
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
export default MainRender