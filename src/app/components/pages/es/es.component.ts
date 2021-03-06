import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { SheetService } from '../../services/sheet.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-es',
  templateUrl: './es.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./es.component.scss']
})
export class EsComponent implements OnInit {

  listNews: any;
  options: AnimationOptions = {
    path: '/assets/img/angry.json',
  };
  loading = false;
  firmas = '?';
  constructor(private sheetService: SheetService, private title: Title, private _meta: Meta) { }

  ngOnInit() {
    this.title.setTitle("Carta a Xiaomi | Necesitamos tu apoyo");
    this._meta.updateTag({ property: 'og:title', content: 'Carta a Xiaomi | Necesitamos tu apoyo' });
    this._meta.updateTag({ property: 'og:description', content: 'Firma esta petición dirigida a los directivos de Xiaomi para que solucionen los fallos de los dispositivos Xiaomi'});
    this._meta.updateTag({ property: 'og:url', content: 'https://dearxiaomi.com'});
    this.sheetService.getCount().subscribe(result => {
      this.firmas = result.count;
    });
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
      },
      {
        text: 'Problemón al actualizar el Xiaomi Mi 10 Pro a MIUI 12.5',
        link: 'https://www.movilzona.es/2021/05/26/problema-miui-12-5-xiaomi-m-i10-pro/',
        slug: 'movilzona',
        left: false
      },
      {
        text: 'La actualización con MIUI 12 se detiene para los Redmi Note 5 y Note 5 Pro',
        link: 'https://www.movilzona.es/2021/01/28/actualizacion-miui-12-detenida-redmi-note-5-note-5-pro/',
        slug: 'movilzona',
        left: true
      },
      {
        text: 'La pantalla de los Xiaomi Mi 10T está fallando. ¿Qué ocurre y cómo arreglarlo?',
        link: 'https://www.movilzona.es/2021/05/11/problema-pantalla-xiaomi-mi-10t-mi-10t-pro/',
        slug: 'movilzona',
        left: false
      },
      {
        text: '¡Ojo! no actualices aún tu Redmi Note 8 Pro, o podría quedar inservible',
        link: 'https://www.movilzona.es/2020/12/27/miui-12-redmi-note-8-pro-bootloop/',
        slug: 'movilzona',
        left: true
      },
      {
        text: 'Algunos Xiaomi Mi 10 sufren reinicios e inconsistencias con la última ROM de desarrollo de MIUI 11',
        link: 'https://www.xiaomi4mi.com/noticias/smartphone/xiaomi-mi-10-rom-desarrollo-problemas/',
        slug: 'xiaomi4mi',
        left: false
      },
      {
        text: 'Problemas graves para el Xiaomi Redmi Note 10 y Note 10 Pro en la pantalla',
        link: 'https://www.proandroid.com/problemas-graves-xiaomi-redmi-note-10-note-10-pro-pantalla/',
        slug: 'proandroid',
        left: true
      },
      {
        text: 'Xiaomi users report Find Device/SIM activation notification issue',
        link: 'https://piunikaweb.com/2021/05/12/xiaomi-users-report-find-device-sim-activation-notification-issue/',
        slug: 'piunikaweb',
        left: false
      },
      {
        text: 'Xiaomi is on a roll, but it needs to fix its software inconsistency',
        link: 'https://www.androidauthority.com/xiaomi-miui-software-consistency-1219552/',
        slug: 'androidauthority',
        left: true
      },
      {
        text: 'Algunos Xiaomi Mi 11 están experimentando problemas al reproducir música',
        link: 'https://andro4all.com/noticias/xiaomi/algunos-xiaomi-mi-11-estan-experimentando-problemas-al-reproducir-musica',
        slug: 'andro4all',
        left: false
      },
      {
        text: 'Xiaomi, esto ya sobrepasa los límites y la paciencia se nos agota',
        link: 'https://www.xiaomi4mi.com/noticias/temas-interes/xiaomi-esto-ya-sobrepasa-los-limites-y-la-paciencia-se-nos-agota/',
        slug: 'xiaomi4mi',
        left: true
      },
      {
        text: 'El Xiaomi Redmi Note 9 Pro y Note 9S tienen problemas con el WiFi, ¿se puede solucionar?',
        link: 'https://www.proandroid.com/xiaomi-redmi-note-9-pro-note-9s-tienen-problemas-con-wi-fi-se-puede-solucionar/',
        slug: 'movilzona',
        left: false
      },
      {
        text: 'Fallo centro de control',
        link: 'https://c.mi.com/thread-3712503-1-1.html',
        slug: 'community',
        left: true
      },
      {
        text: 'REDMI NOTE 9S WIFI CONNECTIVITY ISSUE',
        link: 'https://c.mi.com/thread-3719377-1-1.html',
        slug: 'community',
        left: false
      },
      {
        text: 'Bug MIUI 12 - MI 9',
        link: 'https://c.mi.com/thread-3163746-1-1.html',
        slug: 'community',
        left: true
      },
      {
        text: '[Bug] MIUI 10 Bug on Mi 9 & Mi 9 SE, Mi Mix 3 taking pictures in pocket',
        link: 'https://c.mi.com/thread-2115148-1-1.html',
        slug: 'community',
        left: false
      }
    ];
    //setTimeout(()=> {this.loading = false;}, 2000);
  }

}
