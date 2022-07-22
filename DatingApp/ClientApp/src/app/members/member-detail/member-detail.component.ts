import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { MembersService } from 'src/app/services/members.service';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
member:Member;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private members : MembersService, private route:ActivatedRoute) { }
  //let name = this.route.snapshot.paramMap.get('username');

  ngOnInit(): void {
    this.loadMember();
    //console.log(this.member.username)
    this.galleryOptions = [
      {
        width: '300px',
        height: '300px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ]

    
  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.member.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }
    return imageUrls;
  }
  

  loadMember(){
    this.members.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member =>{
      this.member = member;
      this.galleryImages = this.getImages();
    })
  }
}

