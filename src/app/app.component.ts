import { Component } from '@angular/core';

export interface Data {
    date;
    name;
    number;
    entities;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AssignmentPvtCrcl';

  data: Data[] = [
    {"date": new Date(2020, 8, 15), "name": 2012, "number": "Orange", "entities": "dsad231ff"},
    {"date": new Date(2020, 4, 6), "name": 2011, "number": "Black", "entities": "gwregre345"},
    {"date": new Date(2020, 2, 28), "name": 2005, "number": "Gray", "entities": "h354htr"},
    {"date": new Date(2020, 7, 4), "name": 2003, "number": "Blue", "entities": "j6w54qgh"},
    {"date": new Date(2020, 6, 31), "name": 1995, "number": "Orange", "entities": "hrtwy34"},
    {"date": new Date(2020, 7, 9), "name": 2005, "number": "Black", "entities": "jejtyj"},
    {"date": new Date(2020, 1, 19), "name": 2012, "number": "Yellow", "entities": "g43gr"},
    {"date": new Date(2020, 9, 7), "name": 2013, "number": "Orange", "entities": "greg34"},
    {"date": new Date(2020, 12, 13), "name": 2000, "number": "Black", "entities": "h54hw5"},
    {"date": new Date(2020, 4, 25), "name": 2013, "number": "Red", "entities": "245t2s"}
  ];
}
