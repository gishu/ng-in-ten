import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MustBe } from "src/app/validators/must-be-42.validator";

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
    desc: new FormControl("", MustBe.equals42)
  });

  constructor() {}

  get fQty() {
    return this.rform.get("qty");
  }

  get fDesc() {
    return this.rform.get("desc");
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.rform.value);
  }
}
