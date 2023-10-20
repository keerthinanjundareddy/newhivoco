import React, { useState, useEffect } from 'react';

import './hovoco.css';
// import xircularone from '../Assets/Circular logo.png'
// import arrow from '../Assets/icons8-right-arrow-50.png'
// import Arrowtwo from '../Assets/Arrow.svg'
// import Up from '../Assets/Uparrow.svg'
// import { ReactComponent as MySvgIcon } from '../Assets/Uparrow.svg';
// import close from '../Assets/close.png';
import closetwo from '../../src/Assets/closetwo.png'
// import vector from '../../src/Assets/Vecto1.png'
import sales from '../../src/Assets/Funding (4).png'
  import documentqa from '../../src/Assets/Funding (9).png'
  import voice from '../../src/Assets/Funding (10).png'
  import sentiment from '../../src/Assets/Funding (8).png'
  import Employee from '../../src/Assets/Funding (5).png'
  import facerecog from '../../src/Assets/Funding (6).png'
  import hivocologo from '../../src/Assets/Group 3.png'
  
  


function Hivovocontent() {
  const [pricingData, setPricingData] = useState({});
  const[pricingDatatwo,setPricingDatatwo]=useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showdocumentPopup, setShowdocumentPopup] = useState(false);
  const [showemployeePopup, setShowemployeePopup] = useState(false);
  const [showvoicePopup, setShowvoicePopup] = useState(false);
  const [showfacePopup, setShowfacePopup] = useState(false);
  const [showsentimentPopup, setShowsentimentPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [popupTitle, setPopupTitle] = useState('');

 

 
  
  const popupeditsales = () => {
   
    setShowPopup(true);
  }
  const popupeditdocument = () => {
   
    setShowdocumentPopup(true);
  }
  const popupeditemployee = () => {
   
    setShowemployeePopup(true);
  }

  const popupeditvoice = () => {
   
    setShowvoicePopup(true);
  }

  const popupeditface = () => {
   
    setShowfacePopup(true);
  }

  
  const popupeditsentiment = () => {
 
    setShowsentimentPopup(true);
  }
  
  
  
  
  
  return (
    <>
 
    <div>

        <div>
         <div className='navbar-section'>
          <div className='parent-navbar-section'>
     <div className='navbar-image'>
  
      <img  src={hivocologo} alt="hivocologo" className='navbar-image-two'/>
      </div>
   
     </div>
   
    
      </div>
    
          <div className='pricing-full-page-container' >
            <div className='pricing-flexbox-container'>
             
               
                  <div className='pricing-item-section'  >
                    <div style={{width:"60px",height:"60px"}}>
                     <img src={sales} className='logo-xircular' style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                     </div>
                    <div style={{ paddingTop: "30px", paddingBottom: "10px",letterSpacing:"0.5px" }} className='items-title-div'><b>SALES-AGENT</b></div>
                       <div style={{paddingTop:"10px", className:"item-dec-div"}} className='items-title-description'>To boost revenue and efficiency in your products, we implement a Virtual Sales Agent. It relies on product data and customer profiles, enabling personalized service recommendations and easy appointment scheduling. Imagine a digital assistant that guides customers and increases product sales.</div> 
                       <div style={{paddingTop:"20px"}} className='how-it-works-section'onClick={() => popupeditsales()}><span  className='how-it-works-section-two'></span>READ MORE</div>
                 
                  </div>

                  <div className='pricing-item-section'  >
                    <div style={{width:"60px",height:"60px"}}>
                     <img src={documentqa} className='logo-xircular' style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                     </div>
                    <div style={{ paddingTop: "30px", paddingBottom: "10px",letterSpacing:"0.5px" }} className='items-title-div'><b>DOCUMENT-QA</b></div>
                       <div style={{paddingTop:"10px", className:"item-dec-div"}} className='items-title-description'>Our Document-Based AI Chatbot simplifies access to company information. It's powered by company documents and data sources, providing instant responses to natural language queries. This means employees can effortlessly retrieve policies and documents, making information readily accessible.</div> 
                       <div style={{paddingTop:"20px"}} className='how-it-works-section' onClick={() => popupeditdocument()}><span  className='how-it-works-section-two'></span>READ MORE</div>
                 
                  </div>
                
                  <div className='pricing-item-section'  >
                    <div style={{width:"60px",height:"60px"}}>
                     <img src={Employee} className='logo-xircular' style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                     </div>
                    <div style={{ paddingTop: "30px", paddingBottom: "10px",letterSpacing:"0.5px" }} className='items-title-div'><b>EMPLOYEE-DASHBOARD</b></div>
                       <div style={{paddingTop:"10px", className:"item-dec-div"}} className='items-title-description'>To simplify performance reporting, our Employee Work Summary Chatbot employs employee performance data and reporting tools. Picture a chatbot that engages with your HR system, effortlessly generating graphical work summaries and performance insights, making management more data-driven and efficient.</div> 
                       <div style={{paddingTop:"20px"}} className='how-it-works-section' onClick={() => popupeditemployee()}><span  className='how-it-works-section-two'></span>READ MORE</div>
                 
                  </div>
                
                  <div className='pricing-item-section'  >
                    <div style={{width:"60px",height:"60px"}}>
                     <img src={voice} className='logo-xircular' style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                     </div>
                    <div style={{ paddingTop: "30px", paddingBottom: "10px",letterSpacing:"0.5px" }} className='items-title-div'><b>VOICE-CLONING</b></div>
                       <div style={{paddingTop:"10px", className:"item-dec-div"}} className='items-title-description'>In the realm of entertainment and marketing, we introduce Voice Cloning into Celebrity Voices. With high-quality audio samples of your chosen celebrity, you can transform your voice, opening up creative possibilities for advertisements, content creation, and more. Imagine speaking in the voice of your favorite celebrity!</div> 
                       <div style={{paddingTop:"20px"}} className='how-it-works-section'  onClick={() => popupeditvoice()}><span  className='how-it-works-section-two'></span>READ MORE</div>
                 
                  </div>
                

                  <div className='pricing-item-section'  >
                    <div style={{width:"60px",height:"60px"}}>
                     <img src={facerecog} className='logo-xircular' style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                     </div>
                    <div style={{ paddingTop: "30px", paddingBottom: "10px",letterSpacing:"0.5px" }} className='items-title-div'><b>FACE-RECOGNITION</b></div>
                       <div style={{paddingTop:"10px", className:"item-dec-div"}} className='items-title-description'>Enhance security and convenience with Face Recognition Technology. By utilizing a database of facial images, we accurately identify individuals based on their unique features. This technology streamlines access control, ensuring only authorized individuals gain entry, making facilities safer and more efficient.</div> 
                       <div style={{paddingTop:"20px"}} className='how-it-works-section' onClick={() => popupeditface()}><span  className='how-it-works-section-two'></span>READ MORE</div>
                 
                  </div>
                

                  <div className='pricing-item-section'  >
                    <div style={{width:"60px",height:"60px"}}>
                     <img src={sentiment} className='logo-xircular' style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                     </div>
                    <div style={{ paddingTop: "30px", paddingBottom: "10px",letterSpacing:"0.5px" }} className='items-title-div'><b>SENTIMENTAL-ANALYSIS</b></div>
                       <div style={{paddingTop:"10px", className:"item-dec-div"}} className='items-title-description'>Understand your customers better with Sentiment Analysis for Customer Reviews. This technology leverages access to customer reviews and feedback, allowing you to gain valuable insights into customer sentiment. Make informed decisions and improve customer satisfaction based on real-time feedback.</div> 
                       <div style={{paddingTop:"20px"}} className='how-it-works-section' onClick={() => popupeditsentiment()}><span  className='how-it-works-section-two' ></span>READ MORE</div>
                 
                  </div>
                
                



{showPopup && (
              <>
               <div className="backdrop-blur" onClick={() => setShowPopup(false)}   />
        <div className="popup-container" >
          {/* Popup content */}
          <div className="popup-content" style={{display:"flex",flexDirection:"column",}} >
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              
            <div ></div>
            <div className="close-button" onClick={() => setShowPopup(false)}>
           <img src={closetwo } height="40" width="40" style={{paddingTop:"10px",paddingRight:"10px"}} alt="close-icon" className='close-section-popup'/>
            </div>
            </div>
            <div className='popup-content-text'>Requirements: Access to product data and customer profiles.</div>
            <div className='popup-title'>Output: Boost product revenue by providing personalized service recommendations and appointment scheduling.</div>
          </div>
        </div>
        
  
        </>
      )}


{showdocumentPopup && (
              <>
               <div className="backdrop-blur" onClick={() => setShowdocumentPopup(false)}   />
        <div className="popup-container" >
          {/* Popup content */}
          <div className="popup-content" style={{display:"flex",flexDirection:"column",}} >
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              
            <div ></div>
            <div className="close-button" onClick={() => setShowdocumentPopup(false)}>
           <img src={closetwo } height="40" width="40" style={{paddingTop:"10px",paddingRight:"10px"}} alt="close-icon" className='close-section-popup'/>
            </div>
            </div>
            <div className='popup-content-text'>Requirements: Company documents and data sources.</div>
            <div className='popup-title'>Output: Instantly retrieve company information, policies, and relevant documents through natural language queries.</div>
          </div>
        </div>
        
  
        </>
      )}

      
{showemployeePopup && (
              <>
               <div className="backdrop-blur" onClick={() => setShowemployeePopup(false)}   />
        <div className="popup-container" >
          {/* Popup content */}
          <div className="popup-content" style={{display:"flex",flexDirection:"column",}} >
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              
            <div ></div>
            <div className="close-button" onClick={() => setShowemployeePopup(false)}>
           <img src={closetwo } height="40" width="40" style={{paddingTop:"10px",paddingRight:"10px"}} alt="close-icon" className='close-section-popup'/>
            </div>
            </div>
            <div className='popup-content-text'>Requirements: Employee performance data and reporting tools.</div>
            <div className='popup-title'>Output: Effortlessly generate visual work summaries and performance insights through conversational AI.</div>
          </div>
        </div>
        
  
        </>
      )}


           
{showvoicePopup && (
              <>
               <div className="backdrop-blur" onClick={() => setShowvoicePopup(false)}   />
        <div className="popup-container" >
          {/* Popup content */}
          <div className="popup-content" style={{display:"flex",flexDirection:"column",}} >
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              
            <div ></div>
            <div className="close-button" onClick={() => setShowvoicePopup(false)}>
           <img src={closetwo } height="40" width="40" style={{paddingTop:"10px",paddingRight:"10px"}} alt="close-icon" className='close-section-popup'/>
            </div>
            </div>
            <div className='popup-content-text'>Requirements: High-quality audio samples of the target celebrity.</div>
            <div className='popup-title'>Output: Transform your voice into that of a celebrity for entertainment, marketing, or creative projects.</div>
          </div>
        </div>
        
  
        </>
      )}

                
{showfacePopup && (
              <>
               <div className="backdrop-blur" onClick={() => setShowfacePopup(false)}   />
        <div className="popup-container" >
          {/* Popup content */}
          <div className="popup-content" style={{display:"flex",flexDirection:"column",}} >
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              
            <div ></div>
            <div className="close-button" onClick={() => setShowfacePopup(false)}>
           <img src={closetwo } height="40" width="40" style={{paddingTop:"10px",paddingRight:"10px"}} alt="close-icon" className='close-section-popup'/>
            </div>
            </div>
            <div className='popup-content-text'>Requirements: A database of facial images for recognition.</div>
            <div className='popup-title'>Output: Enhance security and streamline access control by identifying individuals based on their facial features.</div>
          </div>
        </div>
        
  
        </>
      )}


                     
{showsentimentPopup && (
              <>
               <div className="backdrop-blur" onClick={() => setShowsentimentPopup(false)}   />
        <div className="popup-container" >
          {/* Popup content */}
          <div className="popup-content" style={{display:"flex",flexDirection:"column",}} >
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              
            <div ></div>
            <div className="close-button" onClick={() => setShowsentimentPopup(false)}>
           <img src={closetwo } height="40" width="40" style={{paddingTop:"10px",paddingRight:"10px"}} alt="close-icon" className='close-section-popup'/>
            </div>
            </div>
            <div className='popup-content-text'>Requirements: Access to customer reviews and feedback.</div>
            <div className='popup-title'>Output: Gain valuable insights into customer sentiment to make data-driven decisions and improve customer satisfaction.</div>
          </div>
        </div>
        
  
        </>
      )}
              
            </div>

            
          </div>
          
        </div>
      
    </div>
    </>
  );
}

export default Hivovocontent;







