import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './login/login.component';
import { TopHeaderComponent } from './header/TopHeader.component';




import { UserService } from './home/user.service';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { User } from './home/user.model';



const appRoutes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'login', component: LogInComponent },
   { path: '', component: LogInComponent },
    { path: 'dashboard', component: DashBoardComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    DashBoardComponent,
    TopHeaderComponent
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
