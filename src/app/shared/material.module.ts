import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  exports: [MatExpansionModule, MatSelectModule, MatFormFieldModule]
})
export class MaterialModule {}
