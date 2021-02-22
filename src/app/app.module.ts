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

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    EsComponent,
    DisqusComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DisqusModule.forRoot('dear-xiaomi'),
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
