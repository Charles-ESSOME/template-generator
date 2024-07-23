import React, { useRef } from 'react';
import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';
import { useDispatch, useSelector } from 'react-redux';
import { addTemplate, selectTemplateById, updateTemplate } from '../redux/templatesSlice';
import TemplatesEmail from '../models/template-email.models.';
import { Button } from 'primereact/button';
import { Link, useParams, useHistory } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useQuery } from '../hooks/useQuery.hooks';

let isLoading: boolean = false;

/**
 * Manage the template creation, editing, and preview.
 *
 * @return {void}
 */
const ManageTemplate: React.FC = (props) => {
  const emailEditorRef = useRef<EditorRef>(null);
  const { id } = useParams<{ id: string }>();
  const query = useQuery();
  const navigate = useHistory();

  const isView = query.get('isView');

  const templates = useSelector((state: RootState) => state?.templateEmail?.templates);
  const template = useSelector((state: RootState) => selectTemplateById(state, id));
  const content = template?.content as any;

  const baseData: TemplatesEmail = {
    name: 'Template test',
    created_at: new Date().toLocaleDateString(),
    updated_at: new Date().toLocaleDateString(),
    content: {},
    id: `${(templates.length ?? 0) + 1}`,
    category: 'Temlplate email',
    user: {
      lastName: 'John',
      firstName: 'Doe',
      id: '1',
      tel: '6200000000',
    },
  }

  const dispatch = useDispatch();

  /**
   * Handle the addition of a new template.
   *
   * @param {object} content - The content of the template.
   * @return {void} No return value.
   */
  const handleAddTemplate = (content: object) => {
    // Create a new template object by merging the base data with the provided content.
    const newTemplate: TemplatesEmail = {
      ...baseData,
      content,
    };

    // Dispatch the addTemplate action to add the new template to the state.
    id? dispatch(updateTemplate(newTemplate)) : dispatch(addTemplate(newTemplate));
  };

/**
   * Function to save the data from the email editor.
   * It checks if the editor exists and saves the design.
   *
   * @return {void} No return value.
   */
  const saveData = (): void => {
    if (!emailEditorRef.current) return;
    const unLayer = emailEditorRef?.current?.editor;
    if (!unLayer) return;
    unLayer.saveDesign((data: object) => {
      if (data) {
        try {
          handleAddTemplate(data);
          navigate.push('/');
        } catch (err) {
          console.error('Error saving template:', err);
        }
      }
    });
  };
  const exportHtml = () => {
    const unLayer = emailEditorRef.current?.editor;
    unLayer?.exportHtml((data) => {
      const { html } = data;
      const blob = new Blob([html], { type: 'text/html' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'exported-file.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const showPreview = () => {
    emailEditorRef.current?.editor?.showPreview({});
  }

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    if (isView) showPreview();

    if (content) {

      const templateJson = { ...content };
      unlayer.loadDesign(templateJson);
    }
  };

  return (
    <div className="create-template">
      <div className="group-btn">
        <Link to='/'>
          <Button severity="secondary" type="button" label="Back" icon="pi pi-angle-double-left"
          />
        </Link>
        <div className="right-block">
          <Button className='btn-save' type="button" label="Show Preview" severity="info"
            icon={isLoading ? 'pi pi-spinner pi-spin' : 'pi pi-eye'}
            onClick={showPreview} />
          <Button className='btn-save' type="button" label="Export Html" severity="info"
            icon={isLoading ? 'pi pi-spinner pi-spin' : 'pi pi-file-export'}
            onClick={exportHtml} />
        </div>
      </div>

      <div className="email-editor">
        {!isView && <Button className='btn-save' size="large" type="button" label="Save Templates"
          icon={isLoading ? 'pi pi-spinner pi-spin' : 'pi pi-save'}
          onClick={saveData} />}
        <EmailEditor ref={emailEditorRef} onReady={onReady} minHeight='88vh' />
      </div>
    </div>
  );
};

export default ManageTemplate;