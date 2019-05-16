import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jsonfile from './../assets/playas.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'playas-angular';
  private list: any[] = [];
  // private jsonUrl = 'https://www.dropbox.com/s/c0up0ug1x4gxv87/playas.json?dl=1'
  private jsonUrl = './../assets/playas.json';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {


    this.httpClient.get(this.jsonUrl).subscribe((response: any) => {

      let keys = Object.keys(response);
      keys.forEach(element => {
        const obj = response[element];
        this.list.push(obj);
      });
      // this.list = this.list.slice(0, 5);
      console.log(this.list);

      // this.httpClient.put('https://playas-espana.firebaseio.com/playas.json', this.list).subscribe(result => {
      //   console.log(result);
      // })

    }, err => {
      console.log(err);
    });




  }
}
