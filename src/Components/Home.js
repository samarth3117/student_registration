import { UseFetch } from "./UseFetch";
import { BlogList } from './BlogList';
const Home = () => {
    const {data:blogs, isPending, error} = UseFetch('http://localhost:8000/blogs')
    return (
      <div className="home">
     
      {/* <button onClick={changeBlogData}>Click me</button> */}
      {/* <BlogList blogs={blogs.filter((blog)=>blog.auther==='Ajay')}/> */}
      {/* conditional templating in react blogs && */}
      {/* {blogs && <BlogList blogs={blogs} title="dffdfdf" handleDelete={handleDelete} />} */}
      {error && <div>{error}</div>}
      {isPending && <div>Loding...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
    );
  }
   
  export default Home;