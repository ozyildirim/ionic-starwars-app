import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { EmailComposer} from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  film:any;

  constructor(private emailComposer: EmailComposer,private api:ApiService,private activatedRoute: ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getFilm(id).subscribe(res => {
      this.film = res;
    });
  }

  shareFilm() {
    let email= {
      to: 'kutay9622@gmail.com',
      subject: 'I love this movie: ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '|"',
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
