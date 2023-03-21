

function Table({data}) {

   
    const allData = data.map(item=>(
      
        <tr className='grid grid-cols-7 align-middle' key={item.id}>
          <td className=' text-center border-2 border-cyan-400'>{item.id}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.f_name}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.l_name}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.age}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.country}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.position}</td>
          <td className=' text-center border-2 border-cyan-400'>{item.wage}</td>
      </tr>
     
    ))
      
 
      
  return (
    <table className=' w-[100%] border-2 border-cyan-400'>
      <thead className=' border-2 border-cyan-400 grid grid-cols-7 align-middle text-center'>
        <td className='border-2 border-cyan-400'>Employee ID</td>
        <td className='border-2 border-cyan-400'>First Name</td>
        <td className='border-2 border-cyan-400'>Last Name</td>
        <td className='border-2 border-cyan-400'>Age</td>
        <td className='border-2 border-cyan-400'>Country</td>
        <td className='border-2 border-cyan-400'>Position</td>
        <td className='border-2 border-cyan-400'>Wage</td>
      </thead>
      <tbody className=' border-2 border-cyan-400 '>
        {allData}
      </tbody>
     
      </table>

  )
}

export default Table