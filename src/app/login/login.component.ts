import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import * as io from 'socket.io-client';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    username = '';
    private url = 'http://localhost:3000';
    socket: SocketIOClient.Socket;
    constructor(
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        // reset login status
        this.socket = io.connect(this.url);
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.socket.emit('chat message',  'Client to server, can you hear me server?');
    }

    login() {
        sessionStorage.setItem('user', this.username);
    }
}
