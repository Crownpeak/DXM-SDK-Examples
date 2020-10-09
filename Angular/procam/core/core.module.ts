import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './app.component';
import {HomePage} from "../pages/homePage";
import {Header} from "../components/global/header";
import {Footer} from "../components/global/footer";
import {HomeHero} from "../components/homeHero";
import {ImagePanel} from "../components/imagePanel";
import {ImagePanelItem} from "../components/imagePanelItem";
import {Events} from "../components/events";
import {TwoBluePanels} from "../components/twoBluePanels";
import {PanelItem} from "../components/panelItem";
import {Products} from "../components/products";
import {ProductItem} from "../components/productItem";

@NgModule({
  declarations: [
    AppComponent, HomePage, Header, Footer, HomeHero, ImagePanel, ImagePanelItem, Events, TwoBluePanels, PanelItem, Products, ProductItem
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
