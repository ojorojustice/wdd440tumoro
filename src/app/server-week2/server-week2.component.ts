import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-server-week2',
  templateUrl: './server-week2.component.html',
  styleUrls: ['./server-week2.component.css']
})
export class ServerWeek2Component {
  secretPassword: boolean = false;
  myPassWOrd = 'femi';
  passwordss = ['tuna','ademola','tunde'];
  ngOnInit(): void {    
  }

  onSetPassword(){    
    this.passwordss.push(this.myPassWOrd)
    this.secretPassword = this.secretPassword ===false?true:false
  }

}
