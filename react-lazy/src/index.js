import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import Artists from './Artists';
const Artists = lazy(() => import('./Artists'))
const Performers = lazy(() => import('./Performers'))

class App extends React.Component {
    render(){
        return(
            <div className="App">
            <Suspense fallback={<h1>Still Loading…</h1>}>
            <Artists />
            <Performers />
            </Suspense>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
