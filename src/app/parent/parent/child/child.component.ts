import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() sendGradeEvent = new EventEmitter<string>()
  inputGrade = ''
  sendGradeHandler() {
    const math = 5
    const physic = 7
    this.sendGradeEvent.emit(this.inputGrade)
  }
}
