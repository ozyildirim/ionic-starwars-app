import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  constructor(private api:ApiService,private navCtrl:NavController,private router: Router) { }

  people: Observable<any>;

  ngOnInit() {
    this.people = this.api.getPeople();
  }

  openPersonDetail(person){
    let split = person.url.split('/');
    let personId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/people/${personId}`)
  }
}
