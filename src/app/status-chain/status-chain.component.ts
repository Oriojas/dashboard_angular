import { Component, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status-chain',
  templateUrl: './status-chain.component.html',
  styleUrls: ['./status-chain.component.scss']
})
export class StatusChainComponent {

  resultQuery: any;

  constructor(private http: HttpClient, private ngZone: NgZone) {};

  chainData () {
    const url = 'http://localhost:8090/test_provider/';
    const data = {
      'header': 'accept: application/json'
    }

    this.http.post(url, data).subscribe(
      (response) => {
        console.log("Server response: ", response);
        this.ngZone.run(() => {
          this.resultQuery = response;
        });
      },
      (error) => {
        console.log("Error", error)
      }
    );

  }

}
