import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AuthGuard} from './shared/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /** angular */
    BrowserModule,
    BrowserAnimationsModule,

    /** core & shared */
    CoreModule,
    SharedModule,

    /** app */
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard]
})

export class AppModule {
}
