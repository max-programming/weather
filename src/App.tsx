import { Routes } from 'react-router-dom';
import SiteNavigation from './components/SiteNavigation';

function App() {
  return (
    <div className='flex flex-col min-h-screen font-Roboto bg-weather-primary'>
      <SiteNavigation />
    </div>
  );
}

export default App;
