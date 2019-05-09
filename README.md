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