import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  //templateUrl: './warning.component.html',
  template: `<p>There is a warning here!</p>`,
  //styleUrls: ['./warning.component.css']
  styles: [`p{color:red}`],
})
export class WarningComponent {

}
