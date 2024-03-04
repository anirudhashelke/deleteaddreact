import React, { useState } from 'react'
import AddData from './AddData'
import Botton from './Botton'
const initialState = {
  name: "",
  description: ""
}

const Forminput = () => {

    const  [value,setValue] = useState({initialState})
    const [data,setData]= useState([])

    // create a function to get value input cahnge
    const  onChange = (eve) =>{
    setValue({...value, [eve.target.name]: eve.target.value})
   
    }
    
    function onSubmit(e){
     e.preventDefault()
        if (value?.id === 0 || value?.id) {
            //  /update 
            data[value?.id] = value
            setData([...data])
        } else {
            setData([...data, value])
        }
        setValue(initialState)
        // setValue(value)
        // console.log(value)
    }
    // console.log(setValue)
    // console.log(value) // always show undefine

  return (
    <>
     <form onSubmit={onSubmit} className='row a-row  py-2 mb-4 text-white m-auto'style={{width:"63%",background:"#444"}}>
        <div className='col-12 col-md-4 '>
          <div>
          <label htmlFor="name">Name</label>
          <br />
        
          <input onChange={onChange}  value={value.name} type="text" name='name' id='name'className='w-100 a-input' />
          </div>
        </div>
        <div className='col-12 col-md-4  '>
        <div>
          <label htmlFor="name">Description</label>
          <br />
          
          <input onChange={onChange}  value={value.description}  name='description' type="text" id='name'className='w-100 a-input ' />

          </div>
        </div>
        <div className='col-12 col-md-4  '>
        <div>
          {/* <button className='a-button'>Add Todos</button> */}
          <div className='a-button'><Botton title={`${(value?.id === 0 || value?.id) ? "Update" : "Add"} Todos`} /></div>
          </div>
        </div>
      </form> 
      {/* <h1 className='text-white'>name= {data.name}</h1>
      <h1 className='text-white'>description={data.description}</h1> */}
      <AddData  data={data} setData={setData} setValues={setValue} editId={value?.id} />
      
    </>
  )
}

export default Forminput