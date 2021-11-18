import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-newchat',
  templateUrl: './newchat.component.html',
  styleUrls: ['./newchat.component.scss']
})
export class NewchatComponent implements OnInit {

  newMessage: ChatMessage = {
    username: "smiller",
    message: ""
  };

  inputValue: string = "";

  constructor(public chat: ChatService) { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.inputValue.length > 0) {
      this.newMessage.message = this.inputValue;
      
      this.chat.sendNewMessage('smiller', this.newMessage).subscribe((data) => {
        this.chat.messages.push(data);
      });
    }
  }

}
