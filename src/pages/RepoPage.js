import { useContext } from "react"
import { useParams } from "react-router-dom";
import Context from "../utils/Context"

function RepoPage() {
   const params = useParams();
   const { userData } = useContext(Context)
   const data = userData ? userData.find(e => e.name === params.name) : ''

   return (
      <div>
         { data ?
         <>
            <h1>{params.name}</h1>
            <h3>{data.description ? data.description : 'No description'}</h3>
            <h3>forks: {data.forks_count}</h3>
            <h4>stargazers: {data.stargazers}</h4>
            <h4>open issues: {data.open_issues_count}</h4>
            <h4>last update: {Date(data.updated_at)}</h4>
         </> : <h1>Nothing Here</h1>
      }
      </div>
   )
}

export default RepoPage;