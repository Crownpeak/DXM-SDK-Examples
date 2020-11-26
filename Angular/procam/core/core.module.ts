import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CoreRoutingModule} from './core-routing.module';
import {AppComponent} from './app.component';
import {HomePage} from "../pages/homePage";
import {HomeHero} from "../components/procam/homeHero";
import {ImagePanel} from "../components/procam/imagePanel";
import {ImagePanelItem} from "../components/procam/imagePanelItem";
import {Events} from "../components/procam/events";
import {TwoBluePanels} from "../components/procam/twoBluePanels";
import {PanelItem} from "../components/procam/panelItem";
import {Products} from "../components/procam/products";
import {ProductItem} from "../components/procam/productItem";
import {BlogPage} from "../pages/blogPage";
import {MonthHeader} from "../components/blog/monthHeader";
import {TopicList} from "../components/blog/topicList";
import {FeaturedPost} from "../components/blog/featuredPost";
import {SecondaryPost} from "../components/blog/secondaryPost";
import {BlogPost} from "../components/blog/blogPost";
import {PostArchives} from "../components/blog/postArchives";
import {DropZoneDirective} from "../components/functional/dropZoneDirective";
import {DropZone} from "../components/functional/dropZone";

@NgModule({
  declarations: [
    AppComponent, HomePage, HomeHero, ImagePanel, ImagePanelItem, Events, TwoBluePanels, PanelItem, Products, ProductItem,
    BlogPage, MonthHeader, TopicList, FeaturedPost, SecondaryPost, BlogPost, PostArchives,
      DropZoneDirective, DropZone
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
