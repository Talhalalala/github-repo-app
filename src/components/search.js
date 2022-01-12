import axios from 'axios'
import { useState, useContext } from 'react'
import Context from "../utils/context"

function SearchRepo() {
   const setUserData = useContext(Context.setUserData)
   const [username, setUsername] = useState('')

   async function getUserData(username) {
      const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
      setUserData(data)
   }


   function submitForm(event) {
      event.preventDefault()
      getUserData(username)
   }

   function handleChange(event) {
      const { value } = event.target
      setUsername(value)
   }

   return(
      <form onSubmit={ submitForm }>
         <label htmlFor="font-size">Font Size</label>
         <input type="text" name="user" onChange={handleChange}/>
         <input type="submit" value="Submit"/>
      </form>
   )
}

export default SearchRepo;