import React, { useState } from 'react'
import Axio from "axios"

function Input() {
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [age,setAge] = useState("")
    const [country,setCountry] = useState("")
    const [position,setPosition] = useState("")
    const [wage,setWage] = useState("")
    
    function onClickHandler(){
        try{
            Axio.post("https://protected-fortress-49537.herokuapp.com/create",{
                fname,lname,age,country,position,wage
            }).then((res) => {
                console.log("first")
            })
            alert("The Data has been succefully added")

        }catch(er){
            alert(er)
        }
        
    }
  return (
    <div className='w-96 mx-auto  flex flex-col items-center gap-5 mt-10' >
        <div className='flex justify-between w-[100%] '>
            <label className =" font-bold">Firts Name</label>
            <input className=' border-black border-2' value={fname} onChange={(e)=>setFname(e.target.value)}></input>
        </div>
        <div className='flex justify-between w-[100%] '>
            <label className =" font-bold">Last Name</label>
            <input className=' border-black border-2' value={lname} onChange={(e)=>setLname(e.target.value)}></input>
        </div>
        <div className='flex justify-between w-[100%] '>
            <label className =" font-bold">Age</label>
            <input className=' border-black border-2' value={age} onChange={(e)=>setAge(e.target.value)}></input>
        </div>
        <div className='flex justify-between w-[100%] '>
            <label className =" font-bold">Country</label>
            <input className=' border-black border-2' value={country} onChange={(e)=>setCountry(e.target.value)}></input>
        </div>
        <div className='flex justify-between w-[100%] '>
            <label className =" font-bold">Position</label>
            <input className=' border-black border-2' value={position} onChange={(e)=>setPosition(e.target.value)}></input>
        </div>
        <div className='flex justify-between w-[100%] '>
            <label className =" font-bold">Wage</label>
            <input className=' border-black border-2' value={wage} onChange={(e)=>setWage(e.target.value)}></input>
        </div>
        <button className=' bg-slate-800 w-[100%] text-white p-4 rounded-lg font-bold' onClick={onClickHandler}>Input Data</button>
        
      </div>
  )
}

export default Input