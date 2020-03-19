
class DataProvider {
    constructor() {
        this.data = {}
        this.decimal = 0
        this.leftData = []
        this.rightData = []
    }
    init(data, decimal, locale) {
        this.data = data;

        this.length = 200;
        this.decimal = decimal
        this.locale = locale
        this.leftData = this.data['bids'].reverse(); //this.dataFill(this.data['bids'] || [], 'bids') //买
        this.rightData = this.data['asks'] //this.dataFill(this.data['asks'] || [], 'asks') //卖
        this.middle = this.middlePrice();
        
    }

    /**
     * x轴半轴长
     * 
     */
    adjacent() {
        let leftArray = this.data['bids'] || []
        let leftArrayLength = leftArray.length;
        let rightArray = this.data['asks'] || []
        let rightArrayLength = rightArray.length;
        if (leftArrayLength < 1 || rightArrayLength < 1) {
            console.log("数据长度不够")
            return 0
        }
        let widthX = this.middle - this.minPrice();

        return widthX
    }
    getPriceDecimal() {
        return parseInt(this.decimal.price)
    }
    getValueDecimal() {
        return parseInt(this.decimal.value)
    }
    getLocale() {
        return this.locale
    }
    


    maxPrice() {
        console.log('max', this.rightData[this.rightData.length - 1].price)
        return parseFloat(this.rightData[this.rightData.length - 1].price);
    }
    minPrice() {

        return parseFloat(this.leftData[this.leftData.length - 1].price);
    }
    middlePrice() {
        if (this.maxPrice() > 0 && this.minPrice() > 0) {
            let middle = (this.maxPrice() + this.minPrice()) / 2
            console.log('middle', middle)
            return middle;
        }
        return 0;

    }
    maxVol() {
        let leftLen = this.leftData.length - 1;
        let rightLent = this.rightData.length - 1;
        let max = '';
        if (leftLen === -1) {
            max = rightLent > 0 && parseFloat(this.rightData[rightLent].volume);
            return max + max / 8;
        }
        if (rightLent === -1) {
            max = leftLen > 0 && parseFloat(this.leftData[leftLen].volume);
            return max + max / 8;
        }
        max = Math.max(parseFloat(this.leftData[leftLen].volume), parseFloat(this.rightData[rightLent].volume));
        return max + max / 8;

    }

}
export default DataProvider