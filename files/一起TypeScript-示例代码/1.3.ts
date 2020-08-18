/**
 * 1.3 类型推断和类型断言
 */

import 'jquery';

// 1.3.1 简单类型推断
// 声明语句中，将简单类型赋值给一个变量，TypeScript 将推断变量为相应的简单类型

let str = 'any string';
let num = 1;
let bool = true;



// 1.3.2 函数返回值推断
// TypeScript 会根据 return 语句推断函数的返回值类型，如果没有定义 return 语句，TypeScript 默认认为函数的返回值为 void

const split = function(s: string) {
	return s.split('');
};

function thisIsVoid() {
	// void
}

function voidOrArray(s?: string) {
	return s ? split(s) : thisIsVoid();
}

function getFalsy(type: string) {
	switch (type) {
		case 'string':
			return '';
		case 'number':
			return 0 as const;
		case 'bigint':
			return 0n;
		case 'boolean':
			return false;
		case 'void':
		case 'undefined':
			return void 0;
		case 'null':
			return null;
		case 'never':
			throw new Error('never return');
		default:
			return NaN;
	}
}



// 1.3.3 数组的类型推断

// TypeScript 不会将数组类型推断为元组
const arr_num = [1, 2, 3];
arr_num.push(0);
const arr_str = ['a', 'b', 'c'];
arr_str.push('d');

// 利用 as const 语法，可以推断为静态类型
const arr_num1 = [1, 'a', true] as const;

// 当多个数组成员属于不同的类型时，TypeScript 会将数组成员推断为联合类型
const arr_complex = [1, 'a', true];
arr_complex[1] = 3;
arr_complex[1] = 'b';
arr_complex[1] = false;



// 1.3.4 对象的类型推断

// TypeScript 会根据赋值的对象生成推断类型

const obj1 = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	length: 3,
};



// 1.3.5 类型断言

// 前面已经提到过两种类型断言的形式
let unknownObj: unknown = 1;
(unknownObj as number) *= 2;
(<string>unknownObj) += 'test';

// 类型断言并不是一定会成功的，TypeScript 会对断言进行一定的验证

let objA = { a: 1 };

(objA as { b: number }).b = 2; // error 直接断言一个不兼容的类型会报错

(objA as unknown as { b: number }).b = 2; // 利用 unknown 曲线救国
