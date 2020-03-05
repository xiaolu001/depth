import Chart from "./Chart"
import MaskRender from "../render/MaskRender"
class MaskChart extends Chart {
    constructor(dom, dataProvider, interval, style) {
        super(dom)
        this.interval = interval;
        this.dataProvider = dataProvider;
        this.maskRender = new MaskRender(this.viewPortHandler,dataProvider, interval);
        

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
export default MaskChart;