import { User } from "./user.models";

export default interface TemplatesEmail {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  content: object | string;
  category: string;
  user: User;
}

export interface TemplatesState {
  templates: TemplatesEmail[];
}