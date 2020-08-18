/**
 * 2.3 常见的开发问题
 * 本节包含对前面内容的一些复习
 */

import 'jquery';

// 2.3.1 提示“xxx refers to a value, but is being used as a type here.”

const user = {
	name: 'wang',
	age: '40',
};

type TKeyOfUser = keyof user;

// 解决方案：使用 typeof 关键字
type TKeyOfUser1 = keyof typeof user;



// 2.3.2 函数返回值不固定的情况

function plus(a: number | string, b: number | string): number | string {
	if (typeof a === 'string' || typeof b === 'string') {
		return `${a}${b}`;
	} else {
		return a + b;
	}
}

// 报错了，因为 plus 的结果是复合类型，不能直接当作 number 来使用
let n: number = plus(1, 2) + 3;

// 解决方案：函数重载

function plus1(a: number, b: number): number;
function plus1(a: string, b: string): string;
function plus1(a: number | string, b: number | string): number | string {
	if (typeof a === 'string' || typeof b === 'string') {
		return `${a}${b}`;
	} else {
		return a + b;
	}
}

n = plus1(1, 2) + 3; // ok!


// 2.3.3 this 无法推断类型的情况（例如：非类成员函数被 apply 调用）

function clickHandler() {
	// 报错了，this 是隐式 any 类型
	if (!this.target || this.target === '_self') {
		location.href = this.href;
	} else {
		throw new Error('不允许将 target 指向其它 frame！');
	}
}
$('a').on('click', clickHandler);

// 解决方案：使用 this 虚拟参数
function clickHandler1(this: HTMLAnchorElement) {
	if (!this.target || this.target === '_self') {
		location.href = this.href;
	} else {
		throw new Error('不允许将 target 指向其它 frame！');
	}
}
$('a').on('click', clickHandler1);



// 2.3.4 因为有额外属性无法赋值的情况

interface ICat {
	name: string;
	meo(): void;
}

interface IDog {
	name: string;
	wof(): void;
}

let animal: ICat = {
	name: 'Hello Kitty',
	meo() {
		console.log(`Mio! ${this.name}`);
	},
	wof() { // 报错了，ICat 没有 wof() 方法
		console.log(`Wof! ${this.name}`);
	},
};

// 解决方案：使用类型断言

const animal1: ICat = {
	name: 'Hello Kitty',
	meo() {
		console.log(`Mio! ${this.name}`);
	},
	wof() {
		console.log(`Wof! ${this.name}`);
	},
} as ICat;



// 另一个常常用到类型断言的地方是 JSON.parse

const cat = JSON.parse('{"name": "Tom"}'); // ts 本身不报错，但不推荐，因为 JSON.parse 的结果是 any 类型，会导致 cat 的类型也是 any，eslint 有相应的规则限制这种写法
const cat1: ICat = JSON.parse('{"name": "Tom"}'); // 同上，只声明 cat 的类型也是没办法通过 eslint 验证的
const cat2 = JSON.parse('{"name": "Tom"}') as ICat; // 正确的写法



// 2.3.5 因为类型不兼容导致无法直接类型断言的情况

animal.wof(); // 报错了，ICat 没有 wof() 方法

// 解决方案：利用 unknown 曲线救国（改造老项目的常用技巧之一，但是会破坏类型系统的静态性，新项目不推荐这么做）

(animal as unknown as IDog).wof();



// 2.3.6 setTimeout 和 setInterval 返回值的问题

// 如果你的项目目录下（或者 global 目录）安装了 @types/node 的类型声明，TypeScript 类型系统可能会默认把 setTimeout、setInterval 等方法的全局调用当作 Node.js 中的同名方法

// 报错了，因为 ts 认为 setTimeout 的返回值类型是 NodeJS.Timeout
let timer: number = setTimeout(() => {
	// do something
}, 1000);

// 解决方案1：显式地使用 window.setTimeout

let timer1: number = window.setTimeout(() => {
	// do something
}, 1000);

// 解决方案2：使用 ReturnType（推荐，这样可以兼容不同环境）

let timer2: ReturnType<typeof setTimeout> = setTimeout(() => {
	// do something
}, 1000);

// 欢迎大家补充
