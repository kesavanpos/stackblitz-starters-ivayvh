import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CircularProgressComponent } from '../../src/circular-progress'; // Adjust the path as needed

@NgModule({
  declarations: [
    CircularProgressComponent
    // Other components, directives, and pipes
  ],
  imports: [
    BrowserModule,
    // Other modules
  ],
  bootstrap: [CircularProgressComponent] // This specifies the main component
})
export class AppModule { }