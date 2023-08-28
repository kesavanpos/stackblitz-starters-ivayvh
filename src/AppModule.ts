import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../src/app-component/app-component.component'; // Adjust the path as needed
import { CircularProgressComponent } from '../src/circular-progress/circular-progress.component'; // Adjust the path as needed

@NgModule({
  declarations: [
    AppComponent,
    CircularProgressComponent,
    // Other components, directives, and pipes
  ],
  imports: [
    BrowserModule,
    // Other modules
  ],
  bootstrap: [AppComponent], // This specifies the main component
})
export class AppModule {}
