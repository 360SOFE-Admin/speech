/**
 * 1.6 枚举
 */
import 'jquery';
// 1.6.1 枚举的定义
// 枚举使用 enum 关键字，用于限制某个变量的值只能是有限个特定的常量
// 虽然 js 中没办法定义枚举，但在日常开发中其实经常会用到枚举，例如一个 http 请求的 method 就是一个枚举，css 中也有一些枚举类型的属性，例如 display
var display;
(function (display) {
    display[display["none"] = 0] = "none";
    display[display["block"] = 1] = "block";
    display[display["inline"] = 2] = "inline";
    display[display["inline-block"] = 3] = "inline-block";
    // ...
})(display || (display = {}));
// 枚举值默认是数字类型，会从 0 开始累加，你也可以自己定义枚举的值
var display1;
(function (display1) {
    display1[display1["none"] = -1] = "none";
    display1[display1["block"] = 0] = "block";
    display1[display1["inline"] = 0.5] = "inline";
    display1[display1["inline-block"] = 1.5] = "inline-block";
})(display1 || (display1 = {}));
// 枚举值也可以是字符串，甚至混合数字和字符串（不推荐）
var display2;
(function (display2) {
    display2["block"] = "block";
    display2[display2["inline"] = 0.5] = "inline";
    display2[display2["inline-block"] = 1.5] = "inline-block";
})(display2 || (display2 = {}));
// 枚举值还可以指向其它的枚举 key，以及可以生成数字或字符串的表达式
var display3;
(function (display3) {
    display3[display3["none"] = -1] = "none";
    display3["block"] = "block3";
    display3[display3["inline"] = Math.pow(display3.none + 2, 2)] = "inline";
    display3[display3["inline-block"] = 'inline-block'.length] = "inline-block";
})(display3 || (display3 = {}));
// 1.6.2 枚举的反向映射
// 当枚举的值为数值时，经过编译后的枚举对象存在反向映射，可以通过值检索到属性
let none = display.none;
let keyOfNone = display[none];
let displayNone = 0 /* none */;
//# sourceMappingURL=1.6.js.map