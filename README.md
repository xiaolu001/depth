# depth

## Install

Install with npm:

```
npm i depth-map-l --save-dev
```

Usage

```
<div id="depth"></div>
```

```
new depth({
    dom: document.getElementById("depth"),
    width: 800,
    height: 600,
    data: data,
    locale: "zh"
});

```
## Api
```
width 图片宽度
height 图片高度
data 数据源 
locale 语言
decimal { price (x轴小数位)  value （y轴小数位）}
interval 中间间隙
```