import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footer: { rights: string; developer: string; logo: string } = {
    rights: '© 2022 | All Rights Reserved',
    developer: '[ Powered by Emanuel Escudero ]',
    logo: 'assets/icons/dev/logo2023.png',
  };
}
