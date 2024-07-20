import React from 'react';
import Home from './pages/Home';
import { PrimeReactProvider } from 'primereact/api';
import ManageTemplate from './pages/ManageTemplate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrimeReactProvider>
                    <Route path="/" exact component={Home} />
                    <Route path="/template/:id" component={ManageTemplate} />
                    <Route path="/template/edit/:id" component={ManageTemplate} />
                    <Route path="/new-template" component={ManageTemplate} />
                </PrimeReactProvider>
            </Switch>
        </Router>
    );
};

export default App;
