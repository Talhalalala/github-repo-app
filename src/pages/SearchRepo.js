import axios from 'axios'
import { useState, useContext } from 'react'
import Context from "../utils/Context"
import RepoList from '../components/RepoList'

function SearchRepo() {
   const { setUserData } = useContext(Context)
   const [username, setUsername] = useState('')
   const [error, setError] = useState('')

   async function getUserData(username) {
      try {
         const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
         //setUserData([{name: 'duck', description: 'duck soup', private: true, forks_count: 2, updated_at: "2021-11-05T11:33:22Z"}, {name: 'donald', description: 'what up', forks_count: 5, updated_at: "2021-11-05T11:33:22Z"}])
         setUserData(data)
         setError('')
      } catch (err) {
         setError(err.response.data.message || err.message)
      }
   }


   function submitForm(event) {
      event.preventDefault()
      getUserData(username)
      event.reset()
   }

   function handleChange(event) {
      const { value } = event.target
      setUsername(value)
   }

   return(
      <div className="w3-center w3-margin w3-padding-32">
         <form onSubmit={ submitForm }>
            <input type="text" name="user" placeholder="Enter github username" onChange={handleChange}/>
            <input className="w3-button w3-purple w3-round-xlarge" type="submit" value="Submit"/>
         </form>
         <h3>{error}</h3>
         <RepoList />
      </div>
   )
}

export default SearchRepo;