import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowSelectionComponent } from './row-selection/row-selection.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RowSelectionComponent],
  exports: [RowSelectionComponent]
})
export class GridModule {}
