
import React, { useState } from 'react';
import './TechUdmey.css'
import Footer from '../Footer/Footer';
const TechUdemy = () => {
    const [activeTab, setActiveTab] = useState('Plan your curriculum');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className='TechUdemySection'><img src='https://s.udemycdn.com/teaching/billboard-mobile-v3.jpg' alt='' />
      <div className='TechSection6Box' style={{width:'350px',textAlign:'left'}}> 
<h2 >Come teach with us</h2>
<ul>
  <li>Become an instructor and change lives — including your own</li>
  
</ul>
<button className='button1'>Get Started</button>

          </div>
      </div>

      <div className='TechSection2'>
        <h1>So many reasons to start</h1>
        <div className='TechSection2Main'>
            <div className='TechSection2Box'>
                <img src='https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg' alt=''/>
                <h3>Teach your way</h3>
                <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
            </div>
            <div className='TechSection2Box'>
                <img src='https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg' alt=''/>
                <h3>Inspire learners</h3>
                <p>
Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
            </div>
            <div className='TechSection2Box'>
                <img src='https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg' alt=''/>
                <h3>Get rewarded</h3>
                <p>
Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
            </div>

        </div>

      </div>


      <div className='TechSection3'>
        <div className='TechSection3Box' >
            <h1>62M</h1>
            <p>Students</p>
        </div>
        <div className='TechSection3Box' >
            <h1>75+</h1>
            <p>Languages</p>
        </div>
        <div className='TechSection3Box' >
            <h1>830M</h1>
            <p>Enrollments</p>
        </div>
        <div className='TechSection3Box' >
            <h1>180+</h1>
            <p>Countries</p>
        </div>
        <div className='TechSection3Box' >
            <h1>15,000+</h1>
            <p>Enterprise customers</p>
        </div>
        
      </div>



      {/* ----------------------------------------------------------------- */}

      <div className='teaching-page'>
        <h1>How to begin</h1>
      <div className='tabs'>
        <div
          className={`tab ${activeTab === 'Plan your curriculum' ? 'active' : ''}`}
          onClick={() => handleTabClick('Plan your curriculum')}
        >
          Plan your curriculum
        </div>
        <div
          className={`tab ${activeTab === 'Record your video' ? 'active' : ''}`}
          onClick={() => handleTabClick('Record your video')}
        >
        Record your video
        </div>
        <div
          className={`tab ${activeTab === 'Launch your course' ? 'active' : ''}`}
          onClick={() => handleTabClick('Launch your course')}
        >
          Launch your course
        </div>
      </div>

      <div className='tab-content'>
        {activeTab === 'Plan your curriculum' && (
            <div className='contentMain'>
          <div className='content'><p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.</p>

          <p>The way that you teach — what you bring to it — is up to you.</p>
          
          <p style={{fontWeight:'700'}}> How we help you</p>
          <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p></div>
          <div className='contentImg'><img src='https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg' alt=''/></div>
          </div>
        )}
         {activeTab === 'Record your video' && (
            <div className='contentMain'>
          <div className='content'><p>Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start.</p>

          <p>If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.</p>
          
          <p style={{fontWeight:'700'}}> How we help you</p>
          <p>Our support team is available to help you throughout the process and provide feedback on test videos.</p></div>
          <div className='contentImg'><img src='https://s.udemycdn.com/teaching/record-your-video-v3.jpg' alt=''/></div>
          </div>
        )}
        {activeTab === 'Launch your course' && (
            <div className='contentMain'>
          <div className='content'><p>Gather your first ratings and reviews by promoting your course through social media and your professional networks.</p>

          <p>Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.</p>
          
          <p style={{fontWeight:'700'}}> How we help you</p>
          <p>Our custom coupon tool lets you offer enrollment incentives while our global promotions drive traffic to courses. There’s even more opportunity for courses chosen for Udemy Business.</p></div>
          <div className='contentImg'><img src='https://s.udemycdn.com/teaching/launch-your-course-v3.jpg' alt=''/></div>
          </div>
        )}
      </div>
    </div>

      {/* ----------------------------------------------------------------- */}

<div className='TechSection5'>
<div className='HomeSection6' style={{marginBottom:'70px'}}>
        <div className='HomeSection6Box2' style={{marginRight:'30px'}}> 
            <img src='https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg' alt=''/>
          </div>
          <div className='HomeSection6Box' style={{marginLeft:'30px'}}> 
<ul style={{listStyle:'none'}}>
  <li style={{fontSize:'18pt'}}>“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</li>

  
</ul>
<p style={{fontWeight:'600'}}>Frank Kane</p>
<div style={{color:'grey'}}>Data Science & IT Certifications</div>

          </div>
          
        </div>
        

</div>


<div className='TechSection7'>
    <div style={{marginLeft:'-100px'}}>
<img src='https://s.udemycdn.com/teaching/support-1-v3.jpg' alt='' />
    </div>
    <div className='TechSection7Box'>
        <h1>You won’t have to do it alone</h1>
        <p>Our Instructor Support Team is here to answer your questions and review your test video, while our Teaching Center gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our online community.</p>
        <div style={{color:'#5624d0', fontWeight:'700',cursor:'pointer'}}>Need more details before you start? Learn more.</div>
    </div>
    <div style={{marginRight:'-100px'}}>
    <img src='https://s.udemycdn.com/teaching/support-2-v3.jpg' alt=''/>
    </div>
</div>


<div className='TechSection8'>
    <h1>Become an instructor today</h1>
    <p>Join one of the world’s largest online learning </p>
    <p style={{marginTop:'-20px'}}>marketplaces.</p>
    <button className='button1' style={{padding:'20px 40px'}}>Get Started</button>
</div>

<div className='ff'>
        <Footer /></div>










    </div>
  )
}

export default TechUdemy



