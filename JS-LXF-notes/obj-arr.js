var arr = ['s','s',2,5,
    {
        name:'xx',
        age:13
    },{
        name:'aa',
        age:15
    }, function (x) {
        return x+1
    },8];

//数组内可以存放对象

console.log(arr);
console.log(arr.length);
console.log(arr[7]);
console.log(arr[6]);  //js中函数也是一种对象，所以数组里的元素可以是函数
console.log(arr[5]);