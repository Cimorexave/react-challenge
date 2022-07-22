import React, {useState} from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { TextField, InputAdornment } from '@mui/material';
import '../styles/Home.css';
const Home = () => {
    const [username, setUsername] = useState<String>("")


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        if (e.currentTarget.value.length > 3) setUsername(e.currentTarget.value)
      }

    
  return (
    <div className='home'>
        <TextField 
        onChange={handleChange}
        id='textInput'
        variant='outlined'
        label='Search'
        placeholder='Username...'
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