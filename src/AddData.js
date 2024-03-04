import React from 'react'
import Botton from './Botton'
const AddData = (props) => {

  function deleteData(id){
    props.setData(props.data.filter((element,index)=>{

return id !== index

    }))
  }

  // complete function
  function completeHandler(id){
    const newData = props.data[id]
    newData["isLineThrough"] = true
    props.setData([...props.data])
  }

  // editfunction
  function editHandler(id){
    const newData = props.data[id]
    props.setValues({ ...newData, id: id })
  }

  // if (props.data?.length === 0) return null
  return (
    <div>
   {props.data.map((element,index)=>{
    return  <div key={index} className="row   m-auto  d-flex  justify-content-between align-items-center"style={{width:"63%",background:"#444 "}}>
      <div className='col-12 col-md-7 '>
          <div style={{ textDecoration: element?.isLineThrough ? "line-through" : "none" }} className={`col-12 col-md-8 ${index === props?.editId ? "text-danger" : ""}`}>
             <h2 style={{ color: "#FF9900" }}>{element?.name} </h2> 
             <h5 className='text-white'>{element?.description}</h5>
          </div>
          </div>
          <div className='col-12 col-md-5  '>
          <span onClick={() => editHandler(index)}>
              <Botton title="Edit" color="green" />
              </span>

              <span onClick={() => completeHandler(index)}>        
              <Botton  title="Complete" color="cyan" />
              </span>

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