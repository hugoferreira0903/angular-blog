import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css','./big-card-responsive.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  imgBigCard:String = "";
  @Input()
  titleBigCard:String = "";
  @Input()
  descriptionBigCard:String = "";

  ngOnInit(): void {

  }

}
