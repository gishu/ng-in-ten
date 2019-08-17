import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SummaryPipe } from './summary.pipe';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SummaryPipe,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
