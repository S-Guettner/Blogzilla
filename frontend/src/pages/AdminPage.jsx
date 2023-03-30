import { createContext ,useEffect,useState} from 'react'
import InputForm from '../components/InputForm'


const AdminPage = () => {
    
    
    const [posts, setPosts] = useState() 

    useEffect(() => {
        fetch("http://localhost:7777/api/getPosts")
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    
    /* const dataContext = createContext(posts) */
    
    return ( 
        <div>

            <InputForm setPosts={setPosts} />
        </div>
     );
}
 
export default AdminPage;