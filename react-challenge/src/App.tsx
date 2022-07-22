import React, {useState, useEffect} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TextField, InputAdornment, Switch } from '@mui/material';
import './styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {
  const [username, setUsername] = useState<String>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    if (e.currentTarget.value.length > 3) setUsername(e.currentTarget.value)
  }
  return (
    <BrowserRouter>
      <div className="app">
          <Route path='/' element={<Home />} />
          <Route path='/User' element={<UserInfo />} />
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
    </BrowserRouter>
    
  );
}

export default App;
