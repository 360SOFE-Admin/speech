/**
 * 2.3 常见的开发问题
 * 本节包含对前面内容的一些复习
 */
import 'jquery';
// 2.3.1 提示“xxx refers to a value, but is being used as a type here.”
// 解决方案：使用 typeof 关键字
const user = {
    name: 'wang',
    age: '40',
};
function plus(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return `${a}${b}`;
    }
    else {
        return a + b;
    }
}
// 2.3.3 this 无法推断类型的情况（例如：非类成员函数被 apply 调用）
// 解决方案：使用 this 虚拟参数
function clickHandler() {
    if (!this.target || this.target === '_self') {
        location.href = this.href;
    }
    else {
        throw new Error('不允许将 target 指向其它 frame！');
    }
}
$('a').on('click', clickHandler);
let animal;
animal = {
    name: 'Hello Kitty',
    meo() {
        console.log(`Mio! ${this.name}`);
    },
    wof() {
        console.log(`Wof! ${this.name}`);
    },
};
// 另一个常常用到类型断言的地方是 JSON.parse
animal = JSON.parse('{"name": "Tom"}');
// 2.3.5 因为类型不兼容导致无法直接类型断言的情况
// 解决方案：利用 unknown 曲线救国（改造老项目的常用技巧之一，但是会破坏类型系统的静态性，新项目不推荐这么做）
animal.wof();
// 2.3.6 setTimeout 和 setInterval 返回值的问题
// 如果你的项目目录下（或者 global 目录）安装了 @types/node 的类型声明，TypeScript 类型系统可能会默认把 setTimeout、setInterval 等方法的全局调用当作 Node.js 中的同名方法
// 这会导致返回值并不是 number 类型
let timer = setTimeout(() => {
    // do something
}, 1000); // NodeJS.Timeout
// 解决方案：显式地使用 window.setTimeout
let timer1 = window.setTimeout(() => {
    // do something
}, 1000); // number
//# sourceMappingURL=2.3.js.map