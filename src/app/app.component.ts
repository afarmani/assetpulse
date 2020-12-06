import {Component} from '@angular/core';
import {Auth} from '@aws-amplify/auth';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  envName: string;

  constructor() {
    this.envName = environment.name;
    Auth.currentAuthenticatedUser().then(console.log);
  }
}
