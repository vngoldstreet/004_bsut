import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }
  public isCollapsed = true
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((r) => {
      if (r.matches) {
        this.isCollapsed = false
      } else {
        this.isCollapsed = true
      }
    })
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
}
