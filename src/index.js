import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RepoPage from './pages/RepoPage';
import Context from './utils/Context'

const [userData, setUserData] = useState('')

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{userData, setUserData}}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/repo_page" element={<RepoPage />}>
          <Route path=":repo_name" element={<RepoPage />} />
        </Route>
      </Routes>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

