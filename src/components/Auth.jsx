import {  SignUp } from '@clerk/clerk-react'
import React from 'react'

const Auth = () => {
  return (
    <div className='flex justify-center items-center h-full bg-gray-50'>
      <div className='my-8'>
        <SignUp/>
      </div>
    </div>
  )
}

export default Auth
