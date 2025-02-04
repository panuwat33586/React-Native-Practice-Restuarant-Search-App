import {useEffect,useState} from 'react'
import yelp from '../api/yelp'

export default ()=>{
    const [results, setResults] = useState([])

    const searchApi=async(searchTerm)=>{
        try{
       const response=await yelp.get('/search',{
           params:{
               limit:50,
               term:searchTerm,
               location:'san jose'
           }
       }
       );
       setResults(response.data.businesses)
    }catch(err){
        console.log(err)
    }
    }
    useEffect(()=>{
        searchApi('pasta')
    },[]);
    return [searchApi,results]
}