import { Component, OnInit, Input } from '@angular/core';
import { Day } from 'app/model/day';

@Component({
  selector: 'app-day-entry',
  templateUrl: './day-entry.component.html',
  styleUrls: ['./day-entry.component.css']
})
export class DayEntryComponent implements OnInit {
  @Input() day: Day;

  constructor() { }

  ngOnInit() { }
}
