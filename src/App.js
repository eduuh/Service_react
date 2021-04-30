import './App.css';
import { Navbar } from './components/navbar';
import { HomePage } from './containers/homePage';
import { TopSection } from './containers/homePage/topSection';

function App() {
  return (
    <div className="App">
      <TopSection>
        <Navbar />
      </TopSection>
      <HomePage />
    </div>
  );
}

export default App;
