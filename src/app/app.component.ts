import { Component, OnInit } from '@angular/core';

export interface Entity {
    name;
    number;
}

export interface Data {
    id;
    date;
    name;
    entities: Entity[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AssignmentPvtCrcl';
  selectedId: number;
  data: Data[];

  ngOnInit() {
    this.data = this.originalData;
  }

  showDetails(id: number) {
    this.selectedId = this.selectedId === id ? null : id;
  }

  search(text: string) {
    this.data = this.originalData.filter(_ => {
      return _.name.toLowerCase().includes(text.toLowerCase());
    })
  }

  originalData: Data[] = [
    {"id": 0, "date": new Date(2020, 4, 25), "name": "de Finibus Bonorum", "entities": [
      {"name": "Lorem Ipsum is", "number": "Orange"},
      {"name": "unknown printer", "number": "Black"},
      {"name": "survived not only five centuries", "number": "Gray"},
      {"name": "PageMaker", "number": "Black"},
      {"name": "injected humour", "number": "Yellow"}
    ]},
    {"id": 1, "date": new Date(2020, 8, 15), "name": "Lorem Ipsum is", "entities": [
      {"name": "Lorem Ipsum is", "number": "Orange"},
      {"name": "unknown printer", "number": "Black"},
      {"name": "survived not only five centuries", "number": "Gray"}
    ]},
    {"id": 2, "date": new Date(2020, 4, 6), "name": "unknown printer", "entities": []},
    {"id": 3, "date": new Date(2020, 2, 28), "name": "survived not only five centuries", "entities": []},
    {"id": 4, "date": new Date(2020, 7, 4), "name": "electronic typesetting", "entities": [
      {"name": "Lorem Ipsum is", "number": "Orange"},
      {"name": "unknown printer", "number": "Black"},
      {"name": "survived not only five centuries", "number": "Gray"},
      {"name": "PageMaker", "number": "Black"},
      {"name": "injected humour", "number": "Yellow"}
    ]},
    {"id": 5, "date": new Date(2020, 6, 31), "name": "passages", "entities": [
      {"name": "Lorem Ipsum is", "number": "Orange"},
      {"name": "unknown printer", "number": "Black"},
      {"name": "survived not only five centuries", "number": "Gray"},
      {"name": "PageMaker", "number": "Black"},
      {"name": "injected humour", "number": "Yellow"}
    ]},
    {"id": 6, "date": new Date(2020, 7, 9), "name": "PageMaker", "entities": []},
    {"id": 7, "date": new Date(2020, 1, 19), "name": "injected humour", "entities": [
      {"name": "Lorem Ipsum is", "number": "Orange"},
      {"name": "unknown printer", "number": "Black"},
      {"name": "survived not only five centuries", "number": "Gray"},
      {"name": "PageMaker", "number": "Black"},
      {"name": "injected humour", "number": "Yellow"}
    ]},
    {"id": 8, "date": new Date(2020, 9, 7), "name": "Richard McClintock", "entities": []},
    {"id": 9, "date": new Date(2020, 12, 13), "name": "Extremes of Good and Evil", "entities": []}
  ];
}
