import logo from './logo.svg';
import './App.css';
import Map from './Map';

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <div style={{height: '100vh', width:'100vw', display: 'flex', flexDirection: 'column'}}>
              <h3 style={{margin: '0', padding: '1rem', textAlign: 'center', backgroundColor: '#000', color: '#fff'}}>
                  Pinpoint the city
              </h3>

              <div style={{flex: '1'}}>
                  <Map/>
              </div>
          </div>

      </div>
    </div>
  );
}






export default App;
