import { useEffect, useState } from "react";

const useFetch=(url)=>{
  const [data, setData] = useState(null)
  const [isPending,setPending]= useState(true)
  const [error,setError]=useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        console.log(url)
        // res.ok status to be checked when the url typed is wrong when the fetch is not happening the server is running this will be needed;
        // Wehn the fetch itself doesnt happen as if the server is not running then the .catch of fetch can e useful that case;
        if(!res.ok){
          throw Error("Cannot fetch the data for the URL Path mentioned Kindly check the URL again...")
        }
        return res.json();
      })
      .then(data => {
        setPending(false)
        setData(data);
      }).catch((err)=>{

        // This catch method will be usefulwhen server is not fetching anythong, if at all server is running on this port then
        // and the url typed is wrong the app will give stack error as the blogs has something but map func cannot be run on null values
        setError(err.message)
        setPending(false)
      })
  }, [url])
  return {data,isPending,error}
}

export default useFetch;