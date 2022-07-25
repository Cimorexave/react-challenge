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


  return (
    <>
      <input type="text" name="" id="input"
      placeholder='search repos...' onChangeCapture={handleRepoSearch} />

      {
        resultedSearchRepos.map( repo => {
          return (
            <div className='repoCard' id='repoCard' key={repo.id}>
              
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