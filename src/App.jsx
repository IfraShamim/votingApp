import { useState , useEffect} from 'react'
import './App.css'
import Candidate1 from './components/Candidate1'
import Candidate2 from './components/Candidate2'
import Candidate3 from './components/Candidate3'

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    if (count1) {
      alert(`You're waiting for Candidate 1`);
    }
  }, [count1]);

  useEffect(() => {
    if (count2) {
      alert(`You're waiting for Candidate 2`);
    }
  }, [count2]);

  useEffect(() => {
    if (count3) {
      alert(`You're waiting for Candidate 3`);
    }
  }, [count3]);
  return (
    <>
     <h1 className='text-[3rem] mb-6 text-purple-950 font-bold'>Voting App</h1>
     <div className='bg-purple-300 rounded p-6 shadow w-[100%] sm:w-[40%] mx-auto flex gap-5 justify-center flex-wrap mb-6'>
      <button onClick={() => {setCount1(count1+1)}} className='text-white bg-purple-950 p-2 rounded font-bold'>Vote for candidate 01</button>
      <button onClick={() => {setCount2(count2+1)}} className='text-white bg-blue-950 p-2 rounded font-bold'>Vote for candidate 02</button>
      <button onClick={() => {setCount3(count3+1)}} className='text-white bg-pink-950 p-2 rounded font-bold'>Vote for candidate 03</button>
     </div>
     <Candidate1 text="Total votes for candidate 01: " title={count1}/>
     <Candidate2 text="Total votes for candidate 02: " title={count2}/>
     <Candidate3 text="Total votes for candidate 03: " title={count3}/>
     <button 
     onClick={() => {
      setCount1(0)
      setCount2(0)
      setCount3(0)
     }} className='text-white bg-purple-950 p-2 rounded font-bold'>Reset Votes</button>

    </>
  )
}

export default App
