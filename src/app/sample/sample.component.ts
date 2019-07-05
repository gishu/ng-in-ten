import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  title: String = "Sample title";
  samples = ['Sample1', 'Sample2', 'Sample3']
  constructor() { 
    
  }

  ngOnInit() {
  }

}
