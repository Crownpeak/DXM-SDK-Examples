import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './app.component';
import {BlogPage} from "../pages/blogPage";
import {Header} from "../components/header";
import {TopicList} from "../components/topicList";
import {FeaturedPost} from "../components/featuredPost";
import {SecondaryPost} from "../components/secondaryPost";
import {BlogPost} from "../components/blogPost";
import {PostArchives} from "../components/postArchives";
import {Footer} from "../components/footer";

@NgModule({
  declarations: [
    AppComponent, BlogPage, Header, TopicList, FeaturedPost, SecondaryPost, BlogPost, PostArchives, Footer
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CoreModule { }
