import {Component} from '@angular/core';
import {Auth} from '@aws-amplify/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor() {
    Auth.currentAuthenticatedUser().then(console.log);
  }
}
