import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {User} from "./user.model";
import {EventEmitter, Injectable,Inject,forwardRef} from '@angular/core';

@Injectable()
export class UserService {

   
    constructor(private http: Http  ) {}

    authUser():Observable<User>{
        return this.http.get('http://localhost:8081/authUser?userName=ajay&password=kumar')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }
    
    public getUsers (): Observable<User[]> {
    return this.http.get('http://localhost:8081/all')
                    .map(res => res.json());

    }
    
    
    saveUser():Observable<User>{
        return this.http.get('http://localhost:8081/saveUser?userName=tttt&password=rk')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }

 
}