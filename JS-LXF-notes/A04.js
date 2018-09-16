//第三天

//iterable //es6   迭代 ---- arr/set/map
var x;
s=[['xiaoming',18],['xiaoli',17],['xiaozhang',16]];
for (x of s){
    console.log(x);
}
ss=[11,12,12];
for (x of ss){
    console.log(x);
}

var a=['a','b','c'];
a.name='hh';
console.log(a);
for (x in a){
    console.log(x);
}

qqq.forEach(function (x,y,z) {     //回调函数
    // map   ----key/value/map
    // arr   ----element/index/array
    // set   ----element/sameElement/set
});


function abs(x){

}
var abscalculate=function (x) {
    //函数也是对象
};

function sss() {
    if(arguments.length===2); //获取传入的参数
}

//变量提升
//全局对象window

var MYAPP = {};

MYAPP.name = 'myapp';   // 减少冲突----把所以变量和函数绑定到一个全局变量
MYAPP.version = 1.0;
MYAPP.foo = function () {
    return 'foo';
};

//局部作用域---
//块级作用域---let
const pi=3.14;

var ii=[pi,'ss','sss'];
var [x,y,z]=[pi,'ss','sss'];  //解构赋值，一种赋值方法，es6,可嵌套，可作用于不同类型----数组、对象
console.log(x+y+z);


