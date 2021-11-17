import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatmessageComponent } from './chatmessage/chatmessage.component';

@NgModule({
  declarations: [			
    AppComponent,
      ChatlistComponent,
      ChatmessageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
