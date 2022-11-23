import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('muhsin')
    const [isPending, setIsPendding] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setIsPendding(true)
        
        fetch('http://localhost:8001/blogs', {
            method: 'POST',
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            setTimeout(() => {
                console.log('blog added')
                 setIsPendding(false)
                 history.push('/')
            }, 1000);
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 />
                 <label>Blog Body</label>
                    <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>   

                    <label>Blog author</label>   
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="muhsin">muhsin</option>
                        <option value="johnny">johnny</option>
                    </select>
                        {isPending && <button disabled>adding...</button>}
                        {!isPending && <button>Add Blog</button>}
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;