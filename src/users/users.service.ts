import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { find } from 'lodash';
import { RequiredAtLeastOneProp } from 'src/types/utils';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async fetchAll() {
    const { data } = await this.httpService.axiosRef.get<UserDto[]>(
      'https://jsonplaceholder.typicode.com/users',
    );

    return data;
  }

  async findOne(userPredicate: RequiredAtLeastOneProp<UserDto>) {
    const users = await this.fetchAll();
    return find(users, userPredicate);
  }
}
