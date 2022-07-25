import React, { ReactComponentElement, useContext, useEffect, useState } from 'react'
import { userContext } from '../Helper/context';
import RepoList from '../Components/RepoList';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, CardActions, Breadcrumbs, Button } from '@mui/material';
import { Box } from '@mui/system';

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
        <Card sx={{ display: 'flex', backgroundColor: "#cae3d7", padding: 6, gap: 3 , margin: 2 }} >
          <CardMedia 
          component="img"
          image={userData.avatar_url}
          alt="avatar"
          sx={{ width: 250, height: 250, borderRadius: "50%",
          boxShadow: "3 3 10", border: "solid 1px green" }}
          >
          </CardMedia>
            <CardContent sx={{ display: "flex" ,gap: 1 , flexDirection: "column" , justifyContent: "center" }} >
              <Typography variant="h6" >{userData.login} / {userData.name}</Typography>
              <Typography variant="body2" > Public Repos : {userData.public_repos}</Typography>
              <Typography variant='caption' sx={{fontSize: 10}} > LOCATION: {userData.location} </Typography>
              
                <Breadcrumbs sx={{marginTop: 1}}>
                  <Button variant="contained" size='small' ><Link to="/most-popular" style={{textDecoration: "none", color: "black"}}>most popular</Link></Button>
                  <Button variant="contained" size='small' ><Link to="/" style={{textDecoration: "none", color: "black"}} >Back to home</Link></Button>
                </Breadcrumbs>
            </CardContent>
            
        </Card>
        {/*the repository list*/}

        <RepoList 
        reposList ={userDataRepos}
        />
    </>
  )
}

export default UserInfo