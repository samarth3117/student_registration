import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'
import Create from "./Create";
import EditBlog from "./EditBlog";
import BlogDetails from "./BlogDetails";

function App() {

//const {data:blogs, isPending, error} = UseFetch('http://localhost:8000/blogs')

  //sent to useFetch 
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error,setError] = useState(null)


  // const [blogs, setBlogs] = useState([

  //   { title: 'My First Website', body: "test test", auther: "Ajay", id: 1 },
  //   { title: 'My Second Website', body: "test test", auther: "Vjay", id: 2 },
  //   { title: 'My Third Website', body: "test test", auther: "Sajay", id: 3 },
  //   { title: 'My Forth Website', body: "test test", auther: "Dhanjay", id: 4 }
  // ]);



  // const setBlog = ([
  //   { title: 'My First Updated Website', body: "test test Updated", auther: "Ajayss", id: 1 },
  //   { title: 'My Second Updated Website', body: "test test Updated", auther: "Vjayss", id: 2 },
  //   { title: 'My Third Updated Website', body: "test test Updated", auther: "Sajayss", id: 3 },
  //   { title: 'My Forth Updated Website', body: "test test Updated", auther: "Dhanjayss", id: 4 }

  // ])
  // const handleDelete = (id) => {
  //   const newBlog = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlog)

  // }
  // function changeBlogData() {
  //   return setBlogs(setBlog);

  // }
  //Render when only blogs changes
  // useEffect(() => {
  //   setTimeout(() => { // Just for testing


  //     fetch('http://localhost:8000/blogs')
  //       .then(result => {
  //         if(!result.ok)
  //         {
  //           throw Error('Unable to get the data')
  //         }
  //         return result.json();
  //       })
  //       .then(data => {
  //         setBlogs(data)
  //         setIsPending(false)
  //         setError(false)

  //       })
  //       .catch(err => {
  //         setIsPending(false)
  //         setError(err.message)
  //         // console.log(err.message);
  //       })
  //   }, 1000);
  // }, []);

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/create" element={<Create/>}/>
        <Route exact path="/edit" element={<EditBlog/>}/>
        <Route exact path="/blogs/:id" element={<BlogDetails/>}/>
               
        </Routes>
      </div>
    </div>
  </Router>
);
      {/* <button onClick={changeBlogData}>Click me</button> */}
      {/* <BlogList blogs={blogs.filter((blog)=>blog.auther==='Ajay')}/> */}
      {/* conditional templating in react blogs && */}
      {/* {blogs && <BlogList blogs={blogs} title="dffdfdf" handleDelete={handleDelete} />} */}
      {/* {error && <div>{error}</div>}
      {isPending && <div>Loding...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />} */}
  
}
export default App;