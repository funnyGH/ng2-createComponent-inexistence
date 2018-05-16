import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.scss']
})
export class Child11Component implements OnInit {
  @Input()
  public title: any = '创建时默认的标题';

  @Output()
  btnClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public triggerEvent(): void {
    // console.log('我也可以自己触发自己的事件');
    this.btnClick.emit('子组件的点击事件...');
  }
}
