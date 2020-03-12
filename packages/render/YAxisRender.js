import AxisRender from "./AxisRender"

class XAxisRender extends AxisRender {

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
        return this.decimal(value.toString())
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
export default XAxisRender