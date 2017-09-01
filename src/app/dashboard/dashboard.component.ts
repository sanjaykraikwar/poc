import {Component, OnInit} from '@angular/core';
import {User} from '../home/user.model';
import {UserService} from '../home/user.service';
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashBoardComponent implements OnInit {

   user: User;

    constructor(private userService: UserService) {

    }
    
    clicked(event) {
    
     this.userService.saveUser()
            .subscribe(user =>
                 {
                    this.user = user
                },
                (error) => console.log(error)
            );
        
  }
  
    ngOnInit() {

    }
}
