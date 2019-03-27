import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../../services/Movie';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private readonly backendAPI = environment.BackendAPI;
  
  appTitle: string = 'Movies';
  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
  }

}
