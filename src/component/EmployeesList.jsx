import React, { useState } from 'react'
import Axio from "axios"
import Table from './Table'

function EmployeesList() {
    const [employeeList,setEmployeeList] = useState([]) 

function clickHandler(){
    Axio.get("https://protected-fortress-49537.herokuapp.com/employees").then((res)=>{
        setEmployeeList(res.data)
        console.log(employeeList)
    })
}
  return (
    <div className=' mx-auto max-w-6xl flex flex-col gap-5'>
     <button className=' bg-slate-800 rounded-lg p-3 text-white w-96 mx-auto' onClick={clickHandler}>Show Employees</button>
      {employeeList && <Table data = {employeeList} /> }
    </div>
  )
}

export default EmployeesList