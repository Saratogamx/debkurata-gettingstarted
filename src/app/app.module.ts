import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ProductModule } from './products/product.module';

// Definition of routes array
const routes: Routes = [
  {
    path:       'welcome',
    component:  WelcomeComponent
  },
  {
    path:       '',
    redirectTo: 'welcome',
    pathMatch:  'full'
  },
  {
    path:       '**',
    redirectTo: 'welcome',
    pathMatch:  'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
