import React, { useState } from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import { useCart } from './Cart/CartContext';
import axios from 'axios';

function LinkCompo() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // const {cart} = useCart();
  const navigate = useNavigate();
  // const [searchTerm, setSearchTerm] = useState('');
  const goToCartPage = () => {
    navigate('/cart'); 
    toggleMenu(); 
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/api/search?q=${searchTerm}`);
      // const searchResults = response.data.results || [];
      console.log(response.data);
      navigate('/search-results', { state: { searchResults: response.data } });
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const handleCategoriesEnter = () => {
    setCategoriesOpen(true);
  };

  const handleCategoriesLeave = () => {
    setCategoriesOpen(false);
    setActiveCategory(null);
  };

  const handleSubCategoriesEnter = (category) => {
    setActiveCategory(category);
  };

  const handleSubCategoriesLeave = () => {
    setTimeout(() => {
      setActiveCategory(null);
    }, 130000); 
  };

  const initialAuthStatus = !!localStorage.getItem('token'); 
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthStatus);
  if(isAuthenticated ){
    console.log('this')
  }
  const handlerpro = () => {
    localStorage.removeItem('token');
    alert('User Logged Out!!!');
    setIsAuthenticated(false);
  };

  const login = () => {
    setIsAuthenticated(true);
    
  };

  console.log('Navbar Component Rendered', cart);
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <NavLink to='/'>
          <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' alt='' />
        </NavLink>
      </div>
      <div className='navbar-toggle' onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
      <div
          className={`navbar-mobile-categories navbar-links ${isMenuOpen ? 'show' : ''}`}
          onMouseEnter={handleCategoriesEnter}
          onMouseLeave={handleCategoriesLeave}
        >
          Categories
          {isCategoriesOpen && (
            <div className='category-dropdown'>
               <div className='category-item'>
                <NavLink
                  to='/business'
                  onMouseEnter={() => handleSubCategoriesEnter('Business')}
                  onMouseLeave={handleSubCategoriesLeave}
                >
                  Business<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'Business' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/business/communication'>Communication<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/business/managements'>Managements<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/business/strategy'>Business Strategy<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/business/operations'>Operations<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/business/humanresources'>Human Resources<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>

              <div className='category-item'>
                <NavLink
                  to='/finance'
                  onMouseEnter={() => handleSubCategoriesEnter('Finance and Accounting')}
                  onMouseLeave={handleSubCategoriesLeave}
                >Finance and Accounting<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'Finance and Accounting' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/finance/accounting'>Accounting & Bookkeeping
<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/finance/taxes'>Taxes<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/finance/compliance'>Compliance<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/finance/economics'>Economic<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/finance'>Finance<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>

              <div className='category-item'>
                <NavLink
                  to='/itsoftware'
                  onMouseEnter={() => handleSubCategoriesEnter('IT & Software')}
                  onMouseLeave={handleSubCategoriesLeave}
                >IT & Software<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'IT & Software' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/itsoftware/certification'>IT Certification<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/itsoftware/network&security'>Network & Security<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/itsoftware/hardware'>Hardware<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/itsoftware/operatingsystem'>Operating system & Servers<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/itsoftware'>Other IT & Software<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>

              <div className='category-item'>
                <NavLink
                  to='/design'
                  onMouseEnter={() => handleSubCategoriesEnter('Design')}
                  onMouseLeave={handleSubCategoriesLeave}
                >Design<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'Design' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/design/web'>Web Design<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/design/game'>Game Design<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/design/3d'>3D & Animation<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/design/fashion'>Fashion Design<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/design'>Other Design<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>

              <div className='category-item'>
                <NavLink
                  to='/marketing'
                  onMouseEnter={() => handleSubCategoriesEnter('Marketing')}
                  onMouseLeave={handleSubCategoriesLeave}
                >Marketing<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'Marketing' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/marketing/digital'>Digital Marketing<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/marketing/social'>Social Media Marketing<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/marketing/public'>Public Relationship<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/marketing/content'>Content Marketing<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/marketing'>Product Marketing<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>

              <div className='category-item'>
                <NavLink
                  to='/lifestyle'
                  onMouseEnter={() => handleSubCategoriesEnter('Life Style')}
                  onMouseLeave={handleSubCategoriesLeave}
                >Life Style<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'Life Style' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/lifestyle/arts'>Arts & Crafts<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/lifestyle/beauty'>Beauty & Makeup<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/lifestyle/food'>Food & Beverage<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/lifestyle/pet'>Pet Care & Training<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/lifestyle'>Travel<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>
            
              <div className='category-item'>
                <NavLink
                  to='/photography'
                  onMouseEnter={() => handleSubCategoriesEnter('Photography & Video')}
                  onMouseLeave={handleSubCategoriesLeave}
                >Photography & Video<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'Photography & Video' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/photography/digital'>Digital Photography<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/photography'>Photography<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/photography/video'>Video Design<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/photography/commerical'>Commercial Photography<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/photography/tools'>Photography Tools<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>
            
              <div className='category-item'>
                <NavLink
                  to='/musicarts'
                  onMouseEnter={() => handleSubCategoriesEnter('Music & Arts')}
                  onMouseLeave={handleSubCategoriesLeave}
                >Music & Arts<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'Music & Arts' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/musicarts/instruments'>Instruments<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/musicarts/production'>Music Production<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/musicarts/vocal'>Vocal<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/musicarts/software'>Music Software<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/musicarts'>Music Techniques<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>

              <div className='category-item'>
                <NavLink
                  to='/health'
                  onMouseEnter={() => handleSubCategoriesEnter('Health & Fitness')}
                  onMouseLeave={handleSubCategoriesLeave}
                >Health & Fitness<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'Health & Fitness' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/health/fitness'>Fitness<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/health/sport'>Sport<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/health/yoga'>Yoga<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/health/mental'>Mental Health<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/health'>Good Health<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>
            
              <div className='category-item'>
                <NavLink
                  to='/teaching'
                  onMouseEnter={() => handleSubCategoriesEnter('Teaching & Academic')}
                  onMouseLeave={handleSubCategoriesLeave}
                >Teaching & Academic<span style={{ float: 'right' }}>&gt;</span>
                </NavLink>
                {activeCategory === 'Teaching & Academic' && (
                  <div className='sub-category-dropdown'>
                    <NavLink to='/teaching/engineering'>Engineering<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/teaching/math'>Math<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/teaching/science'>Science<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/teaching/social'>Social Science<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    <NavLink to='/teaching'>Teacher Training<span style={{ float: 'right' }}>&gt;</span></NavLink>
                    
                  </div>
                )}
              </div>
            
            
              
             
              
            </div>
          )}
        </div>
      </div>

      <div className='navbar-search'>
        <input type='text' placeholder='Search for anything' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}    onKeyPress={handleKeyPress} className='inputsearch' />
        
      </div>

      <div className={`navSection navbar-links ${isMenuOpen ? 'show' : ''}`}>
        <NavLink to='/categories'>Udemy Business</NavLink>
        <NavLink to='/tech_on_udemy'>Tech on Udemy</NavLink>
      </div>

      <div className='navbar-cart'>
        <button>
          <img
            className='cart-img'
            src='https://tse2.mm.bing.net/th?id=OIP.fzW2nXpFFmaRNRhtyz685AHaGs&pid=Api&P=0&h=180'
            alt='' onClick={goToCartPage} 
          />
          {cart.length > 0 && (
            <div className='cart-count' onClick={goToCartPage} style={{ backgroundColor: 'purple' }}>
              {cart.length}
            </div>
          )}
        </button>
      </div>

      <div className={`navbar-auth navbar-links ${isMenuOpen ? 'show' : ''}`}>
        {initialAuthStatus ? (
          <><button onClick={handlerpro} className='ogout' style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}>
            Logout
          </button>
          <h3 className='learning'>My Learning</h3></>
        ) : (
          <>
            <NavLink to="/login" onClick={login} activeClassName="active" className='sublist'>
              <button style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}>
                Login
              </button>
            </NavLink>
            <NavLink to="/register" onClick={login} activeClassName="active" className='sublist'><button style={{ backgroundColor: '#333' }}>Sign up</button></NavLink>
          </>
        )}
      </div>

      
    </div>
  );
}

export default LinkCompo;
