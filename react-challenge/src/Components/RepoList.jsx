import React, {useState, useEffect, useRef} from 'react'
//(props: any) => { props: any; "": any; }
const RepoList = ( {reposList} )  => {
  const [reposListState, setReposListState] = useState([])
    // Values: Name, Stars, Forks, Last Update, Language, Bio

    useEffect(() => {
      setReposListState(reposList)
    }, [reposList])
    
  return (
    <>
      {
        reposListState.map( repo => {
          return (
            <div className='repoCard' key={repo.id}>
              <button  >Sort by stars</button>
              <button  >Sort by forks</button>
              <h1>{repo.name}</h1>
              <p>{repo.language}</p>
              {repo.private ? <p>private</p> : <p>public</p> }
              <p>forks: {repo.forks}</p>
              <p>stars: {repo.stargazers_count}</p>
            </div>
          )
        } )
      }
    </>
  )
}

export default RepoList