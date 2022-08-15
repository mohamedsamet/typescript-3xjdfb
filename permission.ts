export interface Permission {
  code: string;
  children: Permission[];
}
