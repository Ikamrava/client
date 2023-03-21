import React, { useEffect, useState } from 'react'
import Axio from "axios"
import Table from './Table'

function EmployeesList() {
    const [employeeList,setEmployeeList] = useState([]) 
    const [showTable,setShowTable] = useState(false)
    const [loading,setLoading] = useState(false)

    function deletekHandler(id){
      setLoading(true)
      Axio.post("http://localhost:3001/delete",{id}).then((res)=>{
        console.log(res)
    })
      setLoading(false)
      console.log(id)
      setEmployeeList( prev => {
        prev.filter(item => item.id != id)
      })
      setShowTable(false)
    
}

function clickHandler(){
  console.log("first")
  setLoading(true)

    Axio.get("https://protected-fortress-49537.herokuapp.com/employees").then((res)=>{
        setEmployeeList(res.data)
        setShowTable(!showTable)
       
    })
    setLoading(false)
    
}





  return (
    <div className=' mx-auto max-w-6xl flex flex-col gap-5'>
     <button className=' bg-slate-800 rounded-lg p-3 text-white w-96 mx-auto' onClick={clickHandler}>Show Employees</button>
     {loading ? ".....Loading" : employeeList && showTable && <Table data = {employeeList}  deletekHandler={deletekHandler} />}

      
    </div>
  )
}

export default EmployeesList