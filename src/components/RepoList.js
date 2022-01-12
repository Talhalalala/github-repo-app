import { useContext } from "react"
import { Link } from 'react-router-dom'
import Context from "../utils/Context"

function RepoList() {
   const { userData } = useContext(Context)

   function getRepos() {
      return userData.map((e, i) => 
            <div className="w3-panel w3-border w3-round w3-large" key={i}>
               <Link to={`/repo_page/${e.name}`}>{e.name}</Link>
               <p className="w3-right w3-container w3-round w3-round-large w3-light-grey w3-small">{ e.private ? 'private' : 'public' }</p>
            </div>
      )
   }

   function Results () {
      return (
         <div className="w3-content w3-container">
            <div className="w3-panel w3-border w3-round w3-light-grey">
               <h2>{userData[0].owner.login}</h2>
            </div>
            { getRepos() }
         </div>
      )
   }

   return (
      <div>
         { userData ? <Results /> : '' }
      </div>
   )
}

export default RepoList;