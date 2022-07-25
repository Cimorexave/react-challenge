import React , {useContext, useState, useEffect} from 'react';
import { userContext } from '../Helper/context';
import { useNavigate } from 'react-router-dom';
import { Button, InputAdornment, Typography } from '@mui/material';
import { Card, CardContent, TextField, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import StarIcon from '@mui/icons-material/Star';
import '../styles/RepoList.css';


interface repoListInterface {
  id: number,
  name: string,
  language: string,
  private: boolean,
  forks: string,
  stargazers_count: number,
  updated_at: string
}


const MostPopular = () => {
  const {userData, setUserData} = useContext(userContext)
  const [reposListState, setReposListState] = useState< Array<repoListInterface> >([])
  const [ resultedSearchRepos , setResultedSearchRepos] = useState< Array<repoListInterface> >([])

  useEffect(() => {
    fetch(userData.repos_url).then(response => {
      if (response.ok) {
        response.json().then(repoData => {
          setReposListState(repoData)
          setResultedSearchRepos(repoData)
        })
      } else console.error("Request Failed fetching data; try again.")
    })
  },[])

  const handleRepoSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = reposListState.filter(repo => { return repo.name.includes(e.target.value)})
    setResultedSearchRepos( result )
    console.log(resultedSearchRepos)
  }

  let navigate = useNavigate()

  return (
    <>
    <div className="heading" style={{ padding: "2em" }}>
    <TextField
          type="text" name="" id="input"
          placeholder='search repos...' onChangeCapture={handleRepoSearch}
          sx = {{ width: "18em" }}
          variant='outlined'
          label='Search'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GitHubIcon fontSize='large' color='primary'/>
              </InputAdornment>
            )
          }}
          />
      
      <Button variant='contained' sx={{ height: "2.5em" }} onClick={() => {navigate(-1)}}> Go Back </Button>
    </div>
      <div className="list" style={{ padding: "1em" }}>
      {
        resultedSearchRepos.map( repo => {
          return (
            <Card className='repoCard' id='repoCard' key={repo.id} sx={{display: "flex", flexDirection: "column",
            padding: "1em 3em", backgroundColor: "#cae3d7",
           borderRadius: 15, justifyContent: "center", alignItems: "center", textAlign: "center" }} >
            <div className="content">
            <Typography variant="h3" >{repo.name}</Typography>
            <CardContent sx={{ display: 'flex', margin: 0, flexDirection: "column", gap: 2 }} >
              <Chip label={`${repo.language}`} variant="outlined" sx={{ width: "fit-content", alignSelf: "center" }} />
            
              <div style={{ display: "flex", gap: "0.75em", justifyContent: "center" }} >
                <Chip label={`Stars: ${repo.stargazers_count}`} icon={<StarIcon />} variant="filled" color="primary" />
                <Chip label={`Forks: ${repo.forks}`} icon={<ForkRightIcon />} variant="filled" color='secondary' />
              </div>
              
              <Typography variant='caption' >Last updated at: {new Date(repo.updated_at).toString().slice(0, 25)} </Typography>
            </CardContent>
            </div>
            
          </Card>
            
            )
          } )
        }
      </div>
    
    </>
  )
}

export default MostPopular