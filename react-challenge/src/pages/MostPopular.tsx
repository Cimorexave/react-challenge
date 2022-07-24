import React , {useContext, useState, useEffect} from 'react';
import { userContext } from '../Helper/context';

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
  const [repoSearch, setRepoSearch] = useState<String>()

  const handleRepoSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    if (e.target.value.length > 3) {
      setRepoSearch(e.target.value)
    } 
  }
  useEffect(() => {
    fetch(userData.repos_url).then(response => {
      if (response.ok) {
        response.json().then(repoData => {
          console.log(repoData)
          setReposListState(repoData)
        })
      } else console.error("Request Failed fetching data; try again.")
    })
  })

  useEffect(() => {
    // Show the repos including the name of the repoSearch in the repoListState list
    // Probably using the .filter method
  }, [repoSearch])

  return (
    <>
      <input type="text" name="" id="input" placeholder='search repos...' onChangeCapture={handleRepoSearch} />

      {
        reposListState.map( repo => {
          return (
            <div className='repoCard' key={repo.id}>
              
                <h1>{repo.name}</h1>
                <p>{repo.language}</p>
                {repo.private ? <p>private</p> : <p>public</p> }
                <p>forks: {repo.forks}</p>
                <p>stars: {repo.stargazers_count}</p>
                <p>Last updated at: {repo.updated_at}</p>
              </div>
            )
          } )
        }
    </>
  )
}

export default MostPopular