import { useState } from "react";
import BlogList from "./BlogList";
import { useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [name, setName] = useState("Mario");

  // useEffect(()=>{
  //     console.log("Use Effect is running")
  // },[name])


  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
          console.log(data)
          setBlogs(data);
      })
  }, [])

  const delteFunctionfromHome = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      {blogs && <BlogList
        blog={blogs}
        title="All Blogs"
        deleteFunction={delteFunctionfromHome}
      />}

      {blogs && <BlogList
        blog={blogs.filter((blog) => blog.author === "Mario")}
        title="Mario's Blogs"
      />}

      
      <p>Name of the Person being rendered is: {name}</p>
      <button
        onClick={() => {
          setName("Laurene");
        }}
      >
        Click to Change Name
      </button>
    </div>
  );
};

export default Home;
