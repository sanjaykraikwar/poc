import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {User} from "./user.model";
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class UserService {

    constructor(private http: Http) {}

    getUsersv1():Observable<User>{
        return this.http.get('http://localhost:8081/get?name=sanjay&password=kumar')
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

    private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
    }

}