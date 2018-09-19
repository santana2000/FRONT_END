//第四天
//----高阶函数

var s=[1,1,1]
function plus(x) {
   return x+x;
}
var q=s.map(plus);   //map方法为array自带
console.log(q);
var qq=s.map(String);
console.log(qq);

//reduce所用的函数必须接受两个参数
var qqq=[1,3,4,2,3,6,9,7,4];
var f=qqq.reduce(multiple);
function multiple(a,b) {
    return a+b;
}
console.log(f);

var m=qqq.reduce(INT);

function INT(a,b) {
    return a*10+b;
}

console.log(m);

//map + reduce 1.实现 string2int 功能，先用split分割字符串
//             2.转换为首字母大写，注意观察数组中各元素的特点
var name = ['adam', 'LISA', 'barT']


var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var sss = arr.filter(function (s) {   // filter根据回掉函数的返回值是来判断是否保留该元素
    return s && s.trim(); // 这里是判断条件
});

var  r='9';
var  rr=r-0;
console.log(rr + typeof rr);

//sort() 先把元素转化为字符串再排序
//设置比较函数进一步细化比较规则
