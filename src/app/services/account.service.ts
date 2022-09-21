import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { AccountStatus } from '../types/account-status';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  userURL = environment.apiUrl + '/accounts';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getByIban(iban: string): Observable<Account> {
    return this.httpClient.get<any>(this.userURL + '/' + iban);
  }

  public getAll(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.userURL);
  }

  public deleteAccount(iban: string): Observable<Account> {
    return this.httpClient.delete<Account>(this.userURL + '/' + iban, this.httpOptions);
  }

  public changeStatus(account: { iban: string, status: AccountStatus }): Observable<Account> {
    return this.httpClient.patch<Account>(this.userURL + '/change-status/' + account.iban, account, this.httpOptions);
  }

  public getByUserId(accountHolderId: string): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.userURL + '/user/' + accountHolderId);
  }
}
