import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  validationErrors :string [] = [];

  constructor(private _service: AppService, private http: HttpClient) { }



  ngOnInit() {
  }

  get404Error() {
    this.http.get(this._service.baseUrl + 'buggy/not-found').subscribe(res=>{
      console.log(res);
    },error =>{
      console.log(error);
    })
  }

  get400Error() {
    this.http.get(this._service.baseUrl + 'buggy/bad-request').subscribe(res=>{
      console.log(res);
    },error =>{
      console.log(error);
    })
  }

  get500Error() {
    this.http.get(this._service.baseUrl + 'buggy/server-error').subscribe(res=>{
      console.log(res);
    },error =>{
      console.log(error);
    })
  }

  get401Error() {
    this.http.get(this._service.baseUrl + 'buggy/auth').subscribe(res=>{
      console.log(res);
    },error =>{
      console.log(error);
    })
  }

  get400ValidationError() {
    this.http.post(this._service.baseUrl + 'account/register',{}).subscribe(res=>{
      console.log(res);
    },error =>{
      console.log(error);
      this.validationErrors = error;
    })
  }

}
