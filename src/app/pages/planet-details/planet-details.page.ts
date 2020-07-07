import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
  styleUrls: ['./planet-details.page.scss'],
})
export class PlanetDetailsPage implements OnInit {

  constructor(private api:ApiService,private router:Router,private activatedRoute: ActivatedRoute) { }

  planet;

  ngOnInit() {
    let planetId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getPlanet(planetId).subscribe(res => {
      this.planet = res;
    })
  }
}
