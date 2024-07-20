import React from 'react';

const TemplateEditor: React.FC = () => {
    return (
        <div className="editor border rounded p-4">
            <h2 className="text-xl font-bold mb-4">Create Your Template</h2>
            <div className="drag-and-drop">
                {/* Your drag and drop logic here */}
            </div>
        </div>
    );
};

export default TemplateEditor;
