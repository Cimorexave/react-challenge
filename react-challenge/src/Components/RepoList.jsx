import React, {useState} from 'react'
//(props: any) => { props: any; "": any; }
const RepoList = ( {reposList} )  => {
    // Values: Name, Stars, Forks, Last Update, Language, Bio
    
  return (
    <>
      {
        reposList.map( repo => {
          return (
            <div className='repoCard'>

            </div>
          )
        } )
      }
    </>
  )
}

export default RepoList