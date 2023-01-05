import { Component, OnInit } from '@angular/core';
import { Doctors } from '../interfaces';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }
  doctors : Array<Doctors> = [
    {
      name: "Nguyễn Tuân FX",
      job:"Bác sĩ bệnh viện K",
      desc:"Trở thành Website uy tín hàng đầu tại Việt Nam trong việc kết nối các Bác sĩ chuyên khoa Ung bướu vừa giỏi nghề, vừa tận tâm với các bệnh nhân Ung bướu.",
      image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
    },
    {
      name: "Nguyễn Tuân FX",
      job:"Bác sĩ bệnh viện K",
      desc:"Trở thành Website uy tín hàng đầu tại Việt Nam trong việc kết nối các Bác sĩ chuyên khoa Ung bướu vừa giỏi nghề, vừa tận tâm với các bệnh nhân Ung bướu.",
      image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
    },
    {
      name: "Nguyễn Tuân FX",
      job:"Bác sĩ bệnh viện K",
      desc:"Trở thành Website uy tín hàng đầu tại Việt Nam trong việc kết nối các Bác sĩ chuyên khoa Ung bướu vừa giỏi nghề, vừa tận tâm với các bệnh nhân Ung bướu.",
      image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
    },
    {
      name: "Nguyễn Tuân FX",
      job:"Bác sĩ bệnh viện K",
      desc:"Trở thành Website uy tín hàng đầu tại Việt Nam trong việc kết nối các Bác sĩ chuyên khoa Ung bướu vừa giỏi nghề, vừa tận tâm với các bệnh nhân Ung bướu.",
      image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
    },
  ]
  ngOnInit(): void {
  }

}
