this.a=222
var obj = {
    a: 6,
    b: function () {
        console.log(this);  //obj
        console.log(this.a);//6
    },
    c: () => {
        console.log(this);  //{}
        console.log(this.a);//222
    },
    d: function () {
        setTimeout(() => {
            console.log(this);  //window
            console.log(this.a);//6
        }, 100);
    },
    e: function () {
        setTimeout(function () {
            console.log(this);  //timeout
            console.log(this.a);//undefined
        }, 100);
    }
}

// var obj = {
//     a: 10,
//     b: () => {
//       console.log(this.a); // undefined
//       console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//     },
//     c: function() {
//       console.log(this.a); // 10
//       console.log(this); // {a: 10, b: ƒ, c: ƒ}
//     }
//   }

obj.e();
