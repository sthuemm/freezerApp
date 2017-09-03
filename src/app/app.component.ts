import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { credentials } from '../credentials/credentials'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  data:any = {};

  constructor(private _http: Http) {
    this.getWelcome();
  }

  private getHelloWorldData(){
    return this._http.get(credentials.host+'/product/get')
      .map((res: Response) => res)
  }

  getWelcome() {
    this.getHelloWorldData().subscribe(data => {
      console.log(data.text());
      this.data = data.text();
    })
  }


  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
