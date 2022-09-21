import { Component, OnInit } from '@angular/core';
import { AccountHolder } from 'src/app/models/account-holder';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { mergeMap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {

  accountHolder$!: Observable<AccountHolder>;
  spinnerUser: boolean = false;
  spinnerTransaction: boolean = false;
  transactions$!: Observable<Transaction[]>;

  constructor(
    private accountHolderService: AccountHolderService,
    private authService: AuthService,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.getAccountHolder();
    this.getTransactionsByUserId();
  }

  getAccountHolder() {
    this.spinnerUser = true;
    this.accountHolder$ = this.authService.user$.pipe(
      mergeMap((user: User) => {
        return this.accountHolderService.getById(user.id)
      }),
      tap(() => this.spinnerUser = false)
    );
  }

  getTransactionsByUserId() {
    this.spinnerTransaction = true;
    this.transactions$ = this.authService.user$.pipe(
      mergeMap((user: User) => {
        return this.transactionService.findByAccountHolderId(user.id)
      }),
      tap(() => this.spinnerTransaction = false)
    );
  }

}
