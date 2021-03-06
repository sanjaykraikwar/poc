import {Component, OnInit} from '@angular/core';
import {User} from '../home/user.model';
import {UserService} from '../home/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LogInComponent implements OnInit {

   user: User;

    constructor(private userService: UserService) {

    }
    
    clicked(event) {
    
     this.userService.authUser()
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
