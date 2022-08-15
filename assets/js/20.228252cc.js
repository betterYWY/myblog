(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{603:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("多层回调函数相互嵌套，形成回调地狱")]),t._v(" "),a("ul",[a("li",[t._v("代码耦合性太强，难以维护")]),t._v(" "),a("li",[t._v("大量冗余的代码相互嵌套，可读性变差"),a("br"),t._v("\n为解决以上问题，ES6推出"),a("strong",[t._v("Promise")])])])]),a("h2",{attrs:{id:"promise基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise基本概念"}},[t._v("#")]),t._v(" Promise基本概念")]),t._v(" "),a("ol",[a("li",[t._v("Promise是一个构造函数\n"),a("ul",[a("li",[t._v("我们可以构造出Promise的实例： "),a("code",[t._v("const p = new Promise()")])]),t._v(" "),a("li",[t._v("new出来的Promise实例对象，代表一个异步操作")])])]),t._v(" "),a("li",[t._v("promise对象有三种状态\n"),a("ul",[a("li",[t._v("pending：初始状态，待定")]),t._v(" "),a("li",[t._v("fulfilled： 意味着操作成功完成")]),t._v(" "),a("li",[t._v("rejected： 意味着操作失败"),a("br"),t._v("\n只有异步操作的结果，可以决定当前是哪种状态，任何其他操作都无法改变这个状态。状态只能从"),a("code",[t._v("pending")]),t._v("变为"),a("code",[t._v("fulfilled")]),t._v("或"),a("code",[t._v("rejected")]),t._v("，一旦这两种情况\n之一发生，状态就凝固了，不会再变")])])]),t._v(" "),a("li",[t._v("Promise.prototype上包含一个.then()方法\n"),a("ul",[a("li",[t._v("每一个"),a("code",[t._v("new Promise()")]),t._v("构造出来的实例对象都可以通过原型链访问到"),a("code",[t._v(".then()")]),t._v("方法，例如： "),a("code",[t._v("p.then()")])]),t._v(" "),a("li",[a("code",[t._v(".then()")]),t._v("方法用来预先指定成功和失败的回调函数。成功的回调是必选的，失败是可选的。")])])])]),t._v(" "),a("h2",{attrs:{id:"promise-prototype-then-方法-链式调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-prototype-then-方法-链式调用"}},[t._v("#")]),t._v(" Promise.prototype.then()方法 链式调用")]),t._v(" "),a("ul",[a("li",[t._v("接收两个函数作为参数，分别代表fulfilled（成功）和rejected（失败）")]),t._v(" "),a("li",[a("code",[t._v(".then()")]),t._v("返回一个新的"),a("code",[t._v("Promise")]),t._v("实例，所以它可以链式调用")]),t._v(" "),a("li",[t._v("当前面的Promise状态改变时，"),a("code",[t._v(".then()")]),t._v("根据其最终状态，选择特定的状态响应函数执行")]),t._v(" "),a("li",[t._v("状态响应函数可以返回新的"),a("code",[t._v("promise")]),t._v("，或其他值，不返回值也可以我们可以认为它返回了一个null；")]),t._v(" "),a("li",[t._v("如果返回新的"),a("code",[t._v("promise")]),t._v("，那么下一级"),a("code",[t._v(".then()")]),t._v("会在新的promise状态改变之后执行")]),t._v(" "),a("li",[t._v("如果返回其他任何值，则会立即执行下一级"),a("code",[t._v(".then()")])])]),t._v(" "),a("h2",{attrs:{id:"promise-prototype-catch方法-捕捉错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-prototype-catch方法-捕捉错误"}},[t._v("#")]),t._v(" Promise.prototype.catch方法：捕捉错误")]),t._v(" "),a("p",[a("code",[t._v("Promise.prototype.catch")]),t._v(" 方法是 "),a("code",[t._v("Promise.prototype.then(null, rejection)")]),t._v("的别名，用于指定发生错误时的回调函数。")]),t._v(" "),a("ul",[a("li",[t._v("在Promise的链式操作中，如果发生了错误，可以使用"),a("code",[t._v(".catch()")]),t._v("方法进行捕捉和处理")]),t._v(" "),a("li",[t._v("Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕捉")]),t._v(" "),a("li",[t._v("如果不希望前面的错误导致后续的"),a("code",[t._v(".then")]),t._v("无法正常执行，则可以将"),a("code",[t._v(".catch")]),t._v("的调用提前")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/posts.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("posts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// some code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理前一个回调函数运行时发生的错误")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'发生错误！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"promise-all-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-all-方法"}},[t._v("#")]),t._v(" Promise.all 方法")]),t._v(" "),a("p",[t._v("会发起并行的"),a("code",[t._v("Promise")]),t._v("异步操作，等所有的异步操作全部结束后才会执行下一步的"),a("code",[t._v(".then")]),t._v("操作(等待机制)\n"),a("center",[a("code",[t._v("var p = Promise.all([p1,p2,p3]);")])])],1),t._v(" "),a("ul",[a("li",[t._v("Promise.all()方法接受一个数组作为参数，p1、p2、p3 都是 Promise 对象的实例。（Promise.all 方法的参数不一定是数组，但是必须具有 iterator 接口，且返回的每个成员都是 Promise 实例。）")]),t._v(" "),a("li",[t._v("只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。")]),t._v(" "),a("li",[t._v("只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成一个Promise对象的数组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" promises "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/post/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \nPromise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("promises"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("posts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...  ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reason")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"promise-race-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-race-方法"}},[t._v("#")]),t._v(" Promise.race 方法")]),t._v(" "),a("p",[t._v("Promise.race 方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。\n"),a("center",[a("code",[t._v("var p = Promise.race([p1,p2,p3]);")])])],1),t._v(" "),a("ul",[a("li",[t._v("上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的返回值。")]),t._v(" "),a("li",[t._v("如果Promise.all方法和Promise.race方法的参数，不是Promise实例，就会先调用下面讲到的Promise.resolve方法，将参数转为Promise实例，再进一步处理。")])]),t._v(" "),a("h2",{attrs:{id:"promise-resolve-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-resolve-方法"}},[t._v("#")]),t._v(" Promise.resolve 方法")]),t._v(" "),a("p",[a("code",[t._v("Promise.resolve()")]),t._v(" 可以看作是 "),a("code",[t._v("new Promise(resolve => resolve())")]),t._v(" 的简写，可以用于快速封装字面量对象或其他对象，将其封装成 Promise 实例。")]),t._v(" "),a("ul",[a("li",[t._v("如果 "),a("code",[t._v("Promise.resolve")]),t._v(" 方法的参数，不是具有 "),a("code",[t._v("then")]),t._v(" 方法的对象（又称 thenable 对象），则返回一个新的 "),a("code",[t._v("Promise")]),t._v(" 对象，且它的状态为fulfilled。所以回调函数会立即执行，"),a("code",[t._v("Promise.resolve")]),t._v("方法的参数就是回调函数的参数。")]),t._v(" "),a("li",[t._v("如果"),a("code",[t._v("Promise.resolve")]),t._v("方法的参数是一个"),a("code",[t._v("Promise")]),t._v("对象的实例，则会被原封不动地返回。")])]),t._v(" "),a("h2",{attrs:{id:"promise-reject-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-reject-方法"}},[t._v("#")]),t._v(" Promise.reject 方法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Promise.reject(reason)")]),t._v(" 方法也会返回一个新的Promise实例，该实例的状态为rejected。Promise.reject方法的参数reason，会被传递给实例的回调函数。")])]),t._v(" "),a("h2",{attrs:{id:"推荐相关文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐相关文章"}},[t._v("#")]),t._v(" 推荐相关文章")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/async与await.html"}},[t._v("async与await")])],1)])}),[],!1,null,null,null);s.default=n.exports}}]);