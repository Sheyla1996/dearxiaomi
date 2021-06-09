import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { SheetService } from '../../services/sheet.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-en',
  templateUrl: './en.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./en.component.scss']
})
export class EnComponent implements OnInit {

  listNews: any;
  options: AnimationOptions = {
    path: '/assets/img/angry.json',
  };
  loading = false;
  firmas = '?';
  constructor(private sheetService: SheetService, private title: Title, private _meta: Meta) { }

  ngOnInit() {
    this.title.setTitle("Letter to Xiaomi | We need your support");
    this._meta.updateTag({ property: 'og:title', content: 'Letter to Xiaomi | We need your support' });
    this._meta.updateTag({ property: 'og:description', content: 'Sign this petition addressed to Xiaomi executives to solve the failures of Xiaomi devices'});
    this._meta.updateTag({ property: 'og:url', content: 'https://dearxiaomi.com'});
    this.sheetService.getCount().subscribe(result => {
      this.firmas = result.count;
    });
    this.listNews = [
      {
        text: 'This Xiaomi mobile is locked after updating to the latest version',
        link: 'https://www.proandroid.com/movil-xiaomi-bloqueado-actualizacion/',
        slug: 'proandroid',
        left: true
      },
      {
        text: 'MIUI 12 problems that still await solution and the most affected models',
        link: 'https://www.movilzona.es/2021/01/20/modelos-problemas-no-resueltos-miui-12/',
        slug: 'movilzona',
        left: false
      },
      {
        text: 'The Xiaomi Redmi Note 9 Pro has problems after the latest update',
        link: 'https://elandroidelibre.elespanol.com/2021/02/el-xiaomi-redmi-note-9-pro-tiene-problemas-tras-la-ultima-actualizacion.html',
        slug: 'elandroidelibre',
        left: true
      },
      {
        text: 'Problem updating Xiaomi Mi 10 Pro to MIUI 12.5',
        link: 'https://www.movilzona.es/2021/05/26/problema-miui-12-5-xiaomi-m-i10-pro/',
        slug: 'movilzona',
        left: false
      },
      {
        text: 'The update with MIUI 12 stops for the Redmi Note 5 and Note 5 Pro',
        link: 'https://www.movilzona.es/2021/01/28/actualizacion-miui-12-detenida-redmi-note-5-note-5-pro/',
        slug: 'movilzona',
        left: true
      },
      {
        text: 'The screen of the Xiaomi Mi 10T is failing. What happens and how to fix it?',
        link: 'https://www.movilzona.es/2021/05/11/problema-pantalla-xiaomi-mi-10t-mi-10t-pro/',
        slug: 'movilzona',
        left: false
      },
      {
        text: 'eye! do not update your Redmi Note 8 Pro yet, or it could be unusable',
        link: 'https://www.movilzona.es/2020/12/27/miui-12-redmi-note-8-pro-bootloop/',
        slug: 'movilzona',
        left: true
      },
      {
        text: 'Some Xiaomi Mi 10 suffer reboots and inconsistencies with the latest MIUI 11 development ROM',
        link: 'https://www.xiaomi4mi.com/noticias/smartphone/xiaomi-mi-10-rom-desarrollo-problemas/',
        slug: 'xiaomi4mi',
        left: false
      },
      {
        text: 'Serious problems for Xiaomi Redmi Note 10 and Note 10 Pro on the screen',
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
        text: 'Some Xiaomi Mi 11 are experiencing problems when playing music',
        link: 'https://andro4all.com/noticias/xiaomi/algunos-xiaomi-mi-11-estan-experimentando-problemas-al-reproducir-musica',
        slug: 'andro4all',
        left: false
      },
      {
        text: 'Xiaomi, this already exceeds the limits and patience is running out',
        link: 'https://www.xiaomi4mi.com/noticias/temas-interes/xiaomi-esto-ya-sobrepasa-los-limites-y-la-paciencia-se-nos-agota/',
        slug: 'xiaomi4mi',
        left: true
      },
      {
        text: 'The Xiaomi Redmi Note 9 Pro and Note 9S have problems with WiFi, can it be fixed?',
        link: 'https://www.proandroid.com/xiaomi-redmi-note-9-pro-note-9s-tienen-problemas-con-wi-fi-se-puede-solucionar/',
        slug: 'movilzona',
        left: false
      },
      {
        text: 'Control center fault',
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
