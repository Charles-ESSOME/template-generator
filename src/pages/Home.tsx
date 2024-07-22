import React from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import TemplateList from '../components/TemplateList';


/**
 * Renders the Home component displaying a list of templates.
 *
 * @return {ReactElement} The rendered Home component.
 */
const Home: React.FC = () => {

    return (
        <div className="container mx-auto pl-12">
            <div className='header-page'>
                <div className='title-page'>List of templates</div>
                <div className="actions-header">
                    <Link to="/new-template">
                    <Button type="button" label="New template" icon="pi pi-plus"
                            tooltip="New Template" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />
                    </Link>
                </div>

            </div>
            <TemplateList />

        </div>
    );
};

export default Home;
