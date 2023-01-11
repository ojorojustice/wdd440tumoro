import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    firstName: string = 'Olajide';
    lastName: string = 'Ojo';
    age: number = 42;
}