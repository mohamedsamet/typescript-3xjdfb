import { Permission } from './permission';

export interface Module {
  name: string;
  permissions: Permission[];
}
