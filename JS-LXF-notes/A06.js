//第五天
//----闭包   一种环境 绑定了变量
//内部函数sum可以引用外部函数lazy_sum的参数和局部变量
// 当lazy_sum返回函数sum时，
// 相关参数和变量都保存在返回的函数中

function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]);
console.log(f());

console.log(lazy_sum([1, 2, 3, 4, 5])());
















//argument实参  parameter 形参

function* fib(max){
    var
        t,
        a=0,
        b=1,
        n=0;
    while(n<max){
        yield a;
        [a,b]=[a,a+b];
        n++;
    }
    return;
}

fib(6);
console.log(fib(6));

var k=fib(6);
console.log(k.next());


//对象类型   typeof
console.log(typeof 'str');
console.log(typeof 123);
console.log(typeof NaN);
console.log(typeof true);
var arr=[0,0,0];
console.log(typeof arr);
console.log(typeof null);
console.log(typeof {});
console.log(typeof Math.abs);


/*
    正则表达式
    \d----数字
    \w----数字/字符
    \s----空格
    * ----任意字符
    {n}---n个字符
    + ----至少一个字符
    ? ----0个或者一个字符
*/
//  带区号电话匹配
var RegExp=/\d{3}\s+\d{3,8}/;  //这种写法无需转义
RegExp.test('010 35684');      //test()方法
                               //exec()方法

