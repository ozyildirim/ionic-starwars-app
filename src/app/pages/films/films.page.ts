import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  films: Observable<any>;

  constructor(private api: ApiService,private navController: NavController,private router: Router) { }

  ngOnInit() {
    this.films = this.api.getFilms();
  }

  openDetails(film) {
    //Both of these would work
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }

  goToPlanets() {
    this.navController.navigateRoot('/tabs/planets');
  }

}
