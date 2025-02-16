import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HostelComponent } from './features/components/hostel/hostel.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { AddhostelComponent } from './features/components/addhostel/addhostel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditHostelComponent } from './features/components/edit-hostel/edit-hostel.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HostelComponent,
    SidebarComponent,
    AddhostelComponent,
    EditHostelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
