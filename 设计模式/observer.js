        // 创建构造函数
        function Observer2() {
            //创建观察者数组
            this.observerList = [];
        }
        Observer2.prototype.on = function (key, obj) {
            if (!this.observerList[key]) {
                this.observerList[key] = []
            }
            this.observerList[key].push(obj);
        }
        Observer2.prototype.emit = function () {
            var oKey = Array.prototype.shift.apply(arguments);
            // 遍历数组所有的观察者并执行操作
            this.observerList[oKey].forEach(obj => {
                obj.apply(this, arguments)
            })
        }
        // 清除绑定，清楚某个绑定直接对数组进行增删操作，这里不一一列举
        Observer2.prototype.clean = function (obj) {
            this.observerList = [];
        }

        var ob2 = new Observer2();

        ob2.on('buy', function (shop) {
            console.log("购买：" + shop);
        })

        ob2.on('sale', function (shop) {
            console.log('售卖：' + shop)
        })

        ob2.emit('buy', "冰激凌")
        ob2.emit('sale', "西瓜")