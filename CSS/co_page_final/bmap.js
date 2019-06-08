

var map1 = new BMap.Map("lmap");
// 创建地图实例
var point = new BMap.Point(117.1559, 34.2362);
// 创建点坐标
map1.centerAndZoom(point, 18);
map1.enableScrollWheelZoom(true);
// 初始化地图，设置中心点坐标和地图级别

var polyline = new BMap.Polyline([
    new BMap.Point(117.1559, 34.2362),
    new BMap.Point(117.1759, 34.2362),
    new BMap.Point(117.1959, 34.2362)
], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});
//创建折线
map1.addOverlay(polyline);

var overlays = [];
var overlaycomplete = function(e){
    overlays.push(e.overlay);
};
var styleOptions = {
    strokeColor:"red",    //边线颜色。
    fillColor:"red",      //填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3,       //边线的宽度，以像素为单位。
    strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
    fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' //边线的样式，solid或dashed。
}

//实例化鼠标绘制工具
var drawingManager = new BMapLib.DrawingManager(map1,
    {
    isOpen: false, //是否开启绘制模式
    enableDrawingTool: true, //是否显示工具栏
    drawingToolOptions: {
        anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
        offset: new BMap.Size(5, 5), //偏离值
    },
    circleOptions: styleOptions, //圆的样式
    polylineOptions: styleOptions, //线的样式
    polygonOptions: styleOptions, //多边形的样式
    rectangleOptions: styleOptions //矩形的样式
});
drawingManager.addEventListener('overlaycomplete', overlaycomplete);

//34.2362826307,117.1559039870  中心点坐标


var map2 = new BMap.Map("rmap");

map2.centerAndZoom(point, 18);
map2.enableScrollWheelZoom(true);

// var drawingManager = new BMapLib.DrawingManager(map2,
//     {
//         isOpen: false, //是否开启绘制模式
//         enableDrawingTool: true, //是否显示工具栏
//         drawingToolOptions: {
//             anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
//             offset: new BMap.Size(5, 5), //偏离值
//         },
//         circleOptions: styleOptions, //圆的样式
//         polylineOptions: styleOptions, //线的样式
//         polygonOptions: styleOptions, //多边形的样式
//         rectangleOptions: styleOptions //矩形的样式
//     });
// drawingManager.addEventListener('overlaycomplete', overlaycomplete);