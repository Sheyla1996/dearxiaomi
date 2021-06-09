import { NewsComponent } from './components/misc/news/news.component';
import { EsComponent } from './components/pages/es/es.component';
import { DisqusComponent } from './components/misc/disqus/disqus.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisqusModule } from "ngx-disqus";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WidgetTelegramComponent } from './components/misc/widget-telegram/widget-telegram.component';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/pages/home/home.component';
import { EnComponent } from './components/pages/en/en.component';
import { PolicyComponent } from './components/pages/policy/policy.component';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    EsComponent,
    EnComponent,
    DisqusComponent,
    NewsComponent,
    WidgetTelegramComponent,
    HomeComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DisqusModule.forRoot('dear-xiaomi'),
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    LottieModule.forRoot({ player: playerFactory }),
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [GoogleSheetsDbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
