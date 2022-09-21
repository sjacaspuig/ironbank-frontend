import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() title: string = 'List';
  @Input() items: { id: string | undefined, title: string, name: string }[] = [];

  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  deleteItem(item: { id: string | undefined, title: string, name: string }) {
    if (confirm("Are you sure?") && item.id) {
      this.onDelete.emit(item.id);
    }
  }

}
