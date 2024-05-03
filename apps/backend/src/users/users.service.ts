import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [
      {name: 'name1', age: 25},
      {name: 'name2', age: 28},
      {name: 'name3', age: 25},
    ]
  }
}
