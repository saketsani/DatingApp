import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private _service:AppService,private toastr:ToastrService) { }

  ngOnInit(): void {
    // console.log('Users from home component', this.usersFromHomeComponent);
  }

  register() {
    this._service.register(this.model).subscribe(res=>{
      console.log(res);
      this.toastr.success("Successfully Registered");
      this.cancel();
    },error=>{
      console.log(error);
      this.toastr.error(error.error);
    });    }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
