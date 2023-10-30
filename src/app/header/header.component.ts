import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() onChangePage = new EventEmitter()

  changePage(page: string) {
    this.onChangePage.emit(page)
  }
}
