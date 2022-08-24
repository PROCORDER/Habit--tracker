import React, { PureComponent } from 'react';

class Habit extends PureComponent {
    state ={
    
    };
    componentDidMount(){
        console.log('habit: ${this.prop.habit.name} mounted');
    }
    componentWillUnmount(){
        console.log('habit: ${this.prop.habit.name} will unmounted');
    }
    handleIncrement= ()=>{
        
        this.props.onIncrement(this.props.habit);
    };
    
    handledecrement= ()=>{
        this.props.ondecrement(this.props.habit);
    };
    handledelete=()=>{
        this.props.ondelete(this.props.habit);
    };
    render() 
    {
        console.log('habit');
        const {name,count} = this.props.habit;
        //위에걸로 인해 name과 count이름의 데이터를 prop에서 가져올 수 있다 
        return (
        <>
            <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" 
            onClick={this.handleIncrement}
            >
                <i className="fa-solid fa-square-plus"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handledecrement}>
                <i className="fa-solid fa-square-minus"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handledelete} >
                <i className="fa-solid fa-trash"></i>
            </button>
            </li>
            
        </>
        
        ) 
        
    }
}

export default Habit;