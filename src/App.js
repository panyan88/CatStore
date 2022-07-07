import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Header from './containers/Header'
import Sidebar from './containers/Sidebar';
import CatListing from './containers/CatListing';


function App() {
  return (
    <div className='App'>
      <Router>
          <Header/>
          <div className='mt-5 col-12' style={{display:'flex'}}>
            <Sidebar/>
            <Switch>
                <Route path='/' exact component={CatListing} />
                <Route path='404 Not Found!' exact component={CatListing} />
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
