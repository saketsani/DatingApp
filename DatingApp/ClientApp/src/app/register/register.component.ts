import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  
  model: any = {};
  registerForm: FormGroup;
  constructor(private _service: AppService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initilizeForm();
   
  }

  initilizeForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()

    })

  }
  register() {
    console.log(this.registerForm.value);
    // this._service.register(this.model).subscribe(res => {
    //   console.log(res);
    //   this.toastr.success("Successfully Registered");
    //   this.cancel();
    // }, error => {
    //   console.log(error);
    //   this.toastr.error(error.error);
    // });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
