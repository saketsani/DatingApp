import { Component, OnInit } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members : Member[];

  constructor(private _service: MembersService) { }

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers(){
    this._service.getMembers().subscribe(res=>{
      this.members = res;
      console.log(this.members);
    });
  }
}
