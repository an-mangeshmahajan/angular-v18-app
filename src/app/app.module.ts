import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { HomeComponent } from './components/home/home.component';

/**
 * Forms component,InjectableServiceComponent are Standalone component , thats why commented and not imported.
 */

// import { FormComponent } from './components/form/form.component';
// import { InjectableServiceComponent } from './components/injectable-service/injectable-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlFlowComponent,
    HomeComponent,
    // InjectableServiceComponent,
    // FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
