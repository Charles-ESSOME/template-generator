// src/features/templateEmailSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TemplatesEmail from '../models/template-email.models.';
import { RootState } from './store';

interface TemplatesEmailState {
  templates: TemplatesEmail[];
}

const initialState: TemplatesEmailState = {
  templates: [],
};

const templateEmailSlice = createSlice({
  name: 'templateEmail',
  initialState,
  reducers: {
    addTemplate: (state, action: PayloadAction<TemplatesEmail>) => {
      state.templates.push(action.payload);
      localStorage.setItem('templates', JSON.stringify(state?.templates));

    },
    updateTemplate: (state, action: PayloadAction<TemplatesEmail>) => {
      const index = state.templates.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.templates[index] = action.payload;
        localStorage.setItem('templates', JSON.stringify(state?.templates));
      }
    },
    updateTemplates: (state, action: PayloadAction<TemplatesEmail[]>) => {
      state.templates = state.templates.concat(action.payload);
    },
    removeTemplate: (state, action: PayloadAction<string>) => {
      state.templates = state.templates.filter(template => template?.id !== action?.payload);
      localStorage.setItem('templates', JSON.stringify(state?.templates));
    },
  },
});

export const selectTemplateById = (state: RootState, templateId: string) =>
  state.templateEmail.templates.find(template => template?.id === templateId);

export const getTemplatesInStorage = (state: RootState): TemplatesEmail[] | null => {
  const storedTemplates = localStorage.getItem('templates');

  if (storedTemplates) {
    try {
      const parsedTemplates = JSON.parse(storedTemplates) as TemplatesEmail[];
      updateTemplates(parsedTemplates)
    } catch (error) {
      console.error('Error parsing stored templates:', error);
      return null;
    }
  }

  return null;
}

export const { addTemplate, updateTemplate, removeTemplate, updateTemplates } = templateEmailSlice.actions;
export default templateEmailSlice.reducer;