import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-wrapper',
  templateUrl: './image-wrapper.component.html',
  styles: []
})
export class ImageWrapperComponent implements OnInit {

  @Input()style:{[key:string]:string };
  @Input()src:string;
  @Input()desc:string;

  constructor() { }

  ngOnInit() {
  }

}
