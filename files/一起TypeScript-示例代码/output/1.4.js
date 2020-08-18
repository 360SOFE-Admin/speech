/**
 * 1.4 高级类型-1
 */
import 'jquery';
// 属性 a 和属性 b 都是必须的
let aAndB = {
    a: 1,
    b: 2,
    c: true,
};
let cAndD;
let cAndNumber;
// 1.4.2 联合类型
// 联合类型表示一个值可以是多个类型中的某一个
let str_num = 'a';
str_num = 1;
let aOrB = {
    a: 1,
    // b: 2,
    c: true
};
aOrB = {
    b: 1,
    c: false,
};
// 1.4.3 类型保护
function getAB(isA) {
    return isA ? { a: 1, c: true } : { b: 2, c: false };
}
aOrB = getAB(true);
// 下面两行都会报 error
// aOrB.a = 2;
// aOrB.b = 3;
// 频繁使用类型断言会让代码变得繁琐
aOrB.a = 2;
aOrB.b = 3;
// 类型保护指的是，利用一些表达式，使得联合类型在某个作用域内只被当作某一子类型
// 1.4.3.1 使用类型谓词 parameterName is Type 区分类型
function isA(o) {
    return o.a !== undefined;
}
if (isA(aOrB)) {
    aOrB.a = 2;
}
else {
    aOrB.b = 3;
}
// 1.4.3.2 使用 in 操作符
if ('a' in aOrB) {
    aOrB.a = 2;
}
else {
    aOrB.b = 3;
}
// 1.4.3.3 typeof 类型保护
// typeof 类型保护只适用于 number、string、boolean、symbol 和 bigint
function toNumber(a) {
    if (typeof a === 'bigint') {
        return Number(a);
    }
    if (typeof a === 'string') {
        return a.length;
    }
    if (typeof a === 'symbol') {
        return a.description.length;
    }
    if (typeof a === 'boolean') {
        return +a;
    }
    return a;
}
// 1.4.3.4 instanceof 类型保护
class A {
    isA() { return true; }
}
class B {
    isB() { return true; }
}
function instanceA(a) {
    if (a instanceof A) {
        return a.isA();
    }
    return a.isB();
}
// 我们在判断属性时可能需要这样写
function getCLen(o) {
    if (o.a && o.a.b && o.a.b.c) {
        return o.a.b.c.length;
    }
    return 0;
}
// 在 TypeScript 里我们可以这样简写 （需要 ts 3.7+）（编译结果会是三元表达式的嵌套）
function getClen1(o) {
    return o.a?.b?.c?.length || 0;
}
// 另一种情况是，假如我们知道 a、b、c 属性必然存在，也可以使用 ! 断言来剔除空结果（可以对比一下编译后代码的区别）
function getClen2(o) {
    return o.a.b.c.length;
}
// 注意两种写法看起来差不多，但在 TypeScript 中语义是完全不同的
// identifier! 是一种断言，它表示从 identifier 类型中去除 null 和 undefined
// ?. 类似于简写的三元运算符，它会根据运算符之前的结果是否与 undefined 或 null 严格相等来决定是否继续执行链式运算
// 加上小括号可以帮助我们理解：
// o.a!.b!.c!.length 相当于 (((o.a!).b!).c!).length
// o.a?.b?.c?.length 相当于 (((o.a)?.b)?.c)?.length
//# sourceMappingURL=1.4.js.map