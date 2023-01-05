import { Component, OnInit } from '@angular/core';
import { ExaminationSchedules } from '../interfaces';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-c-medicalappointment',
  templateUrl: './c-medicalappointment.component.html',
  styleUrls: ['./c-medicalappointment.component.css']
})
export class CMedicalappointmentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  data: ExaminationSchedules = {
    name: '',
    phone: '',
    dateofbirth: '',
    address: '',
    content: '',
    status_1: '',
    status_2: ''
  }

  submitform() {
    if (this.data.name != '' && this.data.address != '' && this.data.content != ''){
      if (this.data.phone.length >= 10){
        let body = {
          name: this.data.name,
          phone: this.data.phone,
          dateofbirth: this.data.dateofbirth,
          address: this.data.address,
          content: this.data.content,
          status_1: this.data.status_1?'Tư vấn miễn phí':'',
          status_2: this.data.status_2?'Khám trực tiếp':''
        }
        let url = environment.apiUrl + environment.apiExaminationschedules
        this.http.post<any>(url,body).subscribe(data => {
          window.alert(data.status)
        },
          err => {
            console.log(err)
          })
      }else{
        window.alert("Số điện thoại không đúng!")
      }
    }else{
      window.alert('Vui lòng điền đầy đủ thông tin!')
    }
  }
}
