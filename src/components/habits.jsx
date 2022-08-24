import React, { Component } from 'react';
import Habit from './habit';
import Input from './input';

class Habits extends Component {
 
  

  handleIncrement= habit=>{
    this.props.onIncrement(habit);
  };
  
  handledecrement= (habit)=>{
    this.props.ondecrement(habit);
     
  };
  handledelete=(habit)=>{
    this.props.ondelete(habit);
  };
  handleAdd = name =>{
    this.props.onAdd(name);
  }
  render() {
    console.log('habits');
    return (
      <>
      <Input onAdd={this.handleAdd}/>
      <ul>
        {this.props.habits.map(habit => (
          <Habit 
          key={habit.id} 
          habit={habit}
          count={habit.count}
          onIncrement={this.handleIncrement} 
          ondecrement={this.handledecrement} 
          ondelete={this.handledelete} />
          //habit.id를 통해서 react가 성능 개선을 하기 때문에 id를 지정해 주는 것이 좋다  
          // habit이라는 이름으로 prop을 리턴 habit.jsx에서 prop를 받아올 수 있음
        ))}
      </ul>
      <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </>      
    );
  }
}

export default Habits;