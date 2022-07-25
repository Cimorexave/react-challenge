import React, {useState, useEffect, useContext} from 'react';
import { userContext } from '../Helper/context';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TextField, InputAdornment, Button, Typography } from '@mui/material';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
//importing mui robot typography
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Home = () => {

    let navigate = useNavigate();


    const [username, setUsername] = useState<String>("")
    const [userExists, setUserExists] = useState<boolean>(false)
    const {userData, setUserData} = useContext(userContext)
/*
    useEffect(() => {
      if (userExists) {
        document.getElementById('checkIcon').style.color = "green"
      }
    }, [userExists]) */

    useEffect(() => {
            document.getElementById('checkIcon').style.color = "white"
            fetch(`https://api.github.com/users/${username}`)
                .then(response => {
                    console.log(response.ok)
                    if (!response.ok) {console.error(Error); setUserExists(false);}
                    else {response.json().then (data => {
                        //console.log(data)
                        setUserExists(true)
                        document.getElementById('checkIcon').style.color = "green"
                        setUserData(data)
                        //if (data.login)
                          //navigate(`/${data.login}`, {replace: true})
                    })
                  }
                }
                    
                )
    }, [username])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setUsername(e.target.value) 
      }

    const handleClick = () => {
      
      navigate(userData.login, {replace: true})
    }
  return (
    <div className='home'>
        <Typography variant='h6' >Search User and click the button</Typography>
        <div className="searchField">
          <TextField
          sx = {{padding: "0.5em", width: "18em" }}
          value={username}
          id='textInput'
          variant='outlined'
          label='Search'
          placeholder='Search Here...'
          onChangeCapture={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GitHubIcon fontSize='medium' color='primary'/>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <CheckIcon fontSize="small" id="checkIcon"/>
              </InputAdornment>
            )
          }}
          />
          <Button variant="contained" size="medium" onClick={handleClick}
          sx={{fontSize: 'smaller', height: "3em", width: "7em"}}  > Search </Button>
        </div>
      
      </div>
  )
}

export default Home