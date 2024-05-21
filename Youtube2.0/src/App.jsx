import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Main from './Components/Main'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <Main/>
      </div>
    </div>
  )
}

export default App
