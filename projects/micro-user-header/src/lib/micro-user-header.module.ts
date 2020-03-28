import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MicroUserHeaderComponent } from './micro-user-header.component';

@NgModule({
  declarations: [MicroUserHeaderComponent],
  imports: [
    NgbModule
  ],
  exports: [MicroUserHeaderComponent,NgbModule]
})
export class MicroUserHeaderModule { }
 