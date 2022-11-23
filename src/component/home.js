
import BlogList from "./blogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8001/blogs')

    console.log(blogs)
 
    const title = "all blog content";   
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>LOADING...</div>}
           {blogs && <BlogList blogs={blogs} title ={title} />}
        </div>
     );
}
 
export default Home;