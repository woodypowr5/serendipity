import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { HeaderComponent } from '../app/shared/components/navigation/header/header.component';
import { FooterComponent } from '../app/shared/components/navigation/footer/footer.component';
import { SidenavListComponent } from '../app/shared/components/navigation/sidenav-list/sidenav-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { AttributeService } from './shared/services/attribute.service';
import { ImageService } from './shared/services/image.service';
import { ConfiguredImageComponent } from './configurator/configured-image/configured-image.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguratorComponent,
    HeaderComponent,
    FooterComponent,
    SidenavListComponent,
    WelcomeComponent,
    ConfiguredImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule 
  ],
  providers: [AttributeService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
