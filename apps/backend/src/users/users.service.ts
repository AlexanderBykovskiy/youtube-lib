import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

import { typeUser } from './types/types';
import { CreateUserDto } from './dto/users.dto';


@Injectable()
export class UsersService {

  constructor(@InjectModel ('UserModel') private readonly userModel: Model<typeUser>) {}

  async createUser(createUserDto: CreateUserDto): Promise<typeUser> {
    const saltSize = 10;
    const salt = await bcrypt.genSalt(saltSize);
    const passwordHash = await bcrypt.hash(createUserDto.passwordHash, salt);

    const newUser = new this.userModel(_.assignIn(createUserDto, { passwordHash }));
    return await newUser.save();
  }

  async findUser(id: string): Promise<typeUser> {
    return await this.userModel.findById(id).exec();
  }

  async getUsers() {
    return [
      {name: 'name1', age: 25},
      {name: 'name2', age: 28},
      {name: 'name3', age: 25},
    ]
  }
}
