import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { AuthModule } from '@common/auth';
import { GridModule } from '@common/grid';

@NgModule({
  imports: [BrowserModule, NxModule.forRoot(), AuthModule, GridModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
