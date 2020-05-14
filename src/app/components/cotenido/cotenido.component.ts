import { AuthService } from './../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotenido',
  templateUrl: './cotenido.component.html',
  styleUrls: ['./cotenido.component.scss']
})
export class CotenidoComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    if (!this.auth.isLogin()) {
      this.router.navigateByUrl('/login');
    }
  }

}
