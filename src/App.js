import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='movies/:id' element={<DetailPage/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
