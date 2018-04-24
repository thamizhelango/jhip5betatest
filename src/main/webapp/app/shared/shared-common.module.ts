import { NgModule } from '@angular/core';

import { TetsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TetsSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  providers: [],
  exports: [TetsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TetsSharedCommonModule {}
