// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {Auth} from '@aws-amplify/auth';
//
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.sass']
// })
// export class SignupComponent implements OnInit {
//   public signup: FormGroup;
//   private success: boolean;
//
//   constructor(
//     private fb: FormBuilder
//   ) { }
//
//   ngOnInit(): void {
//     this.signup=this.fb.group({
//       'email':['',Validators.required],
//       'password':['',Validators.required]
//     });
//   }
//
//   onSignup(value: any){
//     const email = value.email, password=value.password;
//     Auth.signUp(email,password).then(_ =>{
//       this.success = true;
//     }).catch(console.log);
//   }
// }
