
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Iot from './pages/technology/Iot';
import ServersCloud from './pages/technology/ServersCloud';
import Connectivity from './pages/technology/Connectivity';
import BigData from './pages/data/BigData';
import AiMl from './pages/data/AiMl';
import Integration from './pages/data/Integration';
import Modeling3d2d from './pages/modeling/Modeling3d2d';
import Synchronization from './pages/modeling/Synchronization';
import Architecture from './pages/software/Architecture';
import Applications from './pages/software/Applications';
import UiUx from './pages/interfaces/UiUx';
import ArVrMr from './pages/interfaces/ArVrMr';

function App() {
  return (
    <Router basename={process.env.APP_BASENAME}>
      <div className="min-h-screen bg-gray-50 font-sans antialiased">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-gray-50 h-[500px]" aria-hidden="true"></div>
        <div className="relative">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/technology/iot" element={<Iot />} />
              <Route path="/technology/servers-cloud" element={<ServersCloud />} />
              <Route path="/technology/connectivity" element={<Connectivity />} />
              <Route path="/data/big-data" element={<BigData />} />
              <Route path="/data/ai-ml" element={<AiMl />} />
              <Route path="/data/integration" element={<Integration />} />
              <Route path="/modeling/3d-2d" element={<Modeling3d2d />} />
              <Route path="/modeling/synchronization" element={<Synchronization />} />
              <Route path="/software/architecture" element={<Architecture />} />
              <Route path="/software/applications" element={<Applications />} />
              <Route path="/interfaces/ui-ux" element={<UiUx />} />
              <Route path="/interfaces/ar-vr-mr" element={<ArVrMr />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;