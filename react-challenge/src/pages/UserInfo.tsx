import React, { ReactComponentElement, useContext } from 'react'
import { userContext } from '../Helper/context'

const UserInfo = () => {

  const {userData, setUserData} = useContext(userContext)

  return (
    <>
        <h1>{userData.login}</h1>
        <p>{userData.location}</p>
        <img src={userData.avatar_url} alt="avatar" />
        <p>public repos: {userData.public_repos}</p>
    </>
  )
}

export default UserInfo