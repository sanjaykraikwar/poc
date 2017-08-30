import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {User} from './user.model';
import {UserService} from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

    constructor(private userService: UserService) {

    }

     ngOnInit() {
        // initial load of data
        this.userService.getUsers()
            .subscribe(users =>
                 {
                    this.users = users
                },
                (error) => console.log(error)
            );
        
    }

}







