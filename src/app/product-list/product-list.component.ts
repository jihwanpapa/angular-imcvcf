import { Component } from '@angular/core';

import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  //Notify Me 버튼이 클릭되었을 때 동작할 로직을 작성합니다. 이 로직은 제품할인 알림 컴포넌트가 아니라 부모 컴포넌트인 제품 목록 컴포넌트에 작성
  onNotify() {
    window.alert('you will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/