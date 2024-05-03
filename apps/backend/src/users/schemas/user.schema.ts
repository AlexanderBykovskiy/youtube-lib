import * as mongoose from 'mongoose';
import { UserRole, UserStatus } from '../configs/users.config';

export const UserSchema = new mongoose.Schema(
  {
    login: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true },
    role: {type: [String], required: true, default: UserRole.USER, enum: Object.values(UserRole) },
    status: {type: String, required: true, default: UserStatus.ACTIVE, enum: Object.values(UserStatus) },
    avatar: {type: String, default: null },
  },
  {timestamps: true }
);

UserSchema.index({ email: 1 }, { unique: true });
