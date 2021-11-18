import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.scss']
})
export class ChatlistComponent implements OnInit {
  messages: ChatMessage[] = [];

  constructor(public chat: ChatService) { }

  ngOnInit() {
    this.chat.getMessagesFromChannel('smiller').subscribe((data) => {
      console.log('Channels received:', data);
      this.messages = data;
    });
  }

}
