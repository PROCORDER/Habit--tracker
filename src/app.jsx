
import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement= habit=>{
    const habits = this.state.habits.map(item=>{
      if(item.id===habit.id){
        return{...habit,count:habit.count+1};
      }
      return item;
    })
    this.setState({habits});
};

handledecrement= (habit)=>{
  const habits = this.state.habits.map(item=>{
    if(item.id===habit.id){
      const count=habit.count-1;
      return{...habit,count:count<0? 0: count};
    }
    return item;
  })
  this.setState({habits});

};

handledelete=(habit)=>{
const habits =this.state.habits.filter(item => item.id !==habit.id);
this.setState({ habits });
};
handleAdd=(name)=>{
  const habits = [...this.state.habits,{id: Date.now(),name,count: 0}];
  this.setState({ habits });
}
handlereset=event=>{
  const habits = this.state.habits.map(item=>{
    if(item.count !==0){
      return{...item,count:0}
    } 
    return item;
  })
  this.setState({habits});
}
  
  render() {
    console.log('app');
    
    return (
      <>
      <Navbar 
      totalCount={this.state.habits.filter(item=>item.count>0).length} 
      />
      <Habits
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        ondecrement={this.handledecrement}
        ondelete={this.handledelete}
        onAdd={this.handleAdd}
        onReset={this.handlereset} 
        />
        </>
    );
  }
}

export default App;
