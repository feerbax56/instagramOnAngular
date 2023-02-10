import { Component } from '@angular/core'

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appTitle = 'Instagram'
  text = ''
  changeTitleHandler() {
    this.appTitle = 'FOOOOOOOO~~~~~!~!~~'
  }

  changeTextHandler(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }
}
