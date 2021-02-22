import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-es',
  templateUrl: './es.component.html',
  styleUrls: ['./es.component.scss']
})
export class EsComponent implements OnInit {

  listNews: any;
  options: AnimationOptions = {
    path: '/assets/img/mitu.json',
  };
  loading = true;
  constructor() { }

  ngOnInit() {
    this.listNews = [
      {
        text: 'Este móvil Xiaomi se está bloqueado tras actualizar a la última versión',
        link: 'https://www.proandroid.com/movil-xiaomi-bloqueado-actualizacion/',
        slug: 'proandroid',
        left: true
      },
      {
        text: 'Problemas de MIUI 12 que aún esperan solución y los modelos más afectados',
        link: 'https://www.movilzona.es/2021/01/20/modelos-problemas-no-resueltos-miui-12/',
        slug: 'movilzona',
        left: false
      },
      {
        text: 'El Xiaomi Redmi Note 9 Pro tiene problemas tras la última actualización',
        link: 'https://elandroidelibre.elespanol.com/2021/02/el-xiaomi-redmi-note-9-pro-tiene-problemas-tras-la-ultima-actualizacion.html',
        slug: 'elandroidelibre',
        left: true
      }
    ];
    setTimeout(()=> {this.loading = false;}, 3000);
  }

}
