//导入React和ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'
//导入同级目录下的App.js文件
import App from './App'
import XiaoJieJie from './components/XiaoJieJie'

//Dom渲染App这个组件，然后将其挂载到public文件下的index.js中的root标签内
ReactDOM.render(<XiaoJieJie />,document.getElementById('root'));
// ReactDOM.render(<App />,document.getElementById('root'));