import { useState } from 'react';
import './App.css';
import { HomeScreen } from './components/HomeScreen';
import { Navbar } from './components/ui/Navbar';

function App() {
  const [method, setMethod] = useState('')
  return (
    <div className="container">
      <Navbar setMethod={setMethod} />
      <HomeScreen method={method} />
    </div>
  );
}

export default App;
