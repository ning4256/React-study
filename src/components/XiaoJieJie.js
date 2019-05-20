import React, {Component, Fragment} from 'react'

class XiaoJieJie extends Component{

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      ulList: ["头部按摩1", "精油推背2"]
    }
  }

  render(){
    return(
      <Fragment>
          <div>
            <input value={this.state.inputValue} onChange={this.changeValue.bind(this)}/>
            <button onClick={this.addItem.bind(this)}>增加服务</button>
            </div>
          <ul>
            {this.state.ulList.map( (item,index)=> {
              return <li key={index} onClick={this.deleteItem.bind(this,index)}>{item}</li>
            })}
          </ul>
      </Fragment>
    )
  }
  //改变输入框的值
  changeValue(e){
    // console.log(e.target)
    this.setState({
      inputValue: e.target.value,
      
    })
  }
  //给ul下li 添加元素
  addItem(){
    this.setState({
      ulList: [...this.state.ulList, this.state.inputValue],
      inputValue: ''
    })
  }
  //删除元素
  deleteItem(index) {
    console.log(index)
    let ulList = this.state.ulList
    ulList.splice(index,1)
    this.setState({
      ulList: ulList
    })
  }
}

export default XiaoJieJie;