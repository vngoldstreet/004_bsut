import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Contents, Previews } from '../interfaces';

@Component({
  selector: 'app-c-detail',
  templateUrl: './c-detail.component.html',
  styleUrls: ['./c-detail.component.css']
})
export class CDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private titleService: Title, private metaTag: Meta) { }

  ngOnInit(): void {
    this.getDetails()
    this.onLoadDatas()
  }

  data: Contents = {
    title:"",
    descrip:"",
    image:"",
    url:"",
    content:"",
    created_at:"",
    type:"",
    viewer:"",
    keyword:""
  }

  apiUrl: string = environment.apiUrl + environment.apiGetImage
  loading: boolean = false
  getDetails(): any {
    let urlres = this.route.snapshot.paramMap.get('url')
    var re = /tin-tuc/gi;
    var str = String(urlres)
    str.replace(re, ''); 
    if (urlres) {
      let urlQuerry = environment.apiUrl + "/" + urlres
      this.http.get<any>(urlQuerry).subscribe(data => {
        this.loading = true
        this.data = data.data
        this.titleService.setTitle(this.data.title + ' - Bacsiungthu.net');
        this.metaTag.updateTag({ name: 'title', content: 'Bacsiungthu.net - ' + this.data.title });
        this.metaTag.updateTag({ name: 'description', content: this.data.descrip });
        this.metaTag.updateTag({ name: 'keywords', content: this.data.keyword });
        this.metaTag.updateTag({ property: 'og:description', content: this.data.descrip });
        this.metaTag.updateTag({ property: 'og:title', content: 'Bacsiungthu.net - ' + this.data.title });
        this.metaTag.updateTag({ property: 'og:image', content: this.apiUrl + this.data.url });
        this.metaTag.updateTag({ property: 'og:image:alt', content: this.data.title });
        this.metaTag.updateTag({ property: 'og:url', content: 'https://bacsiungthu.net' + this.router.url });
      },
        err => {
          console.log(err)
        })
    }
  }

  type : string = "popular-news"
  length : number = 8
  data_mores !: Array<Previews>

  onLoadDatas() {
    let url = environment.apiUrl + environment.apiGetListData + "?owner=bacsiungthu&type=" + this.type + "&length="+ this.length
    this.http.get<any>(url).subscribe(data => {
      this.data_mores = data.data
    },
      err => {
        console.log(err)
      })
  }
  onLoadmore(){
    this.length+=8
    this.onLoadDatas()
  }
}
