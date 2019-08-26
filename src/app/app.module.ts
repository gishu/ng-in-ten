import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SummaryPipe } from './summary.pipe';
import { TemplateFormsComponent } from './forms/template-forms/template-forms.component';
import { LikesComponent } from './likes/likes.component';
import { DirectivesComponent } from './directives/directives.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ReactiveFormDynamicComponent } from './forms/reactive-form-dynamic/reactive-form-dynamic.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    SummaryPipe,
    TemplateFormsComponent,
    LikesComponent,
    DirectivesComponent,
    ReactiveFormComponent,
    ReactiveFormDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
