import depthChart from "./chart/RootChart"
depthChart.install = function (Vue) {
    Vue.component("depthChart", depthChart)
}  
export default depthChart