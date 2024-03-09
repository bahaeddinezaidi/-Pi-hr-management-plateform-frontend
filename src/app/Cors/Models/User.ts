import { Role } from "./Role";

export interface User {
    _id?: string; 
    name: string; 
    email: string; 
    password?: string; 
    isActive: boolean; 
    role?: Role[]; 
    pinCode?: string; 
  }