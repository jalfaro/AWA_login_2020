import CryptoJS from 'crypto-js';
import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      user: [''],
      password: [''],
    });
  }

  login() {
    let params = this.formGroup.value;
    var passwordBytes = CryptoJS.enc.Utf16LE.parse(params.password);

    var sha1Hash = CryptoJS.SHA1(passwordBytes);

    var sha1HashToBase64 = sha1Hash.toString(CryptoJS.enc.Base64);


    params.password = CryptoJS.enc.Utf16.parse(sha1HashToBase64);

    params.password = CryptoJS.SHA1(params.password).toString();
    console.log(params.password);
    this.auth.login(params).subscribe( data => {
      if (data.status === 1) {
        alert("Exitoso");
        this.auth.guardarSenal();
        this.router.navigateByUrl('/contenido');
      }
      else  alert("Fallido");
    });
  }

  goToRegister() {
    this.router.navigateByUrl("/register");
  }

}
