import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No one server was created...';
  serverName = '[unknown server]';
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2222);
  }

  ngOnInit() {

  }

  onServerCreate() {
    this.serverCreationStatus = 'Server was created successfully...';
  }

  onUpdateServerName(event: Event) {
    console.log(this.serverName);
    // console.log((<HTMLInputElement>event.target).value);
    // console.log(event);
    // this.serverName
  }

  addServer() {
    this.onServerCreate();

    this.servers.push({
      serverID: 10,
      serverStatus: 'offline',
      serverName: this.serverName
    });
  }
}
