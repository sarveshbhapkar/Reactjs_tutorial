import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import Employee from './components/Employee';
import EventHandling from './components/EventHandling';
import User from './components/User';



function App() {


  return (
    <div className="App">
     <Employee/>
     <User/>
     <EventHandling/>
      <ConditionalRendering />
    
    </div>
  );
}


export default App;
