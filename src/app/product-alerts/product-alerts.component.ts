import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; //@angular/core 에서 Input 심볼을 로드합니다.
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  // selector 는 컴포넌트를 구분하는 id입니다. 그리고 나중에 HTML이 렌더링될 때 이 셀렉터가 사용된 곳에 셀렉터에 해당되는 Angular 컴포넌트가 들어갑니다. 일반적으로 Angular 컴포넌트 셀렉터는 app- 접두사를 사용합니다.
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
  //메타데이터에는 템플릿과 스타일 파일을 지정할 수 있습니다. 이 파일들은 컴포넌트를 생성할 때 자동으로 생성
})
export class ProductAlertsComponent implements OnInit {
  // 컴포넌트를 생성하면 클래스(ProductAlertsComponent)도 함께 생성되는데, 이 클래스는 컴포넌트의 동작을 처리합니다.
  @Input() product; //ProductAlertsComponent 클래스에 product 프로퍼티를 선언하면서 이 프로퍼티에 @Input 데코레이터를 지정 이 데코레이터를 사용하면 product 프로퍼티에 할당되는 값이 부모 컴포넌트(이 예제에서는 제품 목록 컴포넌트)에서 전달된다는 것을 의미
  @Output() notify = new EventEmitter();//컴포넌트 밖으로 이벤트를 보낼 notify 프로퍼티를 정의하고, 이 프로퍼티에 @Output 데코레이터를 지정합니다. @Output 데코레이터를 지정하면 제품할인 컴포넌트에서 이벤트를 보낼 수 있습니다

  constructor() { }

  ngOnInit() {
  }

}