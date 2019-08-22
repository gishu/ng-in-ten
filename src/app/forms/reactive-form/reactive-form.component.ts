import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  stockCodes = ["BAJFIN", "NOCIL", "DMART"];

  rform = new FormGroup({
    stock: new FormControl(),
    qty: new FormControl("", Validators.required),
    desc: new FormControl()
  });

  constructor() {}

  get fQty() {
    return this.rform.get("qty");
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.rform.value);
  }
}
