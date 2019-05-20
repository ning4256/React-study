## React的学习

本项目是个人学习React所用，以下大多数据来自博客[技术胖](https://jspang.com/posts/2019/05/04/new-react-base.html)，只作为个人学习所用，不用于其他用途，如有侵权，请联系本人，务必删除，还请见谅。

### React开发环境搭建

#### 安装Node.js

此步骤不做过多详解，如有疑惑，还请阅读[nodejs安装](https://www.runoob.com/nodejs/nodejs-install-setup.html)。

Node.js 安装好以后，如果是Windows系统，可以使用 Win+R打开运行，然后输入cmd，打开终端（或者叫命令行工具）。

输入代码：

```linux
node -v
```

如果正确出现版本号，说明Node安装成功了。

然后再输入代码:

```linux
npm -v
```

如果正确出现版本号，说明npm也是没问题的，这时候我们的Node.js安装就算完成了。

#### 脚手架的安装

Node安装好之后，你就可以使用npm命令来安装脚手架工具了，方法很简单，只要打开终端，然后输入下面的命令就可以了。

```linux
npm install -g create-react-app
```

create-react-app是React官方出的脚手架工具，其实有很多第三方的脚手架工具，也有很多优秀的。但是作为初学者为了减少踩坑，所以我们使用官方的脚手架。

#### 创建第一个React项目

脚手架安装好以后，就可以创建项目了，我们在D盘创建一个ReactDemo文件夹，然后进入这个文件夹，创建新的React项目。

```linux
D:  //进入D盘
mkdir ReactDemo  //创建ReactDemo文件夹
create-react-app demo01   //用脚手架创建React项目
cd demo01   //等创建完成后，进入项目目录
npm start   //预览项目，如果能正常打开，说明项目创建成功
```

### 脚手架生成的项目目录介绍

#### 项目根目录中的文件

先从进入项目根目录说起，也就是第一眼看到的文件(版本不同，可能稍有不同)

- README.md: 这个文件主要作用就是对项目的说明，已经默认写好了一些东西，你可以简单看看。如果是工作中，你可以把文件中的内容删除，自己来写这个文件，编写这个文件可以使用Markdown的语法来编写。

- package.json: 这个文件是webpack配置和项目包管理文件，项目中依赖的第三方包（包的版本）和一些常用命令配置都在这个里边进行配置，当然脚手架已经为我们配置了一些了，目前位置，我们不需要改动。如果你对webpack了解，对这个一定也很熟悉。

- package-lock.json：这个文件用一句话来解释，就是锁定安装时的版本号，并且需要上传到git，以保证其他人再npm install 时大家的依赖能保证一致。

- gitignore : 这个是git的选择性上传的配置文件，比如一会要介绍的node_modules文件夹，就需要配置不上传。

- node_modules :这个文件夹就是我们项目的依赖包，到目前位置，脚手架已经都给我们下载好了，你不需要单独安装什么。

- public ：公共文件，里边有公用模板和图标等一些东西。

- src ： 主要代码编写文件，这个文件夹里的文件对我们来说最重要，都需要我们掌握。

##### public文件夹介绍

这个文件都是一些项目使用的公共文件，也就是说都是共用的，我们就具体看一下有那些文件吧。

- favicon.ico : 这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示。

- index.html : 首页的模板文件，我们可以试着改动一下，就能看到结果。

- mainifest.json：移动端配置文件，这个会在以后的课程中详细讲解。

##### src文件夹介绍

这个目录里边放的是我们开放的源代码，我们平时操作做最多的目录。

- index.js: 这个就是项目的入口文件，视频中我们会简单的看一下这个文件。

- index.css ：这个是index.js里的CSS文件。

- app.js : 这个文件相当于一个方法模块，也是一个简单的模块化编程。

- serviceWorker.js: 这个是用于写移动端开发的，PWA必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。

### HelloWorld和组件的讲解

先把src目录里的文件全部删除，我们一点点写一个·HelloWorld·程序，并通过编写这个程序了解一下什么是React中的组件化编程。

#### 入口文件的编写

写一个项目的时候一般要从入口文件进行编写的，在src目录下，新建一个文件index.js，然后打开这个文件。

然后写下以下的代码

```javaScript
//导入React和ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'
//导入同级目录下的App.js文件
import App from './App'
//Dom渲染App这个组件，然后将其挂载到public文件下的index.js中的root标签内
ReactDOM.render(<App />,document.getElementById('root'))
```

#### app组件的编写

现在写一下App组件，这里我们采用最简单的写法，就输出一个Hello word,就可以了。

```javaScript
//导入React和React.Component组件，让这个App继承Component
import React, {Component} from 'react'
//App组件继承Component，然后写入html代码
class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}
//将App这个组件暴露出去
export default App;
```

当我们这两个文件都编写完成后，可以在终端使用npm start(如果安装了yarn，也可以使用yarn start)命令，来看一下我们编写的结果了。

![hello Word](https://github.com/ning4256/React-study/blob/master/images/img1.png)

### 初识JSX语法

JSX就是Javascript和XML结合的一种格式。React发明了JSX，可以方便的利用HTML语法来创建虚拟DOM，当遇到<，JSX就当作HTML解析，遇到{就当JavaScript解析。

例如：

```JSX
      <ul className='my-ul'>
        <li>first li</li>
        <li>second li</li>
      </ul>
  ```

以前会这么写

```javascript
  var child1 = React.createElement('li', null, 'xiaofan');
  var child2 = React.createElement('li', null, 'ning');
  var root = React.createElement('ul', {className: 'my-ul'}, child1, child2);
```

#### 组件和普通JSX语法区别

这个说起来也只有简单的一句话，就是你自定义的组件必须首字母要进行大写，而JSX是小写字母开头的。

#### JSX中使用三元运算符

在JSX中也是可以使用js语法的，我们先简单使用一下。

```javascript
  <ul className='my-ul'>
    <li>{false? 'first li': 'no first li'}</li>
    <li>second li</li>
  </ul>
```

### React的一个小组件

在SRC的目录下面，新建一个文件Xiaojiejie.js文件，然后写一个基本的HTML结构。

```javascript
import React,{Component} from 'react'

class Xiaojiejie extends Component{
    render(){
        return  (
            <div>
               <div><input /> <button> 增加服务 </button></div>
               <ul>
                   <li>头部按摩</li>
                   <li>精油推背</li>
               </ul> 
            </div>
        )
    }
}
export default Xiaojiejie;
```

#### 组件外层包裹原则

这是一个很重要的原则，比如上面的代码，我们去掉最外层的<Div>，就回报错，因为React要求必须在一个组件的最外层进行包裹。

#### Fragment标签讲解

加上最外层的DIV，组件就是完全正常的，但是你的布局就偏不需要这个最外层的标签怎么办?比如我们在作Flex布局的时候,外层还真的不能有包裹元素。这种矛盾其实React16已经有所考虑了，为我们准备了`<Fragment>`标签。

要想使用`<Fragment>`，需要先进行引入

```javascript
import React,{Component,Fragment } from 'react'
```

然后把最外层的`<div>`标签，换成<Fragment>标签，代码如下。

```javascript
import React,{Component,Fragment } from 'react'

class Xiaojiejie extends Component{
    render(){
        return  (
            <Fragment>
               <div><input /> <button> 增加服务 </button></div>
               <ul>
                   <li>头部按摩</li>
                   <li>精油推背</li>
               </ul> 
            </Fragment>
        )
    }
}
export default Xiaojiejie 
```

这时候你再去浏览器的Elements中查看，就回发现已经没有外层的包裹了。

### React学习理论

#### 响应式设计和数据的绑定

`React`不建议你直接操作DOM元素,而是要通过数据进行驱动，改变界面中的效果。`React`会根据数据的变化，自动的帮助你完成界面的改变。所以在写`React`代码时，你无需关注`DOM`相关的操作，只需要关注数据的操作就可以了（这也是`React`如此受欢迎的主要原因，大大加快了我们的开发速度）。

**通常情况下，我们可以写一个构造函数，里面给一些默认的值和参数**

```javaScript
constructor(props) {
  super(pros) //调用父函数的构造函数
  this.state = {
    inputValue: '',
    list: []
  }
}
```

在`React`中的数据绑定和`Vue`中几乎一样，也是采用字面量(我自己起的名字)的形式，就是使用{}来标注，其实这也算是`js`代码的一种声明。比如现在我们要把`inputValue`值绑定到`input`框中，只要写入下面的代码就可以了。其实说白了就是在JSX中使用js代码。

```html
<input value={this.state.inputValue}/>
```

#### 绑定事件

这时候你到界面的文本框中去输入值，是没有任何变化的，这是因为我们强制绑定了`inputValue`的值。如果要想改变，需要绑定响应事件，改变`inputValue`的值。比如绑定一个改变事件，这个事件执行`inputChange()`(当然这个方法还没有)方法。

```html
<input value={this.state.inputValue} onChange={this.inputChange} />
```

现在还没有inputChange()这个方法，在render()方法的下面建立一个inputChange()方法，代码如下：

```javaScript
 inputChange(e){
        console.log(e);
    }
```

这时候会发现响应事件可以使用了，但是如何获得我们输入的值那，程序中输入下面的代码。

```javaScript
inputChange(e){
    console.log(e.target.value);
}
```
这时候控制台是可以打印出输入的值的，视频中会有演示。看到获得了输入的值，想当然的认为直接改变inputValue的值就可以了(错的).

```javaScript
inputChange(e){
    console.log(e.target.value);
    this.state.inputValue=e.target.value;
}
```

写完后再进行预览，会发现程序直接报错了（加项服务还真的有点难度哦,大宝剑不好作的...........）。

其实我们范了两个错误：

- 一个是this指向不对，你需要重新用bind设置一下指向(ES6的语法)。
- 另一个是React中改变值需要使用this.setState方法。
第一个错误很好解决，直接再JSX部分，利用bind进行绑定就好。

```javaScript
 <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
```
这步做完，我们还需要加入setState方法，改变值。代码如下:

```javaScript
inputChange(e){
    // console.log(e.target.value);
    // this.state.inputValue=e.target.value;
    this.setState({
        inputValue:e.target.value
    })
}
```

现在测试一下，输入框可以改变值了，其实这节课很重要，里边设计了React的重要思想，建议这节课可以反复多看两遍，虽然不难，但是这是一个最基本的思想的转变。下节课可要真的增加服务项目了。