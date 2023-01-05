import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AllMenus, TypePost } from '../interfaces';

@Component({
  selector: 'app-c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.css']
})
export class CHeaderComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav !: MatSidenav
  constructor(private observer: BreakpointObserver, private _router: Router) { }
  panelOpenState = false;
  title = 'bacsiungthu.net';
  types !: Array<TypePost>
  p_owner: string = "bacsiungthu"
  menus_1: Array<AllMenus> = []
  menus_2: Array<AllMenus> = []
  menus_3: Array<AllMenus> = []
  showFiller = false;

  ngOnInit(): void {
  }

  over_side = false

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((r) => {
      if (r.matches) {
        this.over_side = false
      } else {
        this.over_side = true
      }
    })
  }

  gotoUrl(url: string) {
    this._router.navigate([url])
  }
}
