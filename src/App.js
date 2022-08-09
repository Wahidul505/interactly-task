import './App.css';
import Home from './Pages/Home';
import Logo from './Components/Logo';
import Coaching from './Pages/Coaching';
import { useSelector } from 'react-redux';
import SignUp from './Pages/SignUp';
import { Toaster } from 'react-hot-toast';

function App() {
  const navigate = useSelector(state => state.navigate);
  console.log(navigate)
  return (
    <div className="App">
      {navigate.welcome && <Home />}
      {navigate.coaching && <Coaching />}
      {navigate.signUp && <SignUp />}
      <Logo />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
