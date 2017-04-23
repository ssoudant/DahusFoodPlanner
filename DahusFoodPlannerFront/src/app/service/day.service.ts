import { Injectable } from '@angular/core';
import { Day } from '../model/day';
import { DayList } from 'app/model/day-list';
import { DAY_LIST } from '../mock-days';

@Injectable()
export class DayService {

  constructor() { }

  getDays() : Promise<DayList> {
    return Promise.resolve(DAY_LIST);
  }
}
