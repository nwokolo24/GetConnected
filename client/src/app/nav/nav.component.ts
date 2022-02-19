import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accuntServices: AccountService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login() {
    this.accuntServices.login(this.model).subscribe(response => {
      this.router.navigateByUrl("/members");
    })
  }

  logout() {
    this.accuntServices.logout();
    this.router.navigateByUrl("/");
  }

}
