import React, { Component } from 'react';
import './App.css';

function Dict(props){
    if(props.celsius >= 100){
        return <p>on</p>;
    }else{
        return <p>off</p>;
    }
}

class Databind extends  Component{
    constructor(props){
        super(props);
        this.state = {id: 1,level: 'some'};
        this.transData = this.transData.bind(this);
    }

    transData(e){
        let value = e.target.value;
        if(this.props.type == 2){
            value = e.target.value / 10;
        }
        this.props.onToParent(value);
    };

    render() {
        const level = this.props.level;
        return (
            <input type="number" onChange={this.transData} value={level}/>
        )
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {info: 'test',level: 1};
        this.handleClick = this.handleClick.bind(this);
    }

    activePop = ()=>{
        this.setState({info: 'test123'});
        console.log(11212);
    };

    handleClick(e){
        console.log(e.target);
        console.log(this.state.info);
    }

    handleChild = (value)=>{
        this.setState({level: value});
    };

      render() {
        const value1 = this.state.level;
        const value2 = this.state.level * 10;
        return (
          <div className="App">
            <p className="App-intro">
              <span onClick={this.activePop}>{this.props.name}</span>
            </p>
              <p onClick={this.handleClick}>
                  {this.state.info}
              </p>
              <Dict celsius={100}/>
              <Databind level={value1} type="1" onToParent={this.handleChild}/>
              <Databind level={value2} type="2" onToParent={this.handleChild}/>
          </div>
        );
      }
}

export default App;
