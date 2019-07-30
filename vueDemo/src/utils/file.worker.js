// Worker线程中全局对象为 self，代表子线程自身，这时 this指向 self
self.postMessage('这是webwork处理的数据');

setTimeout(() => {
    self.postMessage('3s后返回这个数据');
    self.close();
}, 3000);

self.onmessage = function (res) {
    console.log(res.data); //这是webwork处理的数据
};

self.onerror = function (error) {
    console.log(error); //这是webwork处理的数据
};

