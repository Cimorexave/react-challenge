import React, {useState, useEffect, useRef} from 'react'
//(props: any) => { props: any; "": any; }
const RepoList = ( {reposList} )  => {
  const [reposListState, setReposListState] = useState([])
    // Values: Name, Stars, Forks, Last Update, Language, Bio

    useEffect(() => {
      setReposListState(reposList)
    }, [reposList])
    
    //commits_url: "https://api.github.com/repos/Cimorexave/2048-clone/commits{/sha}"

  return (
    <>
      <div className="listContainer">
        {/*handling the buttons with sort method on the repoListState*/}
        <button  >Sort by stars</button>
        <button  >Sort by forks</button>
        <button  >Sort by time</button>
        Repositories: 
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
      </div>
      
    </>
  )
}

export default RepoList