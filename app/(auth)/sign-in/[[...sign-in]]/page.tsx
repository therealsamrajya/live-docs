import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
   <main className='auth-SignInPage'>
    <SignIn/>
   </main>
  )
}

export default SignInPage