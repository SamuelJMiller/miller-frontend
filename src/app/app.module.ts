import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatmessageComponent } from './chatmessage/chatmessage.component';
import { NewchatComponent } from './newchat/newchat.component';

@NgModule({
  declarations: [				
    AppComponent,
      ChatlistComponent,
      ChatmessageComponent,
      NewchatComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
