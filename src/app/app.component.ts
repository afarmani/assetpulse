import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test'

}

//  envName: string;
//
// constructor() {
//   this.envName = environment.name;
//   Auth.currentAuthenticatedUser().then(console.log);
// }
//
// ngOnInit(): void {
//   I18n.putVocabulariesForLanguage('en-US', {
//     [Translations.SIGN_IN_HEADER_TEXT]: 'Login [en]',
//     [Translations.USERNAME_LABEL]: 'Email [en]',
//     [Translations.USERNAME_PLACEHOLDER]: 'Enter your email [en]',
//     [Translations.PASSWORD_LABEL]: 'Password [en]',
//     [Translations.PASSWORD_PLACEHOLDER]: 'Enter your password [en]',
//   })
