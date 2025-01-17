import React from 'react'

const Candidate1 = (props) => {
  return (
    <div className='border-2 w-max mx-auto p-2 text-purple-950 font-bold mb-4 rounded border-purple-950'>
        {props.text} {props.title}
    </div>
  )
}

export default Candidate1