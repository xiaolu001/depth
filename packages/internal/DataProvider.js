
class DataProvider {
    constructor() {
        this.data = {}
        this.decimal = 0
        this.leftData = []
        this.rightData = []
    }
    init(data, decimal, locale) {
        this.data = data;
        this.middle = this.middlePrice();
        this.length = 200;
        this.decimal = decimal
        this.locale = locale
        this.leftData = this.dataFill(this.data['bids'] || [], 'bids') //买
        this.rightData = this.dataFill(this.data['asks'] || [], 'asks') //卖

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
    initData(key) {
        let arr = []
        let minPrice = this.minPrice();

        let semiaxis = this.adjacent()
        let difference = semiaxis / this.length
        let len = this.length
        let total = 0
        if (key == 'asks') {
            minPrice = minPrice + semiaxis;
        }
        for (let i = 0; i < len; i++) {
            let obj = {
                p: minPrice + difference * i,
                v: 0,
                t: total
            }
            arr.push(obj)
        }
        if (key == 'asks') {
            return arr
        }
        return arr.reverse()
    }
    dataFill(array, key) {
        let arr = this.initData(key)
        let len = this.length
        let semiaxis = this.adjacent()
        let difference = semiaxis / this.length
        let total = 0
        let minPrice = this.minPrice()
        let maxPrice = this.maxPrice()
        for (let i = 0; i < len; i++) {
            let item = arr[i]
            array.forEach(element => {
                // console.log(element)
                if (key === 'bids' && (parseFloat(element.price) > this.middle || parseFloat(element.price) < minPrice)) {
                    return
                }
                if (key === 'asks' && (parseFloat(element.price) < this.middle || parseFloat(element.price) > maxPrice)) {
                    return
                }
                if (Math.abs(item.p - element.price) <= difference / 2) {
                    total = total + parseFloat(element.volume)
                    item.v = parseFloat(element.volume)

                }
                item.t = total.toFixed(8);
            })

        }
        console.log(total)
        return arr;
    }


    maxPrice() {
        let middle = this.middle
        return middle * 1.1;
    }
    minPrice() {
        let middle = this.middle
        return middle * 0.9;
    }
    middlePrice() {
        if (this.data['bids'].length > 0 && this.data['asks'].length > 0) {
            let middle = (parseFloat(this.data['bids'][0].price) + parseFloat(this.data['asks'][0].price)) / 2
            console.log(middle)
            return middle;
        }
        return 0;

    }
    maxVol() {
        let leftLen = this.leftData.length - 1;
        let rightLent = this.rightData.length - 1;
        let max = '';
        if (leftLen === -1) {
            max = rightLent > 0 && parseFloat(this.rightData[rightLent].t);
            return max + max / 8;
        }
        if (rightLent === -1) {
            max = leftLen > 0 && parseFloat(this.leftData[leftLen].t);
            return max + max / 8;
        }
        max = Math.max(parseFloat(this.leftData[leftLen].t), parseFloat(this.rightData[rightLent].t));
        return max + max / 8;

    }

}
export default DataProvider