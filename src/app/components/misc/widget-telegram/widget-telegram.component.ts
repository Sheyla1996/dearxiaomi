import { Component, OnInit, ViewChild, ElementRef, Input, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-widget-telegram',
  templateUrl: './widget-telegram.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./widget-telegram.component.scss']
})
export class WidgetTelegramComponent implements OnInit {

  darkMode: boolean;
  @Input() id: string;
  @ViewChild('script', {static: true}) script: ElementRef;

  constructor() { }

  ngOnInit(): void {}

  convertToScript() {
    const element = this.script.nativeElement;
   
    const script = document.createElement('script');
    script.src = 'https://comments.app/js/widget.js?3';
      script.setAttribute('data-comments-app-website', 'NWOyVdiG');
      script.setAttribute('data-limit', '5');
      element.parentElement.replaceChild(script, element);
    
    
  }

  ngAfterViewInit() {
    this.convertToScript();
  }

}
