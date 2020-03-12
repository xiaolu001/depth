import ViewPortHandler from '../internal/ViewPortHandler'

class Chart {
  constructor() {
    this.viewPortHandler = new ViewPortHandler();

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
export default Chart;