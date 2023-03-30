import { useState} from 'react'
import InputForm from '../components/InputForm'
import { Link } from 'react-router-dom'


const AdminPage = () => {
    
    
    const [posts, setPosts] = useState() 

    
    return ( 
        <div>
            <InputForm setPosts={setPosts} />
            <Link to={'/'}>Go to Blog</Link>
        </div>
     );
}
 
export default AdminPage;