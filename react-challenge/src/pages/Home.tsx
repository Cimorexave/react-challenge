import React, {useState, useEffect} from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { TextField, InputAdornment } from '@mui/material';
import '../styles/Home.css';
import {DebounceInput} from 'react-debounce-input';


const Home = () => {
    const [username, setUsername] = useState<String>("")
    const [userData, setUserData] = useState()

    useEffect(() => {
        if (username.length > 3) {
            fetch(`https://api.github.com/users/${username}`)
                .then(response => {
                    console.log(response)
                    if (!response.ok) {console.error(Error)}
                    response.json().then (data => {
                        console.log(data)

                    })
                }
                    
                )
        }
    }, [username])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setUsername(e.target.value)
      }

  return (
    <div className='home'>
        <TextField
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
      </div>
  )
}

export default Home