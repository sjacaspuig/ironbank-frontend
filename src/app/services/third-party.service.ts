import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ThirdParty } from '../models/thirdParty';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyService {

  userURL = environment.apiUrl + '/third-parties';
  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  constructor(
    private httpClient: HttpClient
  ) {}

  public create(thirdParty: ThirdParty): Observable<ThirdParty> {
    return this.httpClient.post<ThirdParty>(this.userURL, thirdParty, this.httpOptions);
  }
}
