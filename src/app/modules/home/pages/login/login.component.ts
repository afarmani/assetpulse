import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthState, CognitoUserInterface, onAuthUIStateChange} from '@aws-amplify/ui-components';
import {Auth} from '@aws-amplify/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {

  title = 'assetpulse-ui';
  signedIn: boolean = false;
  user: CognitoUserInterface;

  constructor(private ref: ChangeDetectorRef) {
    debugger;
    Auth.currentAuthenticatedUser().then(console.log);
  }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.signedIn = authState === AuthState.SignedIn;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
