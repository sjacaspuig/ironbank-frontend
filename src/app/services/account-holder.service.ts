import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccountHolder } from '../models/accountHolder';

@Injectable({
  providedIn: 'root'
})
export class AccountHolderService {

  userURL = environment.apiUrl + '/account-holders';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(
    private httpClient: HttpClient
  ) {}

  public create(accountHolder: AccountHolder): Observable<AccountHolder> {
    return this.httpClient.post<AccountHolder>(this.userURL, accountHolder, this.httpOptions);
  }
}
