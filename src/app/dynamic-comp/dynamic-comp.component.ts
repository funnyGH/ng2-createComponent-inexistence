import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  AfterContentInit
} from '@angular/core';
import { Child11Component } from './child11/child11.component';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss']
})
export class DynamicCompComponent implements OnInit {
  private num: any = 1;
  private otitle: any = '第1个子组件';
  private compoArray: any = [];  // 将创建的子组件存储起来

  // 这里引用模板里面定义的dyncomp容器标签
  @ViewChild('dyncomp', {read: ViewContainerRef})
  dyncomp: ViewContainerRef;

  compo: ComponentRef<Child11Component>;
  // comp2: ComponentRef<Child11Component>;

  constructor(private cfr: ComponentFactoryResolver) {

  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('动态创建组件的实例...');
    this.num ++;
    const childComp = this.cfr.resolveComponentFactory(Child11Component);
    this.compo = this.dyncomp.createComponent(childComp);
    this.compo.instance.title = this.otitle;
    this.compoArray.push(this.compo);
    // this.comp2 = this.dyncomp.createComponent(childComp, 0);

    /**
     * createComponent方法可以调用很多次，会动态创建出多个组件实例
     * 方法有第二个参数，表示组件渲染的顺序
     */
    this.compo.instance.btnClick.subscribe((param) => {
      console.log('=>' + param);
    });
  }
  // 清空所有子组件
  public destoryChild(): void {
    this.num = 1;
    this.compoArray.forEach(ele => {
      ele.destroy();
    });
  }

  // 可以创建多个组件实例出来
  // 添加一个子组件
  public createChild(): void {
    this.otitle = '第' + this.num + '个子组件';
    this.ngAfterContentInit();
  }

  // 需要介绍的内容
  detailTip () {
    const ostring =
    ` 1 场景是动态创建组件并添加到自身组件——子父组件
      2 修改title？要遵循先构建再改标题！
      3 销毁子组件？
      4 创建多个时如何实现正序倒序？
      5 适合添加场景功能：比如动态创建todoList,并可以单选甚至多选以便于关闭或改变状态，可以通过params.id传递
      6 还可以用fn替换生命周期勾子方法达到目的，二者区别目前还未弄明白！-.-
      7 动态创建的组件事件放在哪里合适？既可以在创建的当前组件调用，也可以在父组件调用。
      （看情况，如果事件触发需要父组件的数据就在父组件调用）
    `;
    window.confirm(ostring);
  }
}
