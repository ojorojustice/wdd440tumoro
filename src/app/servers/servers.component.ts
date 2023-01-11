import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template:`<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer: boolean = false;
  serverStatus: string = 'Server not created yet';
  serverName: any ='Jide';
  userName: string = '';
  isUsernameEmpty: boolean = this.userName.length === 0? true:false;
  constructor(){

    setTimeout(()=>{
      this.allowNewServer = true
    },5000);
  };

  ngOnInit(): void {    
  }

  onServerCreated(){
    this.serverStatus = 'Server Now Created';
  }

  logValueOfInput(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  declareUsernameEmpty(){
   this.userName = ""
  }
}
