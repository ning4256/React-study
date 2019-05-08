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