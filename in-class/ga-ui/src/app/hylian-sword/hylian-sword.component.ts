import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-hylian-sword',
  templateUrl: './hylian-sword.component.html',
  styleUrls: ['./hylian-sword.component.css']
})
export class HylianSwordComponent implements OnInit {

	proclamation: string;
	username: string;

  constructor(private userService : UserService ) { }

  ngOnInit() {
  	this.username = this.userService.getUsername();
  	this.proclamation = `Behold! ${this.username}'s Hylian Shield!`;
  }

}
