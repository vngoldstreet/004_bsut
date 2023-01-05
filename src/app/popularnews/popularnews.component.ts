import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {  Previews } from '../interfaces';

@Component({
  selector: 'app-popularnews',
  templateUrl: './popularnews.component.html',
  styleUrls: ['./popularnews.component.css']
})
export class PopularnewsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onLoadDatas()
  }
  type : string = "popular-news"
  length : number = 8
  apiUrl : string = environment.apiUrl+environment.apiGetImage
  onLoadDatas() {
    let url = environment.apiUrl + environment.apiGetListData + "?owner=bacsiungthu&type=" + this.type + "&length="+ this.length
    this.http.get<any>(url).subscribe(data => {
      this.hot_news = data.data
    },
      err => {
        console.log(err)
      })
  }

  hot_news !: Array<Previews>

  onLoadmore(){
    this.length+=8
    this.onLoadDatas()
  }

}
