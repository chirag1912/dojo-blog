import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // Creted Cutom hook for fetching the data from db.json with useFetch function
  //data is being renamed as blogs in this case
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* All the data has conditional rendering in this case */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
      {/* {blogs} */}
      <button onClick={() => <BlogList blogs={blogs} />}>Check List of Blogs</button>
    </div>
  );
};

export default Home;
