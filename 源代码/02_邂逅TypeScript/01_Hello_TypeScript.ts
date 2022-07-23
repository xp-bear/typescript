let message: string = "hello typescript";

function foo(payload: string) {
  console.log(payload.length);
}

// foo(123)
foo("aaa");

// 之所以 tslint 会提示这个错误，是因为在 Commonjs 规范里，没有像 ESModule 能形成闭包的「模块」概念，
// 所有的模块在引用时都默认被抛至全局，
// 因此当再次声明某个模块时，TypeScript 会认为重复声明了两次相同的变量进而抛错。

// 最简单的解决方法是在报错的文件底部添加一行代码：export {}。
// 这行代码会「欺骗」tslint 使其认为当前文件是一个 ESModule 模块，因此不存在变量重复声明的可能性。
export {};
