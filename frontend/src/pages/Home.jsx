import { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SinglePost from '../components/SinglePost'
import { postData } from '../App'
import { v4 as uuidv4 } from 'uuid'


const Home = () => {

    const posts = useContext(postData)
    console.log(posts)


    if (!posts) return

    return (
        <div className='pb-4'>
            <div className='flex justify-center mb-4 shadow-lg pb-2'>
            <h1 className='pt-2 my-auto text-4xl underline decoration-8 decoration-[#03daff]'>BLOGZILLA</h1>
            <img className='w-48 ml-1' src="https://ik.imagekit.io/6sicju8qu/pngwing.com.png?updatedAt=1680178528398" alt="" />
            </div>

        <section className='flex flex-row gap-11 justify-evenly'>
        {posts?.map((post,index) => {
            
            return (
            <div className='w-1/4 mb-10 shadow-xl p-2'>
                <SinglePost 
                key={uuidv4()}
                post={post} 
                index={index}
                />
            </div>

            )
        })}
        </section>
        <Link className='border-2 p-2 rounded-lg m-4 hover:bg-neutral-500' to={'/admin'}>link to admin page</Link>
    </div>

    )
}

export default Home;