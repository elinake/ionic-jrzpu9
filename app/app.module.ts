import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [MyApp],
  entryComponents: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  providers: [],
  exports: [CommonModule, IonicModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
