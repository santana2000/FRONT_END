function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); // 'A'
    }
    console.log('x in foo() = ' + x); // 1
    bar();
}

foo();

//----------------------
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        var myage= y - this.birth;
        console.log(myage);
        return myage;
    }
};

//xiaoming.age;
xiaoming.age();

//-----------------------------
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaohua = {
    name: '小明',
    birth: 1980,
    age: getAge
};

console.log(xiaohua.age());// 25
//getAge.apply(xiaohua,[]);
//要指定函数的this指向哪个对象，可以用函数本身的apply方法
//它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。

//另一个与apply()类似的方法是call()
//唯一区别是apply()把参数打包成Array再传入;call()把参数按顺序传入
getAge.call(xiaohua);
