import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CDetailComponent } from './c-detail/c-detail.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent,
    data: {
      title: 'Bacsiungthu.net - Tiến sĩ Bác sĩ Nguyễn Quang Thái',
      title_element: 'Bacsiungthu.net - Tiến sĩ Bác sĩ Nguyễn Quang Thái',
      description: 'Chuyên trang chia sẻ kiến thức các bệnh lý, tư vấn trực tuyến Miễn Phí về ung bướu sáng lập bởi Trưởng khoa Ngoại bệnh viện K, Tiến sĩ Bác sĩ Nguyễn Quang Thái',
      keywords: 'bác sĩ nguyễn quang thái, bác sĩ ung thư, bác sĩ ung bướu, bác sĩ ung thư giỏi, bác sĩ ung bướu giỏi, bác sĩ phẫu thuật ung thư, bác sĩ phẫu thuật ung bướu',
      url: 'https://bacsiungthu.net/',
      image: '/assets/android-chrome-192x192.png',
      image_alt: 'Chuyên trang chia sẻ kiến thức các bệnh lý, tư vấn trực tuyến Miễn Phí về ung bướu sáng lập bởi Trưởng khoa Ngoại bệnh viện K, Tiến sĩ Bác sĩ Nguyễn Quang Thái'
    },
  },
  {
    path: 'tin-tuc/:url', component: CDetailComponent,
  },
  {
    path: 'gioi-thieu', component: AboutusComponent,
    data: {
      title: 'Bác sĩ ưng thư – Kênh tư vấn trực tuyến Miễn Phí',
      title_element: 'Bác sĩ ưng thư – Kênh tư vấn trực tuyến Miễn Phí',
      description: 'Kênh thông tin hữu ích và phi lợi nhuận, chia sẻ kiến thức, tư vấn Miễn Phí chuyên khoa ung bướu (ung thư, u) sáng lập bởi bác sĩ Nguyễn Quang Thái bệnh viện K',
      keywords: 'bác sĩ thái ung thư, bác sĩ thái ung bướu, bác sĩ chuyên khoa ung bướu, bác sĩ chuyên khoa ung thư, bác sĩ ung thư nguyễn quang thái, bác sĩ ung bướu nguyễn quang thái, bác sĩ thái bệnh viện k',
      url: 'https://bacsiungthu.net/gioi-thieu',
      image: '/assets/android-chrome-192x192.png',
      image_alt: 'Kênh thông tin hữu ích và phi lợi nhuận, chia sẻ kiến thức, tư vấn Miễn Phí chuyên khoa ung bướu (ung thư, u) sáng lập bởi bác sĩ Nguyễn Quang Thái bệnh viện K'
    },
  },
  {
    path: 'kien-thuc-chia-se', component: KnowledgeComponent,
    data: {
      title: 'Chia sẻ từ các Bác sĩ chuyên khoa ung bướu, ung thư',
      title_element: 'Chia sẻ từ các Bác sĩ chuyên khoa ung bướu, ung thư',
      description: 'Kiến thức chia sẻ về ung thư Tiến sĩ Bác sĩ Nguyễn Quang Thái, Trưởng khoa Ngoại viện K, Chuyên gia phẫu thuật mổ, xạ trị điều trị ung bướu, u, polip giỏi Hà Nội',
      keywords: 'bác sĩ ung thư hà nội, bác sĩ ung bướu hà nội, bác sĩ ung thư giỏi hà nội, bác sĩ ung bướu giỏi hà nội, bác sĩ phẫu thuật ung thư giỏi, chuyên gia xạ trị ung thư, bác sĩ điều trị ung thư, chuyên gia mổ ung thư',
      url: 'https://bacsiungthu.net/gioi-thieu',
      image: '/assets/android-chrome-192x192.png',
      image_alt: 'Kiến thức chia sẻ về ung thư Tiến sĩ Bác sĩ Nguyễn Quang Thái, Trưởng khoa Ngoại viện K, Chuyên gia phẫu thuật mổ, xạ trị điều trị ung bướu, u, polip giỏi Hà Nội'
    },
  },
  {
    path: 'lien-he', component: ContactComponent,
    data: {
      title: 'Liên hệ Bác sĩ điều trị, phẫu thuật ung bướu, ung thư',
      title_element: 'Liên hệ Bác sĩ điều trị, phẫu thuật ung bướu, ung thư',
      description: 'Liên lạc Bacsiungthu.net để nhận được tư vấn Miễn Phí, khám, điều trị, phẫu thuật, xạ trị từ các chuyên gia, bác sĩ ung bướu (ung thư, u) giỏi tại Hà Nội.',
      keywords: 'bác sĩ điều trị ung thư giỏi, bác sĩ điều trị ung bướu giỏi, bác sĩ phẫu thuật ung thư giỏi hà nội, chuyên gia phẫu thuật ung thư, chuyên gia mổ khối u, chuyên gia phẫu thuật khối u, bác sĩ điều trị ung bướu, bác sĩ xạ trị ung thư',
      url: 'https://bacsiungthu.net/gioi-thieu',
      image: '/assets/android-chrome-192x192.png',
      image_alt: 'Liên lạc Bacsiungthu.net để nhận được tư vấn Miễn Phí, khám, điều trị, phẫu thuật, xạ trị từ các chuyên gia, bác sĩ ung bướu (ung thư, u) giỏi tại Hà Nội.'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
