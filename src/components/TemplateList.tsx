import EmptyList from './EmptyList';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { RootState } from '../redux/store';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { useDispatch, useSelector } from 'react-redux';
import { removeTemplate } from '../redux/templatesSlice';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

const TemplateList: React.FC = () => {
    const templates = useSelector((state: RootState) => state?.templateEmail?.templates);

    const dispatch = useDispatch();

    const toast = useRef<Toast>(null);
    const accept = (id: string) => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        dispatch(removeTemplate(id));
    }


    const removeCurrentTemplate = (id: string) => {
        confirmDialog({
            message: 'Do you want to delete this templates?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept: () => accept(id),
        });
    };
 
    const actionBodyTemplate = (rowData: any) => {
        return (
            <div className='row-actions'>
                <Link to={'template/' + rowData?.id + '?isView=true'}>
                    <Button tooltip="Preview Template" text icon="pi pi-eye" rounded></Button>
                </Link>
                <Link to={'template/' + rowData?.id}>
                    <Button tooltip="Edit Template" text icon="pi pi-pencil" aria-label="edit" rounded severity="success"></Button>
                </Link>
                <>
                    <Toast ref={toast} />
                    <ConfirmDialog />
                    <div className="card flex flex-wrap gap-2 justify-content-center">
                        <Button onClick={() => removeCurrentTemplate(rowData.id)} icon="pi pi-trash" rounded text severity="danger" aria-label="Cancel"
                            tooltip="Remove Template" />
                    </div>
                </>
            </div>
        );
    };

    return (
        <div className="card">
            <Toast ref={toast} />
            {templates.length ? <DataTable value={templates} tableStyle={{ minWidth: '50rem' }} lazy={true} emptyMessage>
                <Column field="name" header="Template name"></Column>
                <Column field="user.firstName" header="Éditeur"></Column>
                <Column field="created_at" header="crated date"></Column>
                <Column field="category" header="Category"></Column>

                <Column body={actionBodyTemplate} header="Actions" />
            </DataTable>
                : <EmptyList emptyMessage="No model" showImg={true} />}
        </div>
    );
};

export default TemplateList;
