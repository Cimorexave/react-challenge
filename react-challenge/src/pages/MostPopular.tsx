import React , {useContext, useState, useEffect} from 'react';
import { userContext } from '../Helper/context';
const MostPopular = () => {
  const [userData, setUserData] = useContext(userContext)
  const [reposListState, setReposListState] = useState([])
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
      <input type="text" name="" id="input" onChangeCapture={handleRepoSearch} />
    </>
  )
}

export default MostPopular