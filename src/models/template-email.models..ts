interface User {
  lastName: string;
  firstName: string;
  id: string;
  tel: string;
}

export default interface TemplatesEmail {
  name: string;
  created_at: number;
  updated_at: number;
  content: string;
  id: string;
  category: string;
  user: User;
}

export interface TemplatesState {
  templates: TemplatesEmail[];
}