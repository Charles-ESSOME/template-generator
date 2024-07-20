// src/features/templateEmailSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TemplatesEmail from '../models/template-email.models.';

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
    },
    updateTemplate: (state, action: PayloadAction<TemplatesEmail>) => {
      const index = state.templates.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.templates[index] = action.payload;
      }
    },
  },
});

export const { addTemplate, updateTemplate } = templateEmailSlice.actions;
export default templateEmailSlice.reducer;