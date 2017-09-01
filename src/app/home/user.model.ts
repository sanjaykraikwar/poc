import { Injectable } from '@angular/core';


export class User {
    public userId: number;
    public userName: string;
     public password: string;
    public enabled: boolean;


    constructor(userName: string, password: string, enabled: boolean) {
        this.userName = userName;
        this.password = password;
        this.enabled = enabled;
    }

}


