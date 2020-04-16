import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppEnglishSearchComponent } from './app.english.search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppSuppliersSearchLuceneComponent } from './app.suppliers.component.lucene';
import { RouterModule } from '@angular/router';
import { MainComponent } from './app.main.component';

@NgModule({
  declarations: [
    AppEnglishSearchComponent,
     AppSuppliersSearchLuceneComponent,
     MainComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppEnglishSearchComponent },
      { path: 'lucene', component: AppSuppliersSearchLuceneComponent }
    ])
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
