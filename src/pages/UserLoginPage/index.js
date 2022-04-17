import React, {useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { checkLogin } from '../../features/accountDetails/accountDetailsSlice'

const UserLoginPage = () => {
  const [username, setUsername] = useState('john')
  const [password, setPassword] = useState('m38rmF$')

  const usernameHandler = ({target}) => {
    setUsername(target.value)  
  }

  const passwordHandler = ({target}) => {
    setPassword(target.value)  
  }

  const check = useSelector(state => checkLogin(state, username, password))
  
  const [login, setLogin] = useState('')
  const [failedLogin, setFailedLogin] = useState(0);
  
  useEffect(()=>{
    setLogin(check)
  },[username,password])
  
  const loginHandler = () => {
    if(!login) setFailedLogin(failedLogin + 1)

    
  }

  const showLogin = () => {
    if (failedLogin < 5) {
      return (
        <>
        <input type="text" onChange={usernameHandler}></input>
        <input type="password" onChange={passwordHandler}></input>
        <button type="submit" onClick={loginHandler}>Submit</button>
      </>
      )
    } else {
      return (
        <>
          <h3>Error: Too many failed login attempts.</h3>
        </>
      )
    }
  }

  return(
    <>
      {showLogin()}
    </>
  )

}

export default UserLoginPage