import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Context from './utils/Context'

function App() {
   const [userData, setUserData] = useState('')

   return (
      <div className="App">
         <Context.Provider value={{userData, setUserData}}>
            <header className="App-header">
               Git repo app
            </header>
            <main>
               <Outlet />
            </main>
         </Context.Provider>
      </div>
  );
}

export default App;
