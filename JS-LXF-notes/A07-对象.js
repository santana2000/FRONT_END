var time = new Date();
console.log(time);
console.log(time.getFullYear());
console.log(time.getDate());
console.log(time.getMonth()); //注意月份范围是0~11，8表示九月
console.log(time.getDay());

//两种创建时间对象的方法
var d = new Date(2015, 5, 19, 20, 15, 30, 333 );
console.log(d);


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
var RegExp=/^\d{3}\s\_\d{3,8}$/;  //这种写法无需转义
console.log(RegExp.test('010 _35684'));;      //test()方法
                                                //exec()方法

//分割字符串
var newarr='a,b;; c  d'.split(/[\s\,\;]+/);  //  ^与 & 来整行匹配
console.log(newarr);

//通过（）分组来提取字串

//邮箱
var mail = /^[a-z0-9\.]+\@[a-z0-9]+\.\w{3}$/;


//json--------------------------

var xiaoming = {
    name: 'm',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    mee:function () {
        return 5;
    }
};

 //var xiaomin = JSON.stringify(xiaoming, null, '  ');  // 只要加参数就缩进
                                       // 第二个参数控制筛选的键值

var xiaomin = JSON.stringify(xiaoming, convert, ' ');  // 还可传入函数

function convert(key,value) {
    if (typeof value === 'string'&& key==='name') {     // key只能做判断条件，只返回更改后的value
        return value.toUpperCase();
    }
    return value;
}

console.log(xiaomin);