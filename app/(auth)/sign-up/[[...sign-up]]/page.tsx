import { SignUp} from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
   <main className='auth-SignUpPage'>
    <SignUp/>
   </main>
  )
}

export default SignUpPage