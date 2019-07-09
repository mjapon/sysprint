import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContribFormResponse, TipoContrib} from '../../../model/contribs';
import {ContribuyenteService} from '../../../services/contribuyente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SwalService} from '../../../services/swal.service';

@Component({
  selector: 'app-contribs-form',
  templateUrl: './contribs-form.component.html',
  styles: []
})
export class ContribsFormComponent implements OnInit {

  contribForm: FormGroup;
  submitted = false;
  tiposContribList: Array<TipoContrib>;
  cntId: number;
  entity: any;

  constructor(private formBuilder: FormBuilder,
              private contribServ: ContribuyenteService,
              private swalService: SwalService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('cnt_id'));
      this.cntId = parseInt(params.get('cnt_id'));
      console.log('parametro que llega:');
      console.log(this.cntId);
      this.loadForm(this.cntId);
      this.initForm();
    });

  }

  initForm() {
    this.contribForm = this.formBuilder.group({
      cnt_ruc: ['', Validators.required],
      cnt_razonsocial: ['', Validators.required],
      cnt_nombrecomercial: [''],
      cnt_telf: [''],
      cnt_email: [''],
      cnt_dirmatriz: ['', Validators.required],
      cnt_clase: [1, Validators.required],
      cnt_nrocntespecial: [''],
      cnt_oblcontab: [0]
    });
  }

  loadForm(cntId: number) {
    this.contribServ.findByCod(cntId).subscribe((response: ContribFormResponse) => {
      console.log('respuesta al ejecutar findByCod:');
      console.log(response);
      this.tiposContribList = response.tiposcontrib;
      this.entity = response.form;
    });
  }

  get f() {
    return this.contribForm.controls;
  }

  buscarContrib() {
    console.log('Se procede a buscar el contribuyente acutal');
    if (this.contribForm.controls.cnt_ruc.invalid) {
      this.swalService.fireInfo('El numero de ruc ingresado es incorrecto');
    } else {
      const ruc = this.contribForm.controls.cnt_ruc.value;
      console.log(ruc);
      this.contribServ.findByRuc(ruc).subscribe((response) => {
        if (response && response.estado === 200) {
          console.log('Contribuyente encontado-->');
          this.swalService.fireWarning('El contributente con ruc:' + ruc + ' ya está registrado, ingrese otro');
        }
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contribForm.invalid) {
      return;
    }
    console.log('on submit event-->');
    console.log(this.contribForm.value);
    //this.swalService.fireInfo('Submited');

    let formToSubmit = this.contribForm.value;
    formToSubmit.cnt_id = this.cntId;

    this.contribServ.save(formToSubmit).subscribe((res) => {
      console.log('Respuesta del servidor');
      if (res && res.estado === 200) {
        this.swalService.fireSuccess(res.msg);
      } else {
        this.swalService.fireError(res.msg);
      }
    });

  }

  onReset() {
    this.submitted = false;
    this.contribForm.reset();
    this.router.navigate(['/contribs']);
  }

}
