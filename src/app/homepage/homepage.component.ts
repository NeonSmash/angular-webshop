import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent {
  appTitle = 'Expert webshop';
  subTitle = 'Vigyen szakértelmet otthonába!!';
}


