import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  welcomeMessage = 'Hi,\n Thank you for checking us out!\nYou will find some of our items below.\n Find us on Etsy or Facebook Marketplace!'

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.document.getElementById('etsy-page').after(this.document.getElementById('etsy'))
  }


}
