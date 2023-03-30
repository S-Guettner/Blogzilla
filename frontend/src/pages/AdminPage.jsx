import { useState} from 'react'
import InputForm from '../components/InputForm'


const AdminPage = () => {
    
    
    const [posts, setPosts] = useState() 

    
    return ( 
        <div>

            <InputForm setPosts={setPosts} />
        </div>
     );
}
 
export default AdminPage;