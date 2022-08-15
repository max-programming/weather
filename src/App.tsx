import { Route, Routes } from 'react-router-dom';
import SiteNavigation from './components/SiteNavigation';
import HomeView from './pages/HomeView';

function App() {
  return (
    <div className='flex flex-col min-h-screen font-Roboto bg-weather-primary'>
      <SiteNavigation />
      <Routes>
        <Route path='/' element={<HomeView />} />
      </Routes>
    </div>
  );
}

export default App;
