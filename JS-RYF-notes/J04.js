/*

var name = '李四';

var A = {
    name: '张三',
    describe: function () {
        console.log('姓名：'+ this.name) ;
    }
};

A.describe();

var f = A.describe;

f();
*/

// console.log(this === window);

//webstorm中是node环境

var a = [1,2,3,4];
console.log(Math.max.apply(null,a));

var counter = {
    count: 0,
    inc: function () {
        this.count++;
    }
};

var func = counter.inc.bind(counter);
func();

/*
var func = counter.inc;
func.call(counter);
*/

counter.count