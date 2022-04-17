import React from 'react'

const AccountDetails = ({details = {}}) => {
  const { address = {}, email = '', id = '', name = {} , password = '', phone = '', username = '' } = details
  const { firstname = '', lastname = '' } = name

  return (
    <div>
      <h3>Account Details</h3>
      <div>
        <p>First name: {firstname}</p>
        <p>Last name: {lastname}</p>
        

      </div>
    </div>
  )
}

export default AccountDetails