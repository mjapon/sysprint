export interface ContribsResp {
  estado: number;
  items: Array<any>;
  cols: Array<any>;
}

export interface NewContribForm {
  cnt_id: number;
  cnt_ruc: string;
  cnt_razonsocial: string;
  cnt_nombrecomercial: string;
  cnt_telf: string;
  cnt_email: string;
  cnt_dirmatriz: string;
  cnt_clase: number;
  cls_nombre: string;
  cnt_nrocntespecial: string;
  cnt_oblcontab: number;
  ocontab: string;
}
