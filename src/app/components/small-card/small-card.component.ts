import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card-responsive.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  imgSmallCard:string = "";
  @Input()
  titleSmallCard:string = "";

  ngOnInit(): void {

  }

}
