// RouteCompo.js
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import LinkCompo from './LinkComp';
import Home from './Home'; // Import  Home component
import Courses from './Courses'; // Import Courses component
// import Categories from './Categories'; // Import Categories component
import SearchResults from '../SearchResults'; 
// import Cart from './Cart'; // Import Cart component
import ContextAPI from './ContextAPI';
import Detail from './BoxDetail';
import TechUdemy from './Sub-Components/TechUdemy';
import CartPage from './Cart/cartPage';
import Business from './Sub-Components/Business';
import BusinessCom from './Sub-Components/Business-Communication';
import Login from './login/Login';
import Register from './login/Register';
import BusinessManagement from './Sub-Components/Business-Management';
import BusinessStrategy from './Sub-Components/Business-Strategy';
import BusinessOperations from './Sub-Components/Business-Operation';
import BusinessHuman from './Sub-Components/Business-Human';
import Finance from './Sub-Components/Finance/Finance';
import FinanceTaxes from './Sub-Components/Finance/Finance-Taxes';
import FinanceEconomics from './Sub-Components/Finance/Finance-Economics';
import FinanceCompliance from './Sub-Components/Finance/Finance-Complaince';
import FinanceAccounting from './Sub-Components/Finance/Finance-Accounting';
import ItSoftware from './Sub-Components/IT-Software/ItSoftware';
import ItSoftwareCertification from './Sub-Components/IT-Software/Software-Certification';
import ItSoftwareNetwork from './Sub-Components/IT-Software/Software-Network';
import ItSoftwareHardware from './Sub-Components/IT-Software/Software-Hardware';
import ItSoftwareOperation from './Sub-Components/IT-Software/Software-Operating';
import Design from './Sub-Components/Design/design';
import DesignWeb from './Sub-Components/Design/web';
import Design3d from './Sub-Components/Design/3d';
import DesignGame from './Sub-Components/Design/game';
import DesignFashion from './Sub-Components/Design/fashion';
import Marketing from './Sub-Components/Marketing/marketing';
import MarketingSocial from './Sub-Components/Marketing/Social';
import MarketingContent from './Sub-Components/Marketing/Content';
import MarketingPublic from './Sub-Components/Marketing/Public';
import MarketingDigital from './Sub-Components/Marketing/Digital';
import Lifestyle from './Sub-Components/Lifestyle/lifestyle';
import LifestyleArts from './Sub-Components/Lifestyle/arts';
import LifestylePet from './Sub-Components/Lifestyle/pet';
import LifestyleFood from './Sub-Components/Lifestyle/food';
import LifestyleBeauty from './Sub-Components/Lifestyle/beauty';
import Photography from './Sub-Components/Photography/photography';
import PhotographyTools from './Sub-Components/Photography/tools';
import PhotographyDigital from './Sub-Components/Photography/digital';
import PhotographyVideo from './Sub-Components/Photography/video';
import PhotographyCommercial from './Sub-Components/Photography/commerical';
import MusicArts from './Sub-Components/Music&Arts/Music-Arts';
import MusicArtsVocal from './Sub-Components/Music&Arts/vocal';
import MusicArtsInstruments from './Sub-Components/Music&Arts/instruments';
import MusicArtsSoftware from './Sub-Components/Music&Arts/software';
import MusicArtsProduction from './Sub-Components/Music&Arts/production';
import Health from './Sub-Components/Health&Fitness/Health-Fitness';
import HealthFitness from './Sub-Components/Health&Fitness/fitness';
import HealthSport from './Sub-Components/Health&Fitness/sport';
import HealthYoga from './Sub-Components/Health&Fitness/yoga';
import HealthMental from './Sub-Components/Health&Fitness/mental';
import Teaching from './Sub-Components/Teaching&Academics/teaching';
import TeachingSocial from './Sub-Components/Teaching&Academics/social';
import TeachingMath from './Sub-Components/Teaching&Academics/math';
import TeachingScience from './Sub-Components/Teaching&Academics/science';
import TeachingEngineering from './Sub-Components/Teaching&Academics/engineering';

function RouteCompo() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <ContextAPI>
      <LinkCompo/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/business" element={<Business />} />
        <Route path="/business/communication" element={<BusinessCom />} />
        <Route path="/business/managements" element={<BusinessManagement />} />
        <Route path="/business/strategy" element={<BusinessStrategy />} />
        <Route path="/business/operations" element={<BusinessOperations />} />
        <Route path="/business/humanresources" element={<BusinessHuman />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/finance/taxes" element={<FinanceTaxes />} />
        <Route path="/finance/economics" element={<FinanceEconomics />} />
        <Route path="/finance/compliance" element={<FinanceCompliance />} />
        <Route path="/finance/accounting" element={<FinanceAccounting />} />


        <Route path="/itsoftware" element={<ItSoftware />} />
        <Route path="/itsoftware/certification" element={<ItSoftwareCertification />} />
        <Route path="/itsoftware/network&security" element={<ItSoftwareNetwork/>} />
        <Route path="/itsoftware/hardware" element={<ItSoftwareHardware/>} />
        <Route path="/itsoftware/operatingsystem" element={<ItSoftwareOperation/>} />

        <Route path="/design" element={<Design />} />
        <Route path="/design/web" element={<DesignWeb />} />
        <Route path="/design/game" element={<DesignGame />} />
        <Route path="/design/3d" element={<Design3d />} />
        <Route path="/design/fashion" element={<DesignFashion />} />


        <Route path="/marketing/digital" element={<MarketingDigital />} />
        <Route path="/marketing/social" element={<MarketingSocial/>} />
        <Route path="/marketing/public" element={<MarketingPublic />} />
        <Route path="/marketing/content" element={<MarketingContent/>} />
        <Route path="/marketing" element={<Marketing />} />



        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/lifestyle/arts" element={<LifestyleArts />} />
        <Route path="/lifestyle/beauty" element={<LifestyleBeauty />} />
        <Route path="/lifestyle/pet" element={<LifestylePet />} />
        <Route path="/lifestyle/food" element={<LifestyleFood />} />


        <Route path="/photography" element={<Photography />} />
        <Route path="/photography/tools" element={<PhotographyTools />} />
        <Route path="/photography/digital" element={<PhotographyDigital />} />
        <Route path="/photography/commerical" element={<PhotographyCommercial />} />
        <Route path="/photography/video" element={<PhotographyVideo />} />


        <Route path="/musicarts" element={<MusicArts />} />
        <Route path="/musicarts/vocal" element={<MusicArtsVocal />} />
        <Route path="/musicarts/instruments" element={<MusicArtsInstruments />} />
        <Route path="/musicarts/production" element={<MusicArtsProduction/>} />
        <Route path="/musicarts/software" element={<MusicArtsSoftware />} />


        <Route path="/health" element={<Health />} />
        <Route path="/health/fitness" element={<HealthFitness />} />
        <Route path="/health/yoga" element={<HealthYoga />} />
        <Route path="/health/mental" element={<HealthMental />} />
        <Route path="/health/sport" element={<HealthSport />} />

        <Route path="/teaching" element={<Teaching />} />
        <Route path="/teaching/engineering" element={<TeachingEngineering />} />
        <Route path="/teaching/math" element={<TeachingMath />} />
        <Route path="/teaching/social" element={<TeachingSocial />} />
        <Route path="/teaching/science" element={<TeachingScience />} />
        

        

        <Route path="/search-results" element={<><SearchResults/></>} />
        <Route path="/tech_on_udemy" element={<TechUdemy/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path="/login" element={<><Login/></>} />
          <Route path="/register" element={<><Register/></>} /> 
      </Routes>
      </ContextAPI>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default RouteCompo;
