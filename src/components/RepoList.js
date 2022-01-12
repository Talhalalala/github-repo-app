import { useContext } from "react"
import { Link } from 'react-router-dom'
import Context from "../utils/Context"

function RepoList() {
   const { userData } = useContext(Context)

   function getRepos() {
      return userData.map((e, i) => 
            <div key={i}>
               <Link to={`/repo_page/${e.name}`}>{e.name}</Link>
               <div>{ e.private ? 'private' : 'public' }</div>
            </div>
      )
   }

   return (
      <div>
         { userData && getRepos() }
      </div>
   )
}

export default RepoList;