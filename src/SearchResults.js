
import React, { useEffect,useState } from 'react';
import { useLocation,NavLink,useNavigate } from 'react-router-dom';

import './Project/Styles/result.css'
import './Project/Styles/home.css'
const SearchResults = () => {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    console.log('Search Results:', state.searchResults);
  }, [state]);
  const navigate=useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const handleBuyNow = () => {
    const token = localStorage.getItem("token");
    console.log('Handle Buy Now called');
    if (!token) {
      setShowLoginPopup(true);
      alert('Please Login First to continue with purchase!!!')    
    navigate(-1);
    return ;
    } else {
      showLoginPopup('')
      console.log('Handle Buy Now called222222222222');
    }
  };
  return (
    <div className="search-results-container">
      <div className='mainResult'>
      <h2 style={{textAlign:'center',fontSize:'22pt'}}>Search Results</h2>
      {state.searchResults && state.searchResults.length > 0 ? (
        <ul className='main' style={{listStyle:'none'}}>
          {state.searchResults.map((result) => (
            <li  key={result.id}><div className='box'><img src={result && result.bollywoodimg} alt={result.name} className='subImg' />
            <p className='name' >{result.name}</p>
            <p className='name1'>{result.author}</p> 
            <p className='price' >Price: ₹ {result.price}</p> 
            <p className='rating' >Rating: {result.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{result.rating_stars}</span></p> 
            <NavLink to={`/detail/${result.id}`} > 
            <button className='bestSellerButtonsea' onClick={handleBuyNow}>Buy Now</button></NavLink>
            </div></li>
          ))}
        </ul>
      ) : (
        <p style={{textAlign:'center',fontSize:'25pt'}}>No results found.</p>
      )}
    </div>
    {/* <Footer/> */}
    </div>
    
  );
};

export default SearchResults;
