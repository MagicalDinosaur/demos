// console.log('es6.js is running')


// 箭头函数的this

let a = (...arr) => {
    console.log(arr)
}
a(1, 2, 3, 4)

var obj = {
    a: 10,
    b: () => {
        console.log(this.a); // undefined
        console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    },
    c: function () {
        console.log(this.a); // 10
        console.log(this); // {a: 10, b: ƒ, c: ƒ}
    }
}
obj.b();
obj.c();


// 拓展运算符和 rest参数
function realSort(...rest) {
    console.log(rest.sort((a, b) => a - b))
}
realSort(1, 10, 3) // [ 1, 3, 10 ]

console.log(1, 2, ...[4, 5, 6], 7, 8)  // 1 2 4 5 6 7 8

// 字符串的操作

// 判断字符串是否有某值
console.log("abcd".includes('a'))   //true
console.log("abcd".includes('z'))   //false

console.log("abcd".repeat(3))   //abcdabcdabcd

// 模版字符串
let name = "XiaoMing"
console.log(`My name is ${name}`)   //My name is XiaoMing

// 解构赋值
let [b, c, d] = [1, 2, 3]
console.log(b, c, d)  //1,2,3
let { b1, c1 } = { b1: 1, c1: 2 }
console.log(b1, c1)   // 1,2

function body({ eye, mouse } = { eye: 16, mouse: 20 }) {
    console.log(eye, mouse);
}
body({eye:10,mouse:10}) //10 10
body()  //16 20
body({eye:10})  //10 undefined

// maps 和 weakmaps
// 在ES6之前通过object实现哈希表
// map可以使用任何类型的值作为key值，允许对值进行 set、get 和 search
// object有原型，原型链上的键名有可能和对象上的键名产生冲突
let map={}
map['name']='danny'
map['age']=16

let map2=new Map([['name','danny'],[true,false]])
map2.set('key','666')
console.log(map2.size)  //size计算键值对个数
map2.forEach((item,key)=>{
    console.log(key,item)
})

// weakmap
// WeakMap 的 key 只能是 Object 类型。原始类型不能作为key值
// 在原生的WeakMap中,每个键对自己所引用对象的引用是 "弱引用",
// 这意味着,如果没有其他引用和该键引用同一个对象,这个对象将会被当作垃圾回收。
// var map3=new WeakMap(['name','danny'])
var wm1 = new WeakMap();
wm1.set({}, 37);
// map3.set('name','danny');


// generator

function* gen(){
    yield 1
    yield 2
    yield 3
}

let g=gen()

console.log('gen:'+g.next().value)  //1
console.log('gen:'+g.next().value)  //2
console.log('gen:'+g.next().value)  //3



