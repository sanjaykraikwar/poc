import {Component, OnInit} from '@angular/core';
import {User} from '../home/user.model';
import {UserService} from '../home/user.service';
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'top-header',
  templateUrl: './topheader.component.html'
})
export class TopHeaderComponent implements OnInit {

 

    constructor() {

    }
    
    clicked(event) {
    
     
  }
  
    ngOnInit() {

    }
}
