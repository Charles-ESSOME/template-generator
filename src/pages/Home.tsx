import React from 'react';
import ListTemplates from '../components/ListTemplates';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import TemplateList from '../components/TemplateList';


const Home: React.FC = () => {

    return (
        <div className="container mx-auto pl-12">
            <div className='header-page'>
                <div className='text-3xl mb-4 pl-12'>Listes des Templates</div>
                <div className="display-flex">
                    {/* <SideBar title={'Filtre'} content={'Un test'}/> */}
                    <Link to="/new-template">

                        <Button type="button" label="Ajouter un template" icon="pi pi-plus"
                            tooltip="Nouveau template" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />
                    </Link>
                </div>

            </div>
            {/* <ListTemplates /> */}
            <TemplateList />

        </div>
    );
};

export default Home;
