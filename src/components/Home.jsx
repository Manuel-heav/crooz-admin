import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p className='text-white bg-blue-500'>Home page</p>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default Home