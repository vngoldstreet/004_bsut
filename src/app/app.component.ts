import { Component ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AllMenus, TypePost } from './interfaces';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout'
import {MatAccordion} from '@angular/material/expansion';
import { MatSidenav } from '@angular/material/sidenav';
import { MetaService } from './metaset';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  public isCollapsed = true
  title = 'Tools';

  gotoUrl(url: string) {
    this._router.navigate([url])
  }

  @ViewChild(MatSidenav) sidenav !: MatSidenav
  constructor(private http: HttpClient, private _router: Router,private observer: BreakpointObserver,private meta : MetaService) { }
  ngOnInit(): void {
    this.meta.updateTitle();
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((r) => {
      if (r.matches) {
        this.isCollapsed = false
        this.sidenav.mode = 'over'
        this.sidenav.close()
      } else {
        this.isCollapsed = true
        this.sidenav.mode = 'over'
        this.sidenav.close()
      }
    })
  }

}
