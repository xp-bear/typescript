const title1 = Symbol("title");
const title2 = Symbol("title");

const info = {
  [title1]: "程序员",
  [title2]: "老师",
};
console.log(info[title1]);
console.log(info[title2]);

export {};
