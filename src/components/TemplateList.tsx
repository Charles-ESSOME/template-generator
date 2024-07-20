import React from 'react';
import TemplatesEmail from '../models/template-email.models.';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const TemplateList: React.FC = () => {
    const templates = useSelector((state: RootState) => state.templateEmail.templates);
    console.log('templates:', templates);

    return (
        <div className="template-list border rounded p-4 mt-4">
            <h2 className="text-xl font-bold mb-4">Your Templates</h2>
            {templates.length === 0 ? (
                <p>Aucun template disponible.</p>
            ) : (
                <ul>
                    {templates.map((template: TemplatesEmail) => (
                        <li key={template.id}>
                            <h3>{template.name}</h3>
                            <p>Catégorie: {template.category}</p>
                            <p>Créé le: {new Date(template.created_at).toLocaleDateString()}</p>
                            <p>Mis à jour le: {new Date(template.updated_at).toLocaleDateString()}</p>
                            <p>Contenu: {template.content.substring(0, 100)}...</p>
                            <p>Créé par: {template.user.firstName} {template.user.lastName}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TemplateList;