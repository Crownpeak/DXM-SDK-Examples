import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './app.component';
import {HomePage} from "../pages/homePage";
import {HeroContainer} from "../components/heroContainer";
import {SecondaryContainer} from "../components/secondaryContainer";
import {SecondaryList} from "../components/secondaryList";
import {DropZone} from "../components/dropZone";
import {DropZoneDirective} from "../components/dropZoneDirective";
import {SecondaryPage} from "../pages/secondaryPage";

@NgModule({
  declarations: [
    AppComponent, HomePage, HeroContainer, SecondaryContainer, SecondaryList, DropZone, DropZoneDirective, SecondaryPage
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
