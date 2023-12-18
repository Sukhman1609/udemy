import React, { useContext,useState } from 'react';
import { NavLink} from 'react-router-dom';
// import Categories from '../Categories';
import '../../Styles/Business.css'
import { Store1 } from '../../ContextAPI';
import Footer from '../../Footer/Footer';
function DesignWeb() {
    const[ContextData]=useContext(Store1);
    console.log(ContextData);
    
    const [showLoginPopup, setShowLoginPopup] = useState(false);
   
   if (showLoginPopup) {
    console.log('abc');
    }
   
  
  
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
  
  return (
    <div className='Business'>
        <div className='LinkCompo2'>
      <div><h3>Design Courses &gt;</h3></div>
      <div className="sub-nav">
      <NavLink to='/design/web' className='sub-link'>Web Design</NavLink>
        <NavLink to='/design/game' className='sub-link'>Game Design</NavLink>
        <NavLink to='/design/3d' className='sub-link'>3D & Animation</NavLink>
        <NavLink to='/design/fashion' className='sub-link'>Fashion Design</NavLink>
        <NavLink to='/design' className='sub-link'>Other Design</NavLink>
        </div>
        </div>

        <div className='BusinessSection'>
            <div className='BusinessSectionHead'>
            <h1>Web Design Courses</h1>
            <h2>Courses to get you started</h2>
            <h3>Most Popular</h3>
            <hr ></hr></div>

            <div className='main'>
                <div className='box'>
                {ContextData.filter((item) => item && item.id === 106).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
             
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 117).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p>
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>
             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 108).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
            
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 119).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
             
             <div className='hoveredItemDetails'>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading'>{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box'>
                {ContextData.filter((item) => item && item.id === 104).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='boxinner' >
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg' /></NavLink>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p>
             <p className='price' >₹ {item.price}</p> 
             
             <div className='hoveredItemDetails1' style={{position:'absolute', right:'-100%'}}>
              <p style={{fontSize:'15pt'}}>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
                </div>
        </div>


<div className='BusinessSection2'>
    <hr></hr>
    <div className='BusinessSection2Inner'>
        <div>
            <h3>&#9734; Learn in-demand skills with over 210,000 video courses</h3>
        </div>
        <div>
            <h3>&#9734; Choose courses taught by real-world experts</h3>
        </div>
        <div>
            <h3>&#9734; Learn at your own pace, with lifetime access on mobile and desktop</h3>
        </div>
       

    </div>
    <hr></hr>
</div>

<div className='BusinessSection'>
<div className='BusinessSection3'>
    <h2>Popular topics</h2>
<div className='BusinessSection3Inner'>
    <div>Blender</div>
    <div>User Experience</div>
    <div>Figma</div>
    <div>Graphic Design</div>
    <div>Abode Photoshop</div>
    <div>3D Modelling</div>
    <div>Adobe Illustrator</div>
    <div>Drawing</div>
    <div>AutoCAD</div>
    <div>Canva</div>
    </div>
</div></div>


<div className='BusinessSection4'>
    <h2>Popular Instructors</h2>
    <div className='BusinessSection4Inner'>
        <div className='BusinessSection4InnerBox'>
            <img src='https://img-c.udemycdn.com/user/200_H/4897424_a25c_11.jpg' alt=''></img>
            <div className='contentInner'><h3>TIA Education, Andrew Ramdayal</h3>
            <p>PMP, PgMP, PMI-ACP, CISSP-ISSMP </p>
            <div style={{color:'maroon'}}><span style={{fontWeight:'700'}}>4.7</span>&#x2B50; Instructor Rating</div>
            <div><span style={{fontWeight:'700'}}>317,345</span> students</div>
            <div><span style={{fontWeight:'700'}}>31</span> Courses</div></div>
        </div>
        <div className='BusinessSection4InnerBox'>
            <img src='https://img-c.udemycdn.com/user/200_H/75004102_f8b0_2.jpg' alt=''></img>
            <div className='contentInner'><h3>Maven Analytics</h3>
            <p>Empowering everyday people with life-changing data skills</p>
            <div style={{color:'maroon'}}><span style={{fontWeight:'700'}}>4.7</span>&#x2B50; Instructor Rating</div>
            <div><span style={{fontWeight:'700'}}>1,317,345</span> students</div>
            <div><span style={{fontWeight:'700'}}>35</span> Courses</div></div>
        </div>
        <div className='BusinessSection4InnerBox'>
            <img src='https://img-c.udemycdn.com/user/200_H/8280056_7887_3.jpg' alt=''></img>
            <div className='contentInner'><h3>365 Careers</h3>
            <p>Creating opportunities for Data Science and Finance students</p>
            <div style={{color:'maroon'}}><span style={{fontWeight:'700'}}>4.7</span>&#x2B50; Instructor Rating</div>
            <div><span style={{fontWeight:'700'}}>2,117,345</span> students</div>
            <div><span style={{fontWeight:'700'}}>101</span> Courses</div></div>
        </div>
        <div className='BusinessSection4InnerBox'>
            <img src='https://img-c.udemycdn.com/user/200_H/8912846_1a61.jpg' alt=''></img>
            <div className='contentInner'><h3>Joseph Phillips</h3>
            <p>PMP, PMI-ACP, Project+, ITIL, CTT+</p>
            <div style={{color:'maroon'}}><span style={{fontWeight:'700'}}>4.7</span>&#x2B50; Instructor Rating</div>
            <div><span style={{fontWeight:'700'}}>771,694</span> students</div>
            <div><span style={{fontWeight:'700'}}>105</span> Courses</div></div>
        </div>
        </div>
</div>

<div className='BusinessSection5'>

    <h2>All Business courses</h2>
    <div className='InformationAlert'>
    <img src='https://cdn.pixabay.com/photo/2014/04/02/10/24/warning-303768_640.png' alt=''/>
<p>Not sure? All courses have a 30-day money-back guarantee</p>
    </div>
</div>


<div className='BusinessSection6'>
<div className='box1'>
                {ContextData.filter((item) => item && item.id === 119).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             <hr style={{marginTop:'20px'}}></hr>



             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 118).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             <hr style={{marginTop:'20px'}}></hr>



             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 117).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             <hr style={{marginTop:'20px'}}></hr>



             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 115).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             
             <hr style={{marginTop:'20px'}}></hr>


             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 118).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             
             <hr style={{marginTop:'20px'}}></hr>


             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 
              2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 116).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             
             <hr style={{marginTop:'20px'}}></hr>


             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
    <div className='box1'>
                {ContextData.filter((item) => item && item.id === 114).map((item, index) => {
            console.log(item);
            return(   <div key={item.id} className='box1inner' >
                <div className='BSMain'>


                <div>
            <NavLink to={`/detail/${item.id}`} ><img src={item && item.bollywoodimg} alt={item.name} className='subImg2' /></NavLink></div>


            <div>
             <p className='name' >{item.name}</p> 
             <p className='name1'>{item.author}</p>
             <p className='rating' >{item.rating}<span style={{color:'yellow', fontSize:"20pt", marginTop:'10px'}}>{item.rating_stars}</span></p></div>
             <div><p className='price' >₹ {item.price}</p> </div>

             </div>
             



             <div className='hoveredItemDetails2' style={{position:'absolute', right:'-100%'}}>
              <p>{item.name}</p>
              <div style={{color:'rgb(36, 57, 36)',fontWeight:'600',marginTop:'-10px'}}>Updated July 2023</div>
              <div className='hoverHeading' >{item.heading}</div>
              <div className='hoverDesc'>&#10003; {item.description.slice(0, 300)}...</div>
              <NavLink to={`/detail/${item.id}`} > <button className='bestSellerButton' onClick={handleBuyNow}>Add to cart</button></NavLink>
            </div>

             </div>)
          })} 
    </div>
</div>


    <img  className='add' src='https://img.freepik.com/free-vector/flat-project-management-concept-with-man-desk_23-2147792013.jpg?w=740&t=st=1702454757~exp=1702455357~hmac=3389a2f8b94e2dcdd02d40e121737eee928359335adffdcc4c9623b37433247e' alt=''/>



    <img className='add2' src='https://media1.giphy.com/media/pOZhmE42D1WrCWATLK/200w.webp?cid=ecf05e474utv1b1ybv8iwy5mcqhndzed3k8t83pc6oqji7r8&ep=v1_gifs_search&rid=200w.webp&ct=g' alt=''/>



<Footer/>





    </div>
  );
}

export default DesignWeb;
