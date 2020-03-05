
class DataProvider {
    constructor() {
        this.data = {}
        this.decimal = 0
        this.leftData = []
        this.rightData = []
    }
    init(data, decimal,locale) {
       
        this.data = data
        this.length = 200;
        this.decimal = decimal
        this.locale = locale
        this.leftData = this.dataFill(this.data['bids'], 'bids') //买
        this.rightData = this.dataFill(this.data['asks'], 'asks') //卖
        
    }

    /**
     * x轴半轴长
     * 
     */
    adjacent() {
        let leftArray = this.data['bids']
        let leftArrayLength = leftArray.length;
        let rightArray = this.data['asks']
        let rightArrayLength = rightArray.length;
        if (leftArrayLength < 1 || rightArrayLength < 1) {
            console.log("数据长度不够")
            return false
        }
        const vol1 = Math.abs(leftArray[0].price - leftArray[leftArrayLength - 1].price)
        const vol2 = Math.abs(rightArray[0].price - rightArray[rightArrayLength - 1].price)
        const min = Math.min(vol1, vol2);
        return min
    }
    getPriceDecimal() {
        return parseInt(this.decimal.price)
    }
    getValueDecimal(){
        return parseInt(this.decimal.value)
    }
    getLocale(){
        return this.locale
    }
    initDataLeft(key) {
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
        let arr = this.initDataLeft(key)
        let len = this.length
        let semiaxis = this.adjacent()
        let difference = semiaxis / this.length
        let total = 0
        for (let i = 0; i < len; i++) {
            let item = arr[i]

            array.forEach(element => {
                if (Math.abs(item.p - element.price) < difference) {
                    total = total + element.volume
                    item.v = element.volume

                }
                item.t = total.toFixed(8);
            })

        }
        return arr;
    }
    originalData(array, key) {
        let arr = []
        let min = this.minPrice();
        let semiaxis = this.adjacent()
        let minPrice = min
        if (key == 'asks') {
            minPrice = min + semiaxis;
        } else {
            // debugger
            // console.log('bids', array)
            // let arr1 = array = array.reverse()
            // console.log('bids', arr1)
        }

        let difference = semiaxis / this.length
        let len = this.length;
        let total = 0
        for (let i = 0; i < len; i++) {
            let obj = {
                p: minPrice + difference * i,
                v: 0,
                t: total
            }
            array.forEach(element => {
                if (Math.abs(obj.p - element.price) <difference) {
                    total = total + element.volume;
                    obj.v = element.volume
                    obj.t = total;
                }
            })
            arr.push(obj);
        }
        //console.log(arr)
        return arr
    }
    processingData(array) {
        let total = 0
        let arr = []
        let max = this.maxPrice();
        if (array.length > 0) {
            let keys = Object.keys(array[0])
            array.forEach(element => {
                // console.log(element,max)
                if (element.price > max) {
                    return;
                }
                total += element[keys[1]]
                element = {
                    p: element[keys[0]],
                    v: element[keys[1]],
                    t: total
                }

                arr.push(element)
            })
            // console.log(arr)
            return arr
        }
        return []

    }
    maxPrice() {
        return this.adjacent() * 2 + this.minPrice();
    }
    minPrice() {
        let len = this.data['bids'].length - 1
        if (len > 0) {
            return this.data['bids'][len].price
        }
    }
    maxVol() {
        let leftLen = this.leftData.length - 1;
        let rightLent = this.rightData.length - 1
        let max = Math.max(this.leftData[leftLen].t, this.rightData[rightLent].t)
        return max + max / 8

    }

}
export default DataProvider