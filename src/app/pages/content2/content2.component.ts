import { Component } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';

@Component({
  selector: 'app-content2',
  imports: [MenuTitleComponent, MenuBarComponent, BigCardComponent],
  templateUrl: './content2.component.html',
  styleUrl: './content2.component.css'
})
export class Content2Component {

}
