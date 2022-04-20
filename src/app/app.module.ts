import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SiteComponentComponent } from './components/site-component/site-component.component';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoadSpinnerComponent } from './shared/load-spinner/load-spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExampleComponent } from './components/example/example.component';
@NgModule({
  declarations: [
    AppComponent,
    SiteComponentComponent,
    LoadSpinnerComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
