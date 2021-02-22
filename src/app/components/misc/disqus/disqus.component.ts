import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disqus',
  template: `<disqus [identifier]="pageId"></disqus>`
})
export class DisqusComponent implements OnInit{
 
  pageId = '/about';
  ngOnInit() {}
}
