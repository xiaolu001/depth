import { stopEvent } from "../internal/eventHelper"
class MouseEvent {
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
export default MouseEvent;