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

var  r='s';
var  rr=r-0;
console.log(rr);

//sort() 先把元素转化为字符串再排序
