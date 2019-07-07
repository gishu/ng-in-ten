import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  title: String = "Sample title";
  samples;
  constructor(private _sampleService:SampleService) { 
    
  }

  ngOnInit() {
    // load from a rest call for example
    this.samples = this._sampleService.getSamplesFromAfar();
  }

  handleSave($event){
    console.log($event);
  }

  onTextEnter($event){
    console.log('Text value =' + $event.target.value);
  }
  onTemplateTextEnter(value){
    console.log('Template var value =' + value);
  }
}
