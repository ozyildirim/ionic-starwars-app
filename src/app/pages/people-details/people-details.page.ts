import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {

  person:any;

  constructor(private activated: ActivatedRoute,private api:ApiService) { }

  ngOnInit() {
    let personId = this.activated.snapshot.paramMap.get('id');
    this.api.getPerson(personId).subscribe(res => {
      this.person = res;
    });
  }
}
