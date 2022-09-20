import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import RecentProperties from './pages/RecentProperties'
import ExploreLocations from './pages/ExploreLocations'
import Locations from './pages/Locations'
import Banner1 from './pages/Banner1'
import Testimonials from './pages/Testimonials'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Banner />
          <RecentProperties />
          <ExploreLocations />
          <Locations />
          <Banner1 />
          <Testimonials />
          <ContactUs />
          <Footer />

          <Routes>
            <Route path='/' />
          </Routes>
    
        </div>
    
      </Router>
    </>
  )
}

export default App
