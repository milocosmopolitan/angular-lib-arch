import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import {AuthModule} from '@common/auth';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), AuthModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
