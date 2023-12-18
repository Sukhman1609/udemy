import React,{createContext,useEffect,useState} from 'react'
import axios from 'axios'
export const Store1=createContext();
const ContextAPI = (props) => {
    const[data,setData]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:9000/api/bollywood')
      .then(response => setData( response.data))
      .catch(error => console.error('Error:', error));
    },[])
  return (
    <div>
      <Store1.Provider value={[data,setData]}>
        {props.children}
      </Store1.Provider>
    </div>
  )
}

export default ContextAPI