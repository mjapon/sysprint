import {Component, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  isLogged: boolean;

  constructor(private router: Router,
              private authService: AuthService,
              private localStorageService: LocalStorageService) {
    console.log('Se ejecuta constructor de NavBarComponent--------->');
  }

  ngOnInit() {
    console.log('NavbarComponent ngOnInit -->');
    this.items = [
      {
        label: 'Inicio'
      },
      {
        label: 'Principal',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Reportes',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      },
      {
        label: 'Administracion',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      }
    ];

    let userDataSession = this.localStorageService.getItem('userDataSession');
    console.log("Valor de userDataSession");
    console.log(userDataSession);
    this.isLogged = userDataSession != null;
    console.log('Valor de isLoged es:');
    console.log(this.isLogged);
  }

  goToIngresar() {
    console.log('NavbarComponent gotoIngresar -->');
    this.router.navigate(['login']);
  }

  goToSalir() {
    console.log('salir -->');
    this.isLogged = false;
    this.localStorageService.removeItem('userDataSession');
    this.localStorageService.removeItem('islogged');

    this.router.navigate(['/']);
  }

}
