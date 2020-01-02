import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product; //product프로퍼티선언
  constructor(
    private route: ActivatedRoute, //컴포넌트 클래스의 생성자에 ActivatedRoute를 의존성으로 주입
    //ActivatedRoute는 라우터가 컴포넌트를 로드할때 사용한 라우팅 규칭이다.
    private cartService: CartService
  ) { }

  ngOnInit() {
    //라우팅변수를 구독한 후 옵저버에서 productId를 참조한다.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}