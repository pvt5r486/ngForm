import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {
  // 能力陣列
  powers = ['噴火', '降雷', '結冰', '呼風'];
  // 預設的 model 物件
  model = new Hero(1, '火焰鳥', this.powers[0], '黑火焰鳥');
  // 阻止提交
  submitted = false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
  }
  newHero() {
    this.model = new Hero(2, '', '');
  }
}
