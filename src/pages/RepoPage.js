import { useParams } from "react-router-dom";

function RepoPage() {
   let params = useParams();

   return (
      <div>
         <h1>Title</h1>
         <h2>Invoice: {params.invoiceId}</h2>;
      </div>
   )
}

export default RepoPage;