import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  //updatedChildComponent: boolean =false;
    model: any = {};
  constructor(private _service:AppService) { }

  ngOnInit(): void {
    // console.log('Users from home component', this.usersFromHomeComponent);
  }

  register() {
    this._service.register(this.model).subscribe(res=>{
      console.log(res);
      this.cancel();
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
