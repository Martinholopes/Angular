import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})

export class AnotherComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
    this.getAlbum();
    }
    getAlbum(): void {
    
    }
}
