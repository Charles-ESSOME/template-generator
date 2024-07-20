import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TemplateDetail from './pages/TemplateDetail';
import { PrimeReactProvider } from 'primereact/api';
import CreateTemplate from './pages/CreateTemplate';


const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrimeReactProvider>
                    <Route path="/" exact component={Home} />
                    <Route path="/template/:id" component={TemplateDetail} />
                    <Route path="/new-template" component={CreateTemplate} />
                </PrimeReactProvider>
            </Switch>
        </Router>
    );
};

export default App;
