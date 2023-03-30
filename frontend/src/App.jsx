import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import AdminPage from './pages/AdminPage'
import DetailsPage from './pages/DetailsPage'

import { createContext, useState,useEffect } from 'react'

export const postData = createContext()

function App() {

    const [posts, setPosts] = useState()
    
    useEffect(() => {
        fetch("http://localhost:7777/api/getPosts")
        .then(res => res.json())
        .then(data => setPosts(data))
        },[])
  
  return (
    <postData.Provider value={posts}>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/admin' element={<AdminPage />}/>
            <Route path='/details/:id' element={<DetailsPage />}/>
        </Routes>
    </BrowserRouter>
    </postData.Provider>
  )
}

export default App
