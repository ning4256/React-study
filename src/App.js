//导入React和React.Component组件，让这个App继承Component
import React, {Component} from 'react'
//App组件继承Component，然后写入html代码
class App extends Component {
  render() {
    return (
      <ul className='my-ul'>
        <li>{false? 'first li': 'no first li'}</li>
        <li>second li</li>
      </ul>
    )
    // var child1 = React.createElement('li', null, 'xiaofan');
    // var child2 = React.createElement('li', null, 'ning');
    // var root = React.createElement('ul', {className: 'my-ul'}, child1, child2);

  }
}
//将App这个组件暴露出去
export default App;