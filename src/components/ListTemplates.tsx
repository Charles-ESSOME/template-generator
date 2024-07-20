import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';
import TemplatesEmail from '../models/template-email.models.';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const templatesDatas: TemplatesEmail[] = [
  {
    name: "Welcome Email",
    created_at: 1627842000000,
    updated_at: 1627928400000,
    category: 'templates',
    content: "Hello, welcome to our service!",
    id: "1",
    user: {
      lastName: "Doe",
      firstName: "John",
      tel: "6200000000",
      id: "2",
    }
  },
  {
    name: "Password Reset",
    created_at: 1627928400000,
    updated_at: 1628014800000,
    category: 'templates',
    content: "Click here to reset your password.",
    id: "2",
    user: {
      lastName: "Doe",
      firstName: "John",
      tel: "6200000000",
      id: "2",
    }
  },
  {
    name: "Weekly Newsletter",
    created_at: 1628014800000,
    updated_at: 1628101200000,
    category: 'templates',
    content: "Here is our weekly newsletter.",
    id: "3",
    user: {
      lastName: "Doe",
      firstName: "John",
      tel: "6200000000",
      id: "2",
    }
  },
  {
    name: "Account Confirmation",
    created_at: 1628101200000,
    updated_at: 1628187600000,
    category: 'templates',
    content: "Please confirm your account.",
    id: "4",
    user: {
      lastName: "Doe",
      firstName: "John",
      tel: "6200000000",
      id: "2",
    }
  },
  {
    name: "Promotional Offer",
    created_at: 1628187600000,
    updated_at: 1628274000000,
    category: 'templates',
    content: "Don't miss our special offer!",
    id: "5",
    user: {
      lastName: "Doe",
      firstName: "John",
      tel: "6200000000",
      id: "2",
    }
  }
];


export default function ListTemplates() {
  const [templates, setProducts] = useState<TemplatesEmail[]>(templatesDatas);

  return (
    <div className="card">
      <DataTable value={templates} tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Nom template"></Column>
        <Column field="user.firstName" header="Éditeur"></Column>
        <Column field="created_at" header="Date creation"></Column>
        <Column field="category" header="Category"></Column>
        <Column body={<i className="pi pi-eye" style={{ color: 'slateblue' }}></i>} header="" headerTooltip="Voir l'apercu" />
      </DataTable>
    </div>
  );
}

