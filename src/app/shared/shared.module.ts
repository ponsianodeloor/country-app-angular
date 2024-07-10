import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    RootPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    ContactPageComponent
  ]
})
export class SharedModule { }
