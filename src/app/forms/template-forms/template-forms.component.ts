import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-forms",
  templateUrl: "./template-forms.component.html",
  styleUrls: ["./template-forms.component.css"]
})
export class TemplateFormsComponent implements OnInit {

  stockCodes = [ 'BAJFIN', 'NOCIL', 'DMART'];
  constructor() {}

  ngOnInit() {}

  log(x) {
    console.log(x);
  }

  onSubmit(f){
    console.log(f);
  }
}
