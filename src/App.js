
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';
import BookingForm from './components/BookingForm/BookingForm';

function App() {
  return (
    <> 
    <div className="sideheader">
     <Sidebar />
     <Header />
      </div>
      <BookingForm/>
    
    </>
  );
}

export default App;
