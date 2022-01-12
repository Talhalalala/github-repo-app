import { useContext } from "react"
import { Link } from 'react-router-dom'
import Context from "../utils/context"

function RepoList() {
   const userData = useContext(Conext.userData)
   const repoList = userData.map(e => {
      <li>
         <Link to='/repoPage'>{e.name}</Link>
      </li>
   })

   return (
      <ul>
      { userData ? repoList : ''}
      </ul>
   )
}

export default RepoList;