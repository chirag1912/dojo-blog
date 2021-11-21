

const BlogList = (props) => {

    const blogs=props.blog
    const title=props.title
    const deleteFunction=props.deleteFunction
    

    // const [blogs,title]={props}
    // console.log(props)
    // console.log(props.title)
    // console.log(props.blog)

    return ( 
    <div className="Blog-list">
        <h1>{title}</h1>
        
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <div>Written By: {blog.author}</div>
                <button onClick={()=>deleteFunction(blog.id)}>Delete Blog</button>
            </div>  
        ))}
    </div> );
}
 
export default BlogList;