import { useState , useEffect} from 'react'
import './App.css'
import Candidate1 from './components/Candidate1'
import Candidate2 from './components/Candidate2'
import Candidate3 from './components/Candidate3'

function App() {
  const [counts, setCounts] = useState({count1:0,count2:0,count3:0});

  useEffect(() => {
    if (counts.count1) {
      alert(`You're voting for Candidate 1`);
    }
  }, [counts.count1]);
  useEffect(() => {
    if (counts.count2) {
      alert(`You're voting for Candidate 2`);
    }
  }, [counts.count2]);
  useEffect(() => {
    if (counts.count3) {
      alert(`You're voting for Candidate 3`);
    }
  }, [counts.count3]);
  const handleVote = (candidate) => {
    setCounts((prevCounts) => (
      {
        ...prevCounts ,
        [candidate] : prevCounts[candidate] + 1,
      }
    ))
  }
  const resetVotes = () => {
    setCounts({count1:0,count2:0,count3:0})
  }
  return (
    <>
     <h1 className='text-[3rem] mb-6 text-purple-950 font-bold'>Voting App</h1>
     <div className='bg-purple-300 rounded p-6 shadow w-[100%] sm:w-[40%] mx-auto flex gap-5 justify-center flex-wrap mb-6'>
      <button onClick={() => {handleVote('count1')}} className='text-white bg-purple-950 p-2 rounded font-bold'>Vote for candidate 01</button>
      <button onClick={() => {handleVote('count2')}} className='text-white bg-blue-950 p-2 rounded font-bold'>Vote for candidate 02</button>
      <button onClick={() => {handleVote('count3')}} className='text-white bg-pink-950 p-2 rounded font-bold'>Vote for candidate 03</button>
     </div>
     <Candidate1 text="Total votes for candidate 01: " title={counts.count1}/>
     <Candidate2 text="Total votes for candidate 02: " title={counts.count2}/>
     <Candidate3 text="Total votes for candidate 03: " title={counts.count3}/>
     <button 
     onClick={resetVotes} className='text-white bg-purple-950 p-2 rounded font-bold'>Reset Votes</button>

    </>
  )
}

export default App
