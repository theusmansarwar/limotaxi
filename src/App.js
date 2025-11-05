
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';
import BookingForm from './components/BookingForm/BookingForm';
import SubSidebar from './components/subSidebar/SubSidebar';
import Dispatch from './components/dispatchDashboard/Dispatch';

function App() {
  return (
    <> 
    <div className="sideheader">
      <div className='sideSubside'> 
     <Sidebar />
     <SubSidebar />
     </div>
     <Header />
      </div>
      <div className='dispatch-dashboard-main' > 
      <BookingForm/>
      <Dispatch />
      </div>
    </>
  );
}

export default App;
