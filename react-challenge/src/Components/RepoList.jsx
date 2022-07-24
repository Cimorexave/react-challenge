import React, {useState} from 'react'
//(props: any) => { props: any; "": any; }
const RepoList = ( {reposList} )  => {
    // Values: Name, Stars, Forks, Last Update, Language, Bio
    
  return (
    <>
      {
        reposList.map( repo => {
          return (
            <div className='repoCard' key={repo.id}>
              
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