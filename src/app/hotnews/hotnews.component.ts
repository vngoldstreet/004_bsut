import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Previews } from '../interfaces';

@Component({
  selector: 'app-hotnews',
  templateUrl: './hotnews.component.html',
  styleUrls: ['./hotnews.component.css']
})
export class HotnewsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  hot_news : Array<Previews> = [
    {
      title: "Khi chưa bị Ung thư bạn cần phải biết 3 điều sau để phòng tránh",
      descrip:"Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.",
      thumb: "",
      url:"",
      created_at:"",
      viewer:8989,
    },
    {
      title: "Hiểu rõ để hạn chế các tác nhân nguy hiểm gây ra bệnh Ung thư ",
      descrip:"Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.",
      thumb: "",
      url:"",
      created_at:"",
      viewer:8989,
    },
    {
      title: "Top 3 ung thư hay bị ở Nam giới và Nữ giới",
      descrip:"Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum.",
      thumb: "",
      url:"",
      created_at:"",
      viewer:8989,
    },
  ]

  
  ngOnInit(): void {
    // this.onLoadDatas()
  }



}
