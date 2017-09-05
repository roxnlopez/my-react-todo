import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUsername(): string {
  	return 'Link';
  }

}
