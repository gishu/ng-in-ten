import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  getSamplesFromAfar(){
    return ['Sample1', 'Sample2', 'Sample3'];
  }
}
