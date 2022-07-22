import React, {useState, useEffect} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TextField, InputAdornment } from '@mui/material';
import './styles/App.css';

function App() {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
  }
  return (
    <div className="app">
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
  );
}

export default App;
