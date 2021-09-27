import React,{ useState } from 'react';
import './App.css';

function App() {
  const [toDos,settoDos]=useState([])
  const [toDo, settoDo] = useState([])
  return (
    <section>
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>settoDo(e.target.value)}type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          settoDos([...toDos,{id:Date.now(),text:toDo,status:false}])
          settoDo([])
          }} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((obj)=>{
          return (
            <div className="todo">
              <div className="left">
                <input onClick={(e)=>{
                  console.log(e.target.checked)
                  console.log(obj)
                  settoDos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.status=e.target.checked
                      return obj2
                    }
                    return obj2
                  }))
                }} checked={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={(()=>{
                  console.log(obj)
                  settoDos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2=null
                      return obj2
                    }
                    return obj2
                  }))
                })} className="fas fa-times"></i>
              </div>
            </div>
          );
        })    
        }
        
      </div>
      </div>
      <div style={{backgroundColor:'red',width:'25%',right:30,position:'absolute',bottom:'0',color:'white',border:'1px solid'}}>
        <h1 style={{textAlign:'center'}}>Completed Tasks</h1>
        {toDos.map((obj)=>{
          if(obj.status){
            return(
              <h1>{obj.text}</h1>
            )
          }
          return null
        })}
      </div>
    </section>
  );
}

export default App;
