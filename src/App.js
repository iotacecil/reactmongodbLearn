import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'
import { Button ,List} from 'antd-mobile';
import {addAsync} from "./index.redux";

// import {remove} from "./index.redux";

// import 'antd-mobile/dist/antd-mobile.css'

class App extends Component {
  render() {
      let boss = '张三'
      const store = this.props.store
      const num = store.getState()
      const add = this.props.add
      const addAsync = this.props.addAsync
      const remove = this.props.remove
    return (
        <div>
            <h1>现在state是{num}</h1>
            <Button onClick={()=>store.dispatch(add())}>添加</Button>
            <Button onClick={()=>store.dispatch(remove())}>删除</Button>
            <Button onClick={()=>store.dispatch(addAsync())}>异步</Button>
     <h2>app boss {boss}</h2>
        <One boss1 = 'fromapp'></One>
        <FUN boss1 = "from app"></FUN>
        </div>
    );
  }
}



// 函数组件
function FUN(props){
  return <h2>from FUN {props.boss1}</h2>
}

class One extends Component{
  constructor(props){
    super(props)
      this.state = {
      arr:["a","b","c"]
      }
      // this.additem = this.additem.bind(this)
  }
    additem = () =>{
  // additem(){
    this.setState(
        {
            arr:[...this.state.arr,"aaa"+Math.random()]
        }
    )
  }

  render(){
    const boss2 = "boss1"
      return (
          <div>
          <ul>
              {this.state.arr.map(v=>{
             return <li key={v}>{v}</li>
              })}
          </ul>
          <h2>营长,{this.props.boss1}</h2>
            <Button type = "primary" onClick={()=>this.additem()}>add users</Button>
              <List renderHeader></List>
          </div>
      )
  }
}


export default App;
