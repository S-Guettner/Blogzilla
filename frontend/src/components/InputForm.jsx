import { useState } from "react"

const MAX_SIZE = 200000
const InputForm = ({ setPosts }) => {

    const [sizeError, setSizeError] = useState(false)


    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        if (!sizeError) { 
            fetch("http://localhost:7777/api/addPost", {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    setPosts(data)
                    console.log(data)
                })
        }



    }
    const checkSize = (event) => {
        console.log(event.target.files[0].size)
        if (event.target.files[0].size > MAX_SIZE) {
            setSizeError(true)
        } else {
            setSizeError(false)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input className="border-2 block p-1" name="username" type="text" placeholder="username" ></input> */}
                <input className="border-2 block p-1" name="title" type="text" placeholder="title" ></input>
                {/* <input className="border-2 block p-1" name="email" type="email" placeholder="email" ></input> */}
                <input className="border-2 block p-1" name="postImage" type="file" onChange={checkSize}></input>
                <input className="border-2 block p-1" name="message" type="text" placeholder="message" ></input>
                <button className="border-2 p-1" type="submit" disabled={sizeError}>AddPost</button>
                {sizeError &&
                    <div>Dein Bild ist viel zu groß</div>
                }
            </form>
        </div>
    )
}

export default InputForm
