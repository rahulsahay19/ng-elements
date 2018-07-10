import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  declarations: [
   GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [GreeterComponent]
})
export class AppModule { 
  constructor(private injector: Injector){

  }

  //In case of angular elements, we need to bootstrap manually
  ngDoBootstrap(){
    var el = createCustomElement(GreeterComponent,{injector:this.injector});

    customElements.define('app-greeter', el);
  }
}
