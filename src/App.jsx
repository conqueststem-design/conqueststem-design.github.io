import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GetInvolved from './pages/GetInvolved';
import Schedule from './pages/Schedule';
import PageNotFound from './lib/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/schedule" element={<Schedule />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
