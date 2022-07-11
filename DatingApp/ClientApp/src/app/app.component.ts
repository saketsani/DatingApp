import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  users:any;
  title = 'app';
  constructor(private appservice:AppService) { }

  ngOnInit() {
  this.Users();
  }


  Users(){
    this.appservice.UsersService().subscribe({
      next:res=>this.users = res,
      error:error=>console.log(error)

    })
  }
}
