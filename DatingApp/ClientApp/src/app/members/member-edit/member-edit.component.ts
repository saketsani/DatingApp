import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  member: Member
  user: User

  constructor(private accountservice: AppService, private memberservice: MembersService, private toastr: ToastrService) {
    this.accountservice.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.memberservice.getMember(this.user.username).subscribe(member => {
      this.member = member;
    })
  }

  updateMember() {
    this.memberservice.updateMember(this.member).subscribe(() => {
      this.toastr.success("profile updated successfully");
      this.editForm.reset(this.member);
    })
  }
}
