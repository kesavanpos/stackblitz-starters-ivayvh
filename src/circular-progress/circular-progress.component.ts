import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss'],
})
export class CircularProgressComponent {
  constructor() {}

  @Input() inputPercentage!: number; // Marked as optional with '!'
  @Input() additionalValue!: string; // Marked as optional with '!'
}
