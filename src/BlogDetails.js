import {useParams} from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {
    
    const {id}=useParams()
 
    const { data:blog,isPending,error }= useFetch("http://localhost:8000/blogs/"+ id)
    //Need not use {} when written above return as regular JS is being used and not the JSX expression
    //Only one blog is being fetched
    return ( 
    <div className="blog-details">
        {/* <h1>Blog Details - {id}</h1> */}
        <div>
            {/* Used to wait for the fetch, pending error to load and then load the actual data; */}
            {isPending && <div>Loading...</div>}
            {/* Checking if string has characters in it */}
            {error && <div>{error}</div>}
            {blog && <article>
                    <h2>{blog.title}</h2>
                    <div>Written By: {blog.title}</div>
                    <div>{blog.body}</div>
                </article>}
        </div>
    </div>
     );
}
 
export default BlogDetails;