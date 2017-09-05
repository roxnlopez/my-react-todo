import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {

	proclamation: string;
	username: string;

  constructor(private userService : UserService ) {  }

  ngOnInit() {
  	this.username = this.userService.getUsername();
  	this.proclamation = `Behold! ${this.username}'s Master Sword!`;
  }

}
