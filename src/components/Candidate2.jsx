import React from 'react'

const Candidate2 = (props) => {
  return (
    <div className='border-2 w-max mx-auto p-2 text-blue-950 font-bold mb-4 rounded border-blue-950'>
        {props.text} {props.title}
    </div>
  )
}

export default Candidate2