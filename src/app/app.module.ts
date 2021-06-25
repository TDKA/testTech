import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleSmallComponent } from './components/circle-small/circle-small.component';
import { SideLeftComponent } from './components/side-left/side-left.component';
import { SideRightComponent } from './components/side-right/side-right.component';
import { CenterComponent } from './components/center/center.component';
import { BoxComponent } from './components/box/box.component';
import { CircleBigComponent } from './components/circle-big/circle-big.component';
import { StarOGComponent } from './components/star-og/star-og.component';
import { StarGreyComponent } from './components/star-grey/star-grey.component';
import { CircleStarOffComponent } from './components/circle-star-off/circle-star-off.component';
import { BoxMidComponent } from './components/box-mid/box-mid.component';
import { BoxBotComponent } from './components/box-bot/box-bot.component';




@NgModule({
  declarations: [
    AppComponent,
    CircleSmallComponent,
    SideLeftComponent,
    SideRightComponent,
    CenterComponent,
    BoxComponent,
    CircleBigComponent,
    StarOGComponent,
    StarGreyComponent,
    CircleStarOffComponent,
    BoxMidComponent,
    BoxBotComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
