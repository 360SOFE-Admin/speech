/**
 * 1.8 高级类型-2
 */
import 'jquery';
// 注意：只能用 T[K] 的形式，使用 T.K 会报错
function getContact(data) {
    return data.mobile;
}
// 1.8.2 typeof 操作符
// typeof 除了作为 JavaScript 的运算符之外，还可以用于编译阶段获取目标元素或属性的类型
// 还是刚才的例子，假如我们不是从类型上，而是直接从对象上获取属性，就需要用到 typeof 操作符
// 因为是直接从对象上获取属性，所以写法可以很随意：typeof data.mobile、typeof data['mobile']、(typeof data)['mobile'] 都可以
function getContact1(data) {
    return data.mobile;
}
// 1.8.3 keyof 操作符
// keyof 操作符用于获取一个类型的属性名集合
let userKey = 'mobile';
// 如果想要直接从对象上获取属性名集合，要借助 typeof
let userData = {
    name: 'foo',
    age: 12,
};
function getUserProp(key) {
    return userData[key];
}
const car = {
    data: {
        x: 0,
        y: 0,
    },
    methods: {
        move() {
            this.x++;
            this.y++;
        },
        getPos() {
            return [this.x, this.y];
        },
    }
};
//# sourceMappingURL=1.8.js.map