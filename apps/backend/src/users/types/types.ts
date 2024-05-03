import {Document} from 'mongoose';

import { UserRole, UserStatus } from '../configs/users.config';


export interface typeUser extends Document {
  readonly login: string
  readonly email: string
  readonly passwordHash: string
  readonly role: UserRole[]
  readonly status: UserStatus;
  readonly avatar: string | null
}
