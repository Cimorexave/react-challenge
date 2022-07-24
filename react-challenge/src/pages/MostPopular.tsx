import React , {useContext, useState, useEffect} from 'react';
import { userContext } from '../Helper/context';
const MostPopular = () => {
  const [userData, setUserData] = useContext(userContext)
  const [reposListState, setReposListState] = useState([])
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
  return (
    <>
      <input type="text" name="" id="" />
    </>
  )
}

export default MostPopular