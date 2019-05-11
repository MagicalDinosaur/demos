let person = {
    name: "赵云",
    age: 25
}

let handler = {
    // 读取对象时，进行 get 操作
    get: (target, propKey, receiver) => {
        // return `我的名字叫：${target[propKey]}`
        return Reflect.get(target, propKey, receiver)
    },
    // 给对象赋值时，执行 set 操作
    set: (target, propKey, value, receiver) => {
        target[propKey] = `set(${value})`
        return Reflect.set(target, propKey, value, receiver)
    }
}
let personProxy = new Proxy(person, handler);

console.log(personProxy.name);// 我的名字叫：赵云
personProxy.name = "黄忠";
console.log(personProxy.name);// 我的名字叫：set(黄忠)


console.log(Reflect.has(person, 'name'));// --> true

console.log(Reflect.has(personProxy, 'name'));// --> true

console.log('=========')

let cat = { name: 'ketty', age: 18 }
console.log('name' in cat);// --> true 
console.log(Reflect.has(cat,'name'));// --> true



