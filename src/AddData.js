import React from 'react'
import Botton from './Botton'
const AddData = (props) => {

  function deleteData(id){
    props.setData(props.data.filter((element,index)=>{

return id !== index

    }))
  }

  return (
    <div>
   {props.data.map((element,index)=>{
    return  <div key={index} className="row   m-auto  d-flex  justify-content-between align-items-center"style={{width:"63%",background:"#444"}}>
      <div className='col-12 col-md-8 '>
          <div>
             <h2 style={{ color: "#FF9900" }}>{element?.name} </h2> 
             <h5 className='text-white'>{element?.description}</h5>
          </div>
          </div>
          <div className='col-12 col-md-4  '>
              <Botton  title="Complete" color="cyan" />
              <span onClick={() => deleteData(index)}>
                  <Botton title="Delete" color="warning-light" />
               </span>
              
          </div>
     
     </div>
   })}
   </div>
   
  )
}

export default AddData