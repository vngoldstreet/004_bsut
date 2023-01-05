import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sliders } from '../interfaces';

@Component({
  selector: 'app-c-slider',
  templateUrl: './c-slider.component.html',
  styleUrls: ['./c-slider.component.css']
})
export class CSliderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onLoadDatas()
  }

  slider !: Array<Sliders>
  length !: number
  onLoadDatas() {
    let url = environment.apiUrl + environment.apiGetSlider + "?owner=bacsiungthu"
    this.http.get<any>(url).subscribe(data => {
      this.slider = data.data
      this.length = this.slider.length
      // console.log(this.slider)
    },
      err => {
        console.log(err)
      })
  }
}
