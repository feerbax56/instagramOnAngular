import { Component, Input } from '@angular/core'
import { Address } from '../parent.component'

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  name = 'Oleg'

  @Input() surnameProps?: string
  @Input() address?: Address
}
