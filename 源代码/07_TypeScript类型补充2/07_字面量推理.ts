// const info = {
//   name: "why",
//   age: 18
// }

// info.name = "kobe"

type Method = "GET" | "POST";

function request(url: string, method: Method) {
  console.log(url, method);
}

// type Request = {
//   url: string;
//   method: Method;
// };

// const options: Request = {
//   url: "https://www.coderwhy.org/abc",
//   method: "POST",
// };

// const options = {
//   url: "https://www.coderwhy.org/abc",
//   method: "POST"
// } as const

const options = {
  url: "https://www.coderwhy.org/abc",
  method: "POST",
};

request(options.url, options.method as Method);

export {};
