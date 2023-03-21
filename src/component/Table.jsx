


function Table({data ,deletekHandler}) {

    const allData = data.map(item=>(
        <tr className='grid grid-cols-8 align-middle' key={item.id} >
          <td className=' text-center border-2 border-cyan-400'>{item.id}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.f_name}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.l_name}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.age}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.country}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.position}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.wage}</td>
          <td><button onClick={()=>deletekHandler(item.id)}>Delete</button></td>
      </tr>
      
     
    ))
      
 
      
  return (
    
    <table className=' w-[100%] border-2 border-cyan-400'>
      {allData.length > 0 && 
      <thead >
        <tr className=' border-2 border-cyan-400 grid grid-cols-8 align-middle text-center'>
          <th className='border-2 border-cyan-400'>Employee ID</th>
          <th className='border-2 border-cyan-400'>First Name</th>
          <th className='border-2 border-cyan-400'>Last Name</th>
          <th className='border-2 border-cyan-400'>Age</th>
          <th className='border-2 border-cyan-400'>Country</th>
          <th className='border-2 border-cyan-400'>Position</th>
          <th className='border-2 border-cyan-400'>Wage</th>
        </tr>
  
    </thead>
      }
      <tbody className=' border-2 border-cyan-400 '>
        {allData}
        
      </tbody>
     
      </table>
    

  )
}

export default Table