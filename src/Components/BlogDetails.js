import { useParams } from "react-router-dom";
import { UseFetch } from "./UseFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog,error,ispending} = UseFetch('http://localhost:8000/blogs/'+ id)
    const navigate = useNavigate()
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
            navigate("/");
        }) 
      }

      const handleClickBack = ()=>{
        navigate("/");
      }

    return ( 
        <div className="blog-details">
            {ispending && <div>Loadig...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.auther}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                    <button onClick={handleClickBack}>&nbsp;Back</button>
                </article>
            )}
            
        </div>

    );
}
 
export default BlogDetails;