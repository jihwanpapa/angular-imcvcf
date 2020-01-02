import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items; //제품 목록을 저장할 items 프로퍼티를 선언
  constructor(
    private cartService: CartService //CartService를 컴포넌트에 의존성으로 주입
  ) { 
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

}