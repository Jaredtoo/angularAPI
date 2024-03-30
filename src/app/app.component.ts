import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people_list : any = []

  constructor(private http:HttpClient) {}
  title = 'Api-Call';

  ngOnInit() {
		// API Call
				this.http
			.get<any>('https://swapi.dev/api/people/', {
			})
			.subscribe(data => {
        console.log(data.results)
				this.people_list.push(data.results)
			});
	}
}
