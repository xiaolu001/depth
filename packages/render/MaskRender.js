import Render from "./Render";
import locale from "../config/locale.json"
class MaskRender extends Render {
    constructor(viewPortHandler, dataProvider, interval) {
        super(viewPortHandler, dataProvider, interval)
        this.interval = interval;
        this.dataProvider = dataProvider;
        this.locale = locale[this.dataProvider.getLocale()]
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
export default MaskRender;