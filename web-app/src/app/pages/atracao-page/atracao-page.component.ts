import { Component } from '@angular/core';

@Component({
  selector: 'app-atracao-page',
  templateUrl: './atracao-page.component.html',
  styleUrls: ['./atracao-page.component.scss']
})
export class AtracaoPageComponent {
  isDrawbarVisible: boolean = false;

  openDrawbar(): void{
    this.isDrawbarVisible = true;
  }

  closeDrawbar(): void{
    this.isDrawbarVisible = false;
  }
}
