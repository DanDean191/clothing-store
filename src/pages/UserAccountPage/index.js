import React, { useState, useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux';
import { getAccounts, selectAllAccounts, getloadingStatus, getErrorStatus } from '../../features/accountDetails/accountDetailsSlice'

import AccountDetails from '../../features/accountDetails'

const UserAccountPage = () => {
  const dispatch = useDispatch()
  const loadingStatus = useSelector(getloadingStatus);
  const errorStatus = useSelector(getErrorStatus);
  
  useEffect(() => {
      dispatch(getAccounts())
  }, [dispatch]);

  const accountDetails = useSelector(selectAllAccounts)

  const account = () => {
    if (errorStatus) return <div>Error! Couldn't load data.</div>
    if (loadingStatus) {
      return <div>Loading...</div>
    } else {
      return <AccountDetails details={accountDetails[0]} />
    }
  }

  return (
    <div>
      <h1>UserAccountPage</h1>
      {account()}
    </div>
  )
}

export default UserAccountPage