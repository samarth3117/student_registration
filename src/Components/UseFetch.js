
import { useEffect,useState } from "react";
export const UseFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error,setError] = useState(null)
    useEffect(() => {
const abortCont = new AbortController()

        setTimeout(() => { // Just for testing
    
          fetch(url,{signal:abortCont.signal})
            .then(result => {
              if(!result.ok)
              {
                throw Error('Unable to get the data')
              }
              return result.json();
            })
            .then(data => {
              setdata(data)
              setIsPending(false)
              setError(false)
    
            })
            .catch(err => {
              if(err.name==='AbortError')
              {
                console.log('fetch aborted')
              }
              else{
                 setIsPending(false)
              setError(err.message)
              // console.log(err.message);
              }
             
            })
        }, 1000);
        return() => abortCont.abort();
      }, [url]);
   
      return { data, isPending, error}
}

