import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-component.html',
  styleUrls: ['./app-component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  percentageValue: number = 50; // Adjust as needed
  additionalValue: string = 'Example Value'; // Adjust as needed

  ngOnInit() {}
}
