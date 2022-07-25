import { Button, Typography } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Card, CardContent, CardMedia, Breadcrumbs, Chip } from '@mui/material';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import StarIcon from '@mui/icons-material/Star';
import '../styles/RepoList.css'


const RepoList = ( {reposList} )  => {
  const [reposListState, setReposListState] = useState([])
  const [sortChanged, setSortChanged] = useState(0)
    // Values: Name, Stars, Forks, Last Update, Language, Bio

    useEffect(() => {
      setReposListState(reposList)
    }, [reposList])

    useEffect(()=>{},[sortChanged])

    //sorting functions
    const sortByStars = () => {
      console.log('sorting by stars...')
      setReposListState(reposListState => {
        return reposListState.sort( (a,b) => {return b.stargazers_count - a.stargazers_count } )
      })
      setSortChanged(sortChanged => sortChanged +1)
    }
    const sortByForks = () => {
      console.log('sorting by forks...')
      setReposListState(reposListState => {
        return reposListState.sort( (a,b) => {return b.forks - a.forks } )
      })
      setSortChanged(sortChanged => sortChanged +1)
    }
    const sortByTime = () => {
      console.log('sorting by time...')
      console.log(new Date(reposListState[0].updated_at), new Date(reposListState[0].updated_at).getTime())
      setReposListState(reposListState => {
        return reposListState.sort( (a , b) => { return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime() } )
      })
      setSortChanged(sortChanged => sortChanged +1)
    }
    
  return (
    <>
      <div className="listContainer">
        <div className="heading">
          {/*handling the buttons with sort method on the repoListState*/}
          <Typography variant='h5' > Repositories </Typography>
          <div className="buttons">
            <Button variant='contained' size='small' onClick={sortByStars} >Sort by stars</Button>
            <Button variant='contained' size='small' onClick={sortByForks} >Sort by Forks</Button>
            <Button variant='contained' size='small' onClick={sortByTime} >Sort by Time</Button>
          </div>
        </div>
        
        <div className="list">
          
        {
        reposListState.map( repo => {
          return (
            <Card key={repo.id} sx={{display: "flex", flexDirection: "column",
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
        
      </div>
      
    </>
  )
}

export default RepoList