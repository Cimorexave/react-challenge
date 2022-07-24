import React, { ReactComponentElement, useContext, useEffect, useState } from 'react'
import { userContext } from '../Helper/context';
import RepoList from '../Components/RepoList';
import { Link } from 'react-router-dom';

const UserInfo = () => {

  const {userData, setUserData} = useContext(userContext)
  const [userDataRepos , setUserDataRepos] = useState([])
  console.log(userData)

  useEffect(() => {
    if (userData.repos_url) {
      fetch(userData.repos_url).then(response => {
        if (response.ok) {
          response.json().then(repoData => {
            console.log(repoData)
            setUserDataRepos(repoData)
            
          })
        }
      })
    }
  },[userData])

  return (
    <>
        <h1>{userData.login} / {userData.name} </h1>
        <p>{userData.location}</p>
        <img src={userData.avatar_url} alt="avatar" width="150" height="150"/>
        <p>public repos: {userData.public_repos}</p>
        <Link to="/most-popular" >link to most popular</Link>
        {/*the repository list*/}
        <RepoList 
        reposList ={userDataRepos}
        />
    </>
  )
}

export default UserInfo