//import React, { PureComponent } from 'react';
import React, { memo } from 'react';

const Input = memo((props) => {
  const inputRef = React.createRef();
  const onSubmit = (event)=>{
    event.preventDefault();
    const name=inputRef.current.value;//this가 필요없다
    name&&props.onAdd(name);
    inputRef.current.value='';
   };
  return(
    <form className="add-form" onSubmit={onSubmit}>
      <input
      ref={inputRef} 
      //윗과 동일
      type="text" 
      className="add-input" 
      placeholder='Habit' 
      />
      <button className="add-button">Add</button>
    </form>
   );
  });

  export default Input;

// component시절의 input
// export default input;
// class Input extends PureComponent {
//     inputRef = React.createRef();
//     //documentquelyselector과 비슷한 역할을 해주는 것
//     onSubmit = (event)=>{
//         event.preventDefault();
//         const name=this.inputRef.current.value;
//         name&&this.props.onAdd(name);
//         this.inputRef.current.value='';
//     };
//     render() {
//       console.log('input');
//         return (
//   <>
//   <form className="add-form" onSubmit={this.onSubmit}>
//     <input
//     ref={this.inputRef} 
//     //윗과 동일
//     type="text" 
//     className="add-input" 
//     placeholder='Habit' 
//     />
//     <button className="add-button">Add</button>
//   </form>
// </>

//         );
//     }
// }

//export default Input;