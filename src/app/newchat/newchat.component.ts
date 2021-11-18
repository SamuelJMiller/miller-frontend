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
    username: "",
    message: ""
  };

  inputValue: string = "";

  constructor(public chat: ChatService) { }

  ngOnInit() {
  }

  sendMessage() {
    console.log(this.inputValue);
  }

}
