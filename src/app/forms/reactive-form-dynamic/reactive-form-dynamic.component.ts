import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, FormGroup } from "@angular/forms";

@Component({
  selector: "app-reactive-form-dynamic",
  templateUrl: "./reactive-form-dynamic.component.html",
  styleUrls: ["./reactive-form-dynamic.component.css"]
})
export class ReactiveFormDynamicComponent implements OnInit {
  dynamicForm : FormGroup;
  addresses : FormArray;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      addresses: this.fb.array([])
    });
    this.addresses = this.dynamicForm.get('addresses') as FormArray;
    this.addresses.push( this.fb.group({ line1: [], line2: [] }) );

  }

  addAnotherAddress(){
    this.addresses.push( this.fb.group({ line1: [], line2: [] }) );
  }
}
