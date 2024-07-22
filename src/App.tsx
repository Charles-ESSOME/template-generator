import React, { lazy, Suspense } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
const ManageTemplate = lazy(() => import('./pages/ManageTemplate'))

const App: React.FC = () => {
    return (
        <PrimeReactProvider>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/template/:id" component={ManageTemplate} />
                        <Route path="/template/edit/:id" component={ManageTemplate} />
                        <Route path="/new-template" component={ManageTemplate} />
                    </Switch>
                </Suspense>
            </Router >
        </PrimeReactProvider>
    );
};

export default App;
