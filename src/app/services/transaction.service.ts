import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  userURL = environment.apiUrl + '/transactions';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(
    private httpClient: HttpClient
  ) {}

  public create(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.userURL, transaction, this.httpOptions);
  }

  public getAll(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.userURL).pipe(
      map((accounts: Transaction[]) => {
        return accounts.sort((a: Transaction, b: Transaction) => {
          return a.id && b.id ? b.id - a.id : 0;
        });
      })
    );
  }

  public findByIban(iban: string): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.userURL + '/iban/' + iban).pipe(
      map((accounts: Transaction[]) => {
        return accounts.sort((a: Transaction, b: Transaction) => {
          return a.id && b.id ? b.id - a.id : 0;
        });
      })
    );
  }

  public findByAccountHolderId(id: string): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.userURL + '/account-holder/' + id).pipe(
      map((accounts: Transaction[]) => {
        return accounts.sort((a: Transaction, b: Transaction) => {
          return a.id && b.id ? b.id - a.id : 0;
        });
      })
    );
  }
}
