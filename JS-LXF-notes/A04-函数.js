//第三天

//iterable //es6   迭代 ---- arr/set/map
var x;
var s=[['xiaoming',18],['xiaoli',17],['xiaozhang',16]];
for (x of s){
    console.log(x);
}
var ss=[11,12,12];
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
};  //结尾处加 ;

function a(x) {
    if (typeof x !== 'number') {  //要避免收到undefined，可以对参数进行检查：
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

function sss() {
    if(arguments.length===2); //argument获取传入的参数个数
    alert('输入了两个参数')
}
sss(20,10);


//变量提升
//全局对象window

var MYAPP = {};

MYAPP.name = 'Bob';   // 减少冲突----把所以变量和函数绑定到一个全局变量
MYAPP.version = 1.0;
MYAPP.foo = function (x) {
    return x;
};

//局部作用域---
//块级作用域---let
const pi=3.14;

var ii=[pi,'ss','sss'];
var [x,y,z]=[pi,'ss','sss'];  //解构赋值，一种赋值方法，es6,可嵌套，可作用于不同类型----数组、对象
console.log(x+y+z);

//--------------------------------------------------------

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;    //JavaScript的函数内部如果调用了this，那么这个this到底指向谁？
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

//视情况而定！
xiaoming.age(); // 25, 正常结果
getAge(); // NaN

var fn = xiaoming.age; // 先拿到xiaoming的age函数
fn(); // NaN
//也是不行的！要保证this指向正确，必须用obj.xxx()的形式调用！

//-------------------------------------------------------
'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined
//this指针只在age方法的函数内指向xiaoming，在函数内部定义的函数，this又指向undefined了！(该设定可以让错误及时暴露出来）
//在非strict模式下，它重新指向全局对象window！

//-----------------------------------------------------------
//解决办法

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        //*** that
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age();
