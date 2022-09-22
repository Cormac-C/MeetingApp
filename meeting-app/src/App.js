import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AttendeeView } from './pages';

function App() {
  return (
    <div className="App">
      {AttendeeView()}
    </div>
  );
}

export default App;
