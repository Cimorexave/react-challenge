import React, {useState, useEffect, useContext} from 'react';
import { userContext } from '../Helper/context';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TextField, InputAdornment, Button } from '@mui/material';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    let navigate = useNavigate();


    const [username, setUsername] = useState<String>("")
    const [userExists, setUserExists] = useState<boolean>(false)
    const {userData, setUserData} = useContext(userContext)

    useEffect(() => {
        if (username.length > 3) {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => {
                    console.log(response)
                    if (!response.ok) {console.error(Error)}
                    response.json().then (data => {
                        console.log(data)
                        setUserExists(true)
                        setUserData(data)
                        //if (data.login)
                          //navigate(`/${data.login}`, {replace: true})
                    })
                }
                    
                )
        }
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
        <TextField
        value={username}
        id='textInput'
        variant='outlined'
        label='Search'
        placeholder='Username...'
        onChangeCapture={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GitHubIcon fontSize='medium' color='primary'/>
            </InputAdornment>
          ),
        }}
        />
        <Button variant="contained" size="medium" onClick={handleClick}
        > Search </Button>
        
      </div>
  )
}

export default Home