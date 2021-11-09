
import './App.scss';


// ==== header ===== 
import { useState } from "react";
import logo from "./image/logo.svg"
import content from "./assets/content";
// =======


// =====hero section ====
import heroImg from './image/hero-img.png'
import lupa from './image/lupa.png'
import Frame from './image/Frame.png'
import Frame3 from './image/Frame3.png'
import Frame4 from './image/Frame4.png'
import Frame5 from './image/Frame5.png'
import Frame6 from './image/Frame6.png'
// ===================

// ==========info section =======

import provayder from './image/provayder.png'
import downloadVector from './image/Vector.png'
import download from './image/download.png'

// ===============carousel section ========
import MaskGroup from './image/MaskGroup.png'
import VectorLeft from './image/Vector-left.png'
import rightVector from './image/right-vector.png'

// =========laborotory section ===================
import "./components/lobaratory/lobaratory.scss"
import nurse from './image/nurse.jpg'
// import rightVector from './image/right-vector.png'
import lobarant from './image/lobarant.jpg'
import maska from './image/maska.jpg'

// ============== footer ================ 
import './components/footer/footer.scss'
import footerLogo from './image/footer-logo.svg'

function App() {
  const [lang, setLang] = useState("uz");
  return (
    
    <>
    <header>
  <div class="container">
    <div class="header">
     <div class="header-left">
      <a href="#"><img src={logo} alt="site logo image" width="160px" height="41px" /></a>
    </div>
    <div className ="site-lang">
    <select 
        className = "selectLang"
        defaultValue = {lang}
        onChange={(evt) => {
         setLang(evt.target.value);
        }}
        >
          <option className = "optionLang" value="uz">O'zbekcha</option>
          <option className = "optionLang" value="en">English</option>
          <option className = "optionLang" value="ru">русский</option>
        </select>
    </div>
    <div class="header-right">
      <ul>
        <li><a  class="header-link-active" href="#">{content[lang].headerNav[0]}</a></li>
        <li><a class="no-active" href="#">{content[lang].headerNav[1]}</a></li>
        <li><a class="no-active" href="#">{content[lang].headerNav[2]}</a></li>
        <li><a class="no-active"  href="#">{content[lang].headerNav[3]}</a></li>
        <li><a class="no-active" href="#">{content[lang].headerNav[4]}</a></li>
      </ul>
    </div>
  </div>
</div>
    </header>

{/* ===========hero section============= */}
    <section className = "hero">


 <div class="container">
    <div class="hero-wrapper">
      <div class="hero-left">
        <h3 class="hero-heading">
         {content[lang].heroTitle}
        </h3>
        <p class="hero-text">{content[lang].heroText}</p>
          <a href="#" class="hero-link">{content[lang].heroButton}</a>
      </div>
      <div class="hero-right">
        <img src={heroImg} width="693px" height="598px"
         alt=" hero image " />
      </div>
    </div>
    <div class="services-wrapper">
      <h2 class="services-heading">
        {content[lang].ourServices}
      </h2>
      <div class="services-line"></div>
      <p class="services-text">{content[lang].ourServicesText}</p>
    </div>
    <ul class="services-cards-wrapper">
      <li class="search-card"><img src={lupa} alt="search-card" width="91px" height="90px" />
      <h2>{content[lang].ourServicesListTitle[0]}</h2>
    <p>{content[lang].ourServicesListText[0]}</p>
  </li>
      <li class="pharmacy-card"><img src={Frame} alt="pharmacy-card" width="91px" height="90px" />
      <h2>{content[lang].ourServicesListTitle[1]}</h2>
    <p>{content[lang].ourServicesListText[1]}</p>
  </li>
      <li class="consultation-card"><img src={Frame3} alt="consultation-card" width="91px" height="90px" />
      <h2>{content[lang].ourServicesListTitle[2]}</h2>
    <p>{content[lang].ourServicesListText[2]}</p>
  </li>
      <li class="info-card"><img src={Frame4} alt="info-card" width="91px" height="90px" />
      <h2>{content[lang].ourServicesListTitle[3]}</h2>
    <p>{content[lang].ourServicesListText[3]}</p>
  </li>
      <li class="emergancy-card"><img src={Frame5} alt="emergancy-card" width="91px" height="90px" />
      <h2>{content[lang].ourServicesListTitle[4]}</h2>
    <p>{content[lang].ourServicesListText[4]}</p>
  </li>
      <li class="tracking-card"><img src={Frame6} alt="tracking-card" width="91px" height="90px" />
      <h2>{content[lang].ourServicesListTitle[5]}</h2>
    <p>{content[lang].ourServicesListText[5]} </p>
  </li>
</ul>
<div class="services-learn-more-link">
  <a class="services-learn-more" href="#">{content[lang].learnMore}</a>
</div>
    

  </div>
    </section>


{/* ==========info section============ */}
    <section>

  {/*  provayder section   */}
     
     <div class="provider-wrapper">
       <div class="provider-img">
         <img src={provayder} alt="provider image" width="650px" height="477px" />
       </div>
       <div class="provider-content">
         <h3 class="provider-heading">{content[lang].providersTitle}</h3>
         <div class="provider-line"></div>
         <p class="provider-text">{content[lang].providerText}</p>
          <a href="#" class="provider-link">{content[lang].learnMore}</a>
       </div>
     </div>
  
  {/* download  */}
     <div class="container">
     <div class="download-wrapper">
    
      <div class="download-content">
        <h3 class="download-heading">{content[lang].mobileAppsTitle}</h3>
        <div class="download-line"></div>
        <p class="download-text">{content[lang].mobileAppsText}</p>
         <a href="#" class="download-link"><span>{content[lang].download} </span><span> <img class="download-vector" src ={downloadVector} alt="vector" width="15.43" height="9.82" /></span>  </a>
      </div>
      <div class="download-img">
        <img src={download} alt="download image" width="665px" height="434px" />
      </div>
    </div>
  </div>
    </section>
{/* // =========================== */}


{/* ==============carousel section ========= */}
    <section>

 <div class="carousel-wrapper">
      <div class="carousel-title">
        {content[lang].customersTitle}
      </div>
      <div class="carousel-line"> </div>
        <div class="carousel-flex">
          <div class="person">
          <img class="persons-img" src={MaskGroup} alt="Person's image" width="133px" height="133px" />
          <div class="carousel-info">
            <p class="persons-name">{content[lang].whichCustomer}</p>
            <p class="persons-info">{content[lang].whoCustomer}</p>
          </div>
        </div>
          <div class="carousel-qoute">{content[lang].customerQuote}</div>
        </div>
    </div>
    {/*  =====================================================  */}

    <div class="carousel-left-right">
      <a href="#"><img src={VectorLeft} alt="left" width="28px" height="18px" /></a>
      
      <ul class="carousel-points">
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
      <a href="#"> <img src={rightVector} alt="right" width="28px" height="18px" /></a>
     
    </div>
    </section>
{/* // ====================== */}



  {/* ========= Laborotory section =================   */}
    <section>

<div class="container">
     <div class="labaratory">
       <h2 class="labaratory-heading">{content[lang].article}</h2>
       <div class="labaratory-line"></div>
       <div class="labaratory-card-wrapper">
        <div class="norse-helping">
          <img class="woman-img" src={nurse} alt="nurse is helping to woman" />
          <p class="labaratory-text1">{content[lang].articleTitle[0]}</p>
          <p class="labaratory-text2">{content[lang].articleText[0]}</p>
          <a href="#">{content[lang].readMore}<img src={rightVector} alt="vector to right" width="14.14px" height="9px" /></a>
        </div>
        <div class="loborant-checking">
          <img class="woman-img" src={lobarant} alt="loborant is checking" />
          <p class="labaratory-text1">{content[lang].articleTitle[1]}</p>
          <p class="labaratory-text2">{content[lang].articleText[1]}</p>
          <a href="#">{content[lang].readMore} <img src={rightVector} alt="vector to right" width="14.14px" height="9px" /></a>
        </div>
        <div class="maska">
          <img class="woman-img" src={maska} alt="woman wants be beautiful" />
          <p class="labaratory-text1">{content[lang].articleTitle[2]}</p>
          <p class="labaratory-text2">{content[lang].articleText[2]}</p>
          <a href="#">{content[lang].readMore} <img src={rightVector} alt="vector to right" width="14.14px" height="9px" /></a>
        </div>
       </div>
       <div class="view-all"><a class="labaratory-link" href="#"><span>{content[lang].viewAll}</span></a></div>
       </div>
      </div>
    </section>
    {/* // ============================== */}


    {/* =============footer ================== */}
    <section>

 <div class="footer">
      <div class="footer-logo">
        <a class="footer-logo-img-link" href="#"> <img src={footerLogo} alt="footer logo" width="160px" height="41px" /></a>
      
        <p class="footer-logo-text1">{content[lang].footerInfo}</p>
          <p class="footer-logo-text2">©Trafalgar PTY LTD 2020. {content[lang].allRights}</p>
      </div>
      <ul class="footer-list-flex">
        <li>
          <ul>
            <li><a class="footer-heading-list" href="#">{content[lang].company[0]}</a> </li>
            <li><a class="footer-link" href="#">{content[lang].company[1]}</a> </li>
            <li><a class="footer-link" href="#">{content[lang].company[2]}</a> </li>
            <li><a class="footer-link" href="#">{content[lang].company[3]}</a> </li>
            <li><a class="footer-link" href="#">{content[lang].company[4]}</a> </li>
            
          </ul>
        </li>
         <li>
          <ul>
            <li><a class="footer-heading-list" href="#">{content[lang].region[0]}</a> </li>
            <li><a class="footer-link" href="#">{content[lang].region[1]}</a> </li>
            <li><a class="footer-link" href="#">{content[lang].region[2]}</a> </li>
            <li><a class="footer-link" href="#">{content[lang].region[3]}</a> </li>
            <li><a class="footer-link"  href="#">{content[lang].region[4]}</a> </li>
            
          </ul>
        </li>
      <li>
          <ul>
            <li><a class="footer-heading-list" href="#">{content[lang].help[0]}</a> </li>
            <li><a class="footer-link" href="#">{content[lang].help[1]}</a> </li>
            <li><a class="footer-link" href="#">{content[lang].help[2]}</a> </li>
            <li><a class="footer-link"  href="#">{content[lang].help[3]}</a> </li>
            <li><a class="footer-link"  href="#">{content[lang].help[4]}</a> </li>
          
          </ul>
        </li>
      </ul>
    </div>
    </section>
    {/* // =========================== */}
    </>
    );
  }
  
  export default App;
  