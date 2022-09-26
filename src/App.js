import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import FocusOptical from "./components/contents/uiuxdesign/FocusOptical";
import IBayanihan from "./components/contents/uiuxdesign/IBayanihan";
import NFTMarketplace from "./components/contents/uiuxdesign/NFTMarketplace";
import SRMSMobile from "./components/contents/uiuxdesign/SRMSMobile";
import SRMSWeb from "./components/contents/uiuxdesign/SRMSWeb";

import DesignTrends from "./components/contents/graphicdesign/DesignTrends";
import StayInspired from "./components/contents/graphicdesign/StayInspired";
import TechTrends from "./components/contents/graphicdesign/TechTrends";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Home />
    //   <About />
    //   <Work />
    // </div>

    <Router>
        <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Daniel Portfolio</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
          <meta name="description" content="Daniel Portfolio" />
        </Helmet>
        <Navbar/>
        {/* <Home/>
        <About/>
        <Work/> */}

        <Routes>
          <Route path='/portfolio-react-app' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />

          <Route path='/focusoptical' element={< FocusOptical />} />
          <Route path='/ibayanihan' element={< IBayanihan />} />
          <Route path='/nftmarketplace' element={< NFTMarketplace />} />
          <Route path='/srmsmobile' element={< SRMSMobile />} />
          <Route path='/srmsweb' element={< SRMSWeb />} />

          <Route path='/designtrends' element={< DesignTrends />} />
          <Route path='/stayinspired' element={< StayInspired />} />
          <Route path='/techtrends' element={< TechTrends />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
