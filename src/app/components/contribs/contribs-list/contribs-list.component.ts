import {Component, OnInit} from '@angular/core';
import {ContribuyenteService} from '../../../services/contribuyente.service';
import {ContribsResp} from '../../../model/contribs';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-contribs-list',
  templateUrl: './contribs-list.component.html',
  styles: []
})
export class ContribsListComponent implements OnInit {

  items: Array<any>;
  cols: Array<any>;
  pSelectableRow: any;
  menu: MenuItem[];

  constructor(private contribServ: ContribuyenteService) {
  }

  ngOnInit() {
    console.log('Ng on Init contribs');
    this.listar();

    this.menu = [
      {
        label: 'Crear',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Editar',
        icon: 'pi pi-fw pi-pencil',
      }
    ];

  }

  listar() {
    this.contribServ.listar().subscribe((response: ContribsResp) => {
      console.log('respuesta al ejecutar listar por agencia');
      console.log(response);
      this.items = response.items;
      this.cols = response.cols;
    });
  }

}
