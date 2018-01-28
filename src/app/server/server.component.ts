import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverID = 1;
  serverStatus = '';

  constructor() {
    this.serverStatus = (Math.random() * Math.floor(2)) > 0.5 ? 'online' : 'offline';
    this.serverID++;
  }

  ngOnInit() {

  }

  getServerStatus() {
    return this.serverStatus;
  }
}
