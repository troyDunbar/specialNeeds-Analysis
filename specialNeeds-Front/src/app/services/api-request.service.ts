import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  readonly BaseURL = 'http://localhost:5266/SpecialNeedsAnalysis';

  constructor(
    private http: HttpClient,
    private router: Router,
    public data: DataService
  ) {}

  getIndex() {
    return this.http.get(this.BaseURL);
  }

  createUsers(body: Object) {
    this.http
      .post(this.BaseURL + '/CreateUser', body)
      .subscribe((resp) => 
      {
        console.log(resp)
        this.login(this.data.user.email, this.data.createClient.password);
      });
  }

  login(email: string, password: string) {
    this.http
      .post(
        this.BaseURL + '/Login',
        { email, password },
        { responseType: 'text' }
      )
      .subscribe((resp) => {
        this.data.globalSessionToken.sessionToken = resp;
        this.data.addClientBeneficiary.sessionToken = resp;
        this.router.navigate(['/form']);
      });
  }

  updateUser(body: Object) {
    return this.http.post(this.BaseURL + '/UpdateUser/', body);
  }

  addBeneficiary(body: Object) {
    return this.http.post(this.BaseURL + '/AddBeneficiary', body).subscribe(
      (resp) => {
        console.log(resp);
        this.calculateBeneficiary(this.data.globalSessionToken);
      }
    )
  }

  updateBeneficiary(body: Object) {
    return this.http.post(this.BaseURL + '/UpdateBeneficiary', body);
  }

  calculateBeneficiary(sessionToken: Object) {
    this.http.post(
      this.BaseURL + '/CalculateBeneficiaries',
      sessionToken
    ).subscribe(
      (resp) => {
        console.log(this.data.beneficiaryOutput);
        this.data.outputArray = JSON.parse(JSON.stringify(resp));
        this.router.navigate(['/dashboard']);
        debugger
      }
    );
  }

  logout(sessionToken: string) {
    return this.http.post(this.BaseURL + '/Logout', sessionToken);
  }

  deleteUser(sessionToken: string) {
    return this.http.post(this.BaseURL + '/DeleteUser', sessionToken);
  }
}
