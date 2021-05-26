import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions!: any;

  constructor(private router: Router,
              private adminService: AdminService) { }

  ngOnInit(): void {
    this.getSubscriptions();
  }

  getSubscriptions() {
    this.adminService.getSuscriptions()
      .subscribe((res) => {
        console.log(res);
        this.transactions = res;
      }, (err) => {
        console.log("Error: ", err)
      })
  }

}
