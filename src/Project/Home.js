import React, { useContext ,useState} from 'react'
import Footer from './Footer/Footer'
import './Styles/home.css'
import { Store1 } from './ContextAPI'
import { NavLink } from 'react-router-dom';
// import Detail from './BoxDetail';
import Login from './login/Login';
// import { useCart } from './Cart/CartContext';

const Home = () => {
    const[ContextData]=useContext(Store1);
  console.log(ContextData);
  
  const [showLoginPopup, setShowLoginPopup] = useState(false);
 

  // if (!item) {
  //   return <div>Item not found</div>;
  // }


  const handleBuyNow = () => {
    const token = localStorage.getItem("token");
    console.log('Handle Buy Now called');
    if (!token) {
      setShowLoginPopup(true);
      alert('Please Login First to continue with purchase!!!')    
      window.location.href = '/login';
    return;
    } 
    else {
      console.log('Handle Buy Now called222222222222');
     
    }
  };

  // const handleBuyNow = () => {
  //   addToCart(item);
  //   setOrderPlaced(true);

  //   setTimeout(() => {
  //     setOrderPlaced(false);
  //   }, 5000);
  // };
 

  return (
    <div> {showLoginPopup && <div className="blur-overlay"></div>}
    {showLoginPopup && <Login onClose={() => setShowLoginPopup(false)} />}
        <div className='HomeImg'><img src='https://img-c.udemycdn.com/notices/web_carousel_slide/image/4346883a-110a-41aa-9de2-197f260fdef1.jpg' alt=''/>
        <div className='HomeImgText'><h1>24-Hour Flash Sale</h1><p>Courses as low as ₹499 for one day only. Grab your favorite.</p></div></div>

        <div className='HomeSection2'>
            <div className='HomeSection2Text'>Trusted by over 15,000 companies and millions of learners around the world</div>
            <div className='HomeSection2Main'>
                <div><img src='https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg' alt=''/></div>
                <div><img src='https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg' alt=''/></div>
                <div><img src='https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg' alt=''/></div>
                <div><img src='https://s.udemycdn.com/partner-logos/ou-v1/att.svg' alt=''/></div>
                <div><img src='https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg' alt=''/></div>
                <div><img src='https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg' alt=''/></div>
                <div><img src='https://s.udemycdn.com/partner-logos/ou-v1/citi.svg' alt=''/></div>
                <div><img src='https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg' alt=''/></div>
            </div>
        </div>

        <div className='HomeSection3'>
            <h1>A broad selection of courses</h1>
            <p>Choose from over 210,000 online video courses with new additions published every month</p>
            <div className='HomeSection3Inner'>
                <h2>Expand your career opportunities with Python</h2>
                <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
                <button>Explore more</button>

                <div className='main'>
                <div className='box'>
                {ContextData.filter((item) => item && item.id === 1).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
             
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'14pt',fontWeight:'700',width:'300px'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Buy Now</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 2).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p>
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'14pt',fontWeight:'700',width:'300px'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Buy Now</button></NavLink>
            </div>
             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 3).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
            
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'14pt',fontWeight:'700',width:'300px'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Buy Now</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 4).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
             
             <div className='hoveredItemDetails'>
              <p  style={{fontSize:'14pt',fontWeight:'700',width:'300px'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Buy Now</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 5).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
             
             <div className='hoveredItemDetails1' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Buy Now</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
                </div>
            </div>
        </div>


        <div className='HomeSection4'>
          <h2>How learners like you are achieving their goals</h2>
          <div className='HomeSection4Main'>
          <div className='HomeSection4Box'>
          <div className='HomeSection4Img'>
            <img src='https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg' alt=''/>
          </div>
          <p>I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.</p>
          <h3>Will A</h3>
          <hr style={{backgroundColor:'gray'}}></hr>
          <div className='HomeSection4Text'>[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02</div>
          </div>
          <div className='HomeSection4Box'>
          <div className='HomeSection4Img'>
            <img src='https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg' alt=''/>
          </div>
          <p>This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys :).</p>
          <h3>
Ron F</h3>
          <hr style={{backgroundColor:'gray',marginTop:'60px'}}></hr>
          <div className='HomeSection4Text'>Become a Product Manager | Learn the Skills & Get the Job</div>
          </div>
          <div className='HomeSection4Box'>
          <div className='HomeSection4Img'>
            <img src='https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg' alt=''/>
          </div>
          <p>One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.</p>
          <h3>
Phillip W</h3>
          <hr style={{backgroundColor:'gray'}}></hr>
          <div className='HomeSection4Text'>Leadership: Practical Leadership Skills</div>
          </div>
          </div>
        </div>


        <div className='HomeSection5'>
          <h2>Top categories</h2>
          <div className='HomeSection5Main'>
            <div className='HomeSection5Box'>
              <img src='https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg' alt=''/>
              <p>Design</p>
            </div>
            <div className='HomeSection5Box'>
              <img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' alt=''/>
              <p>Development</p>
            </div>
            <div className='HomeSection5Box'>
              <img src='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg' alt=''/>
              <p>Marketing</p>
            </div>
            <div className='HomeSection5Box'>
              <img src='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg' alt=''/>
              <p>IT and Software</p>
            </div>
            <div className='HomeSection5Box'>
              <img src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg' alt=''/>
              <p>Photography</p>
            </div>
            <div className='HomeSection5Box'>
              <img src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg' alt=''/>
              <p>Personal Development</p>
            </div>
            <div className='HomeSection5Box'>
              <img src='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg' alt=''/>
              <p>Business</p>
            </div><div className='HomeSection5Box'>
              <img src='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' alt=''/>
              <p>Music</p>
            </div>
          </div>
        </div>

        <div className='HomeSection6'>
          <div className='HomeSection6Box'> 
<img src='https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg' alt=''/>
<h2>Upskill your team with Udemy Business</h2>
<ul>
  <li>Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li>
  <li>International course collection in 14 languages</li>
  <li>Top certifications in tech and business</li>
  
</ul>
<button className='button1'>Get Udemy Business</button>
<button className='button2'>Learn more</button>
          </div>
          <div className='HomeSection6Box2'> 
            <img src='https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg' alt=''/>
          </div>
        </div>


        <div className='HomeSection6' style={{marginBottom:'70px'}}>
        <div className='HomeSection6Box2' style={{marginRight:'30px'}}> 
            <img src='https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg' alt=''/>
          </div>
          <div className='HomeSection6Box' style={{marginLeft:'30px'}}> 
<h2>Become an instructor</h2>
<ul style={{listStyle:'none'}}>
  <li>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</li>

  
</ul>
<button className='button1'>Start teaching today</button>

          </div>
          
        </div>
        












<div className='ff'>
        <Footer /></div>
    </div>
  )
}

export default Home