import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeMenuComponent } from "./HomePages/home-menu/home-menu.component";
import { HomeHeaderComponent } from "./HomePages/home-header/home-header.component";

@Component({
  selector: 'app-home-pages',
  standalone: true,
  imports: [RouterOutlet, HomeMenuComponent, HomeHeaderComponent],
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.scss'
})
export class HomePagesComponent {

}
