import './App.css';
import Body from './components/body/Body';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
  <Header/>
  
  <Sidebar/>
  <div className='dashboard-right'>
  <Body/>
  </div>
  </>
  );
}

export default App;
