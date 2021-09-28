import React from 'react'

function Comp({data}) {
    return (
        <div style={{backgroundColor:'red',width:'25%',right:30,position:'absolute',bottom:'0',color:'white',border:'1px solid'}}>
        <h1 style={{textAlign:'center'}}>Completed Tasks</h1>
        {data.map((obj)=>{
          if(obj.status){
            return(
              <p>{obj.text}</p>
            )
          }
          return null
        })}
      </div>
    )
}

export default Comp
