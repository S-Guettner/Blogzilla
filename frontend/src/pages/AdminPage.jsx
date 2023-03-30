import { useState} from 'react'
import InputForm from '../components/InputForm'
import { Link } from 'react-router-dom'


const AdminPage = () => {
    
    
    const [posts, setPosts] = useState() 

    
    return ( 
        <div>
            <InputForm setPosts={setPosts} />
            <Link className='border-2 p-2 rounded-lg m-4 hover:bg-neutral-500' to={'/'}>Go to Blog</Link>
        </div>
     );
}
 
export default AdminPage;