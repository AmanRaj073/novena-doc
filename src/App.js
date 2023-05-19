import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import { About } from "./Pages/About";
import {Contact} from "./Pages/Contact";
import {Home} from "./Pages/Home";
import { Header } from './Pages/Common/Header';
import { Footer } from './Pages/Common/Footer';
import { Service } from './Pages/Service';
import { Appoinment } from './Pages/Appoinment';
import { Confirmation } from './Pages/Confirmation';
import { BlogSidebar } from './Pages/BlogSidebar';
import { BlogSingle } from './Pages/BlogSingle';
import { DepartmentSingle } from './Pages/DepartmentSingle';
import { Department } from './Pages/Department';
import { DoctorSingle} from './Pages/DoctorSingle';
import { Doctor} from './Pages/Doctor';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/appoinment" element={<Appoinment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/blogsidebar" element={<BlogSidebar />} />
          <Route path="/blogsingle" element={<BlogSingle />} />
          <Route path="/departmentsingle" element={<DepartmentSingle />} />
          <Route path="/department" element={<Department/>} />
          <Route path="/doctorsingle" element={<DoctorSingle/>} />
          <Route path="/doctor" element={<Doctor/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
