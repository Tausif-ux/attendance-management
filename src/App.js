import AppBar from './components/AppBar/AppBar';
import AppBody from './components/AppBody/AppBody';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className = 'App-header' >
        <AppBar />
      </header>
      <main className = "App-main" >
        <AppBody />    
      </main>
      <footer>
        <BottomNavBar />
      </footer>
    </div>
  );
}

export default App;