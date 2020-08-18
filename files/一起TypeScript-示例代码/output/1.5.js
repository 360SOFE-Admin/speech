/**
 * 1.5 类、接口与类型别名
 */
// 1.5.1 类
// 1.5.1.1 类的基本语法
// 类的语法和 es 的类规范基本一致，不同点之一是增加了 private、public、protected、readonly 等修饰符，以及可选类成员
import 'jquery';
class A {
    constructor(_a) {
        this.type = 'a';
        this._a = _a; // 类成员如果没有在类定义时初始化，就必须在 constructor 中赋值，否则会报错
    }
    c?() {
        return 'c';
    }
    get a() {
        return this._a;
    }
    static checkA(objA) {
        return objA.a === Math.trunc(objA.a);
    }
}
let ca = new A(100);
ca.c && ca.c();
// 1.5.1.2 抽象类
// 抽象类可以定义一些交给子类去实现的抽象成员
class AbsCheck {
}
// new AClassA(); // error 抽象类不允许直接实例化
class CheckClass extends AbsCheck {
    constructor(x) {
        super(); // 派生类必须包含 super
        this.isAbs = false; // 子类必须实现抽象类的 abstract 成员
        this.x = x;
    }
    check() {
        return this.x > 5;
    }
}
new CheckClass(1);
// 特殊情况：抽象类继承抽象类，可以不必实现抽象成员
class AbsCheck2 extends AbsCheck {
}
const arr_i = [true, 'test'];
// 类继承接口使用 implements 关键字，必须实现接口定义的所有成员
class checkB {
    constructor(a) {
        this.type = 'a';
        this._a = a;
    }
    a() {
        return this._a;
    }
}
let strO = {};
strO.test = 'test';
strO.foo = 'foo';
let strA = [];
strA[0] = 'a';
let strB = ['a'];
// 接口和类也可以继承类型别名（这种时候实际上是把类型别名当作了接口来使用，规则和继承接口一致）
class CTA {
    constructor() {
        this.type = 'a';
    }
    a() {
        return 0;
    }
}
const combine = {
    a: 'a',
    b: 'b',
    c: 'c',
};
// type TCombine = { b: string }; // error
// type TCombine = { c: string }; // error
//# sourceMappingURL=1.5.js.map