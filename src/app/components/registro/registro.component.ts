import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
        nombre : ['', Validators.required],
        email: ['', [Validators.required, Validators.minLength(10), Validators.email]],
        password: ['', Validators.required]
    });
  }

  register() {
    let params = this.formGroup.value;
    var passwordBytes = CryptoJS.enc.Utf16LE.parse(params.password);

    var sha1Hash = CryptoJS.SHA1(passwordBytes);

    var sha1HashToBase64 = sha1Hash.toString(CryptoJS.enc.Base64);


    params.password = CryptoJS.enc.Utf16.parse(sha1HashToBase64);

    params.password = CryptoJS.SHA1(params.password).toString();
    console.log(params.password);
    if (this.formGroup.valid) {
      this.auth.register(params).subscribe( data => {
        if (data.status = 1) this.router.navigateByUrl('/login');
        else  alert("Error al ejecutarlo");
      });
    } else {
      alert("Debe de ingresar correctamente lo datos");
    }
  }
}
