import React, { ReactComponentElement } from 'react'

const UserInfo = (props: any) => {
console.log('data is:', props.data)
  return (
    <>
        <h1>{props.data.login}</h1>
        <p>{props.data.location}</p>
        <img src={props.data.avatar_url} alt="" />
        <p>public repos: {props.data.public_repos}</p>
    </>
  )
}

export default UserInfo