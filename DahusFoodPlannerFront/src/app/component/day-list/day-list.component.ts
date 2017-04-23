import { Component, OnInit } from '@angular/core';
import { DayService } from '../../service/day.service';
import { DayList } from 'app/model/day-list';
import { Day } from 'app/model/day';

@Component({
  selector: 'app-day-list',
  templateUrl: './day-list.component.html',
  styleUrls: ['./day-list.component.css']
})
export class DayListComponent implements OnInit {
  dayList: DayList = new DayList();

  constructor(private dayService: DayService) { }

  ngOnInit() {
    this.getDays();
  }

  getDays(): void {
    this.dayService.getDays().then(days => this.dayList = days);
  }

}
