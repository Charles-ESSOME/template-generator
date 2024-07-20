import React, { useRef } from 'react';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';
import { useDispatch } from 'react-redux';
import { addTemplate } from '../redux/templatesSlice';
import TemplatesEmail from '../models/template-email.models.';
const CreateTemplate: React.FC = (props) => {
  const emailEditorRef = useRef<EditorRef>(null);
  const baseData: TemplatesEmail = {
    name: 'Template test',
    created_at: Date.now(),
    updated_at: Date.now(),
    content: '',
    id: '1122',
    category: 'Temlplate email',
    user: {
      lastName: 'John',
      firstName: 'Doe',
      id: '1',
      tel: '6200000000',
    },
  }
  
  const dispatch = useDispatch();

  const handleAddTemplate = (content: string) => {
    const newTemplate: TemplatesEmail = {
      ...baseData,
      content,
    };
    dispatch(addTemplate(newTemplate));
  };


  const exportHtml = () => {
    const unLayer = emailEditorRef.current?.editor;
    unLayer?.exportHtml((data) => {
      const { html } = data;
      handleAddTemplate(html);

      console.log('exportHtml', html);
    });
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)

    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>

      <EmailEditor ref={emailEditorRef} onReady={onReady} />
    </div>
  );
};


export default CreateTemplate;