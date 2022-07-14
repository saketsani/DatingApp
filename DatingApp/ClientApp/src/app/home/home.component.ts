import { Component} from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  registerMode = false;
  

  constructor(){}

  ngOnInit(){
    
  }

registerToggle(){
  this.registerMode = !this.registerMode;
}

// getUsers(){
//   this._service.UsersService().subscribe({
//     next:res=>this.users = res,
//     error:error=>console.log(error)

//   })
// }
cancelRegisterMode(event:boolean){
this.registerMode =event;
}
}
