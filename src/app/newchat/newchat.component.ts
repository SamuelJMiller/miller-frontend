import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-newchat',
  templateUrl: './newchat.component.html',
  styleUrls: ['./newchat.component.scss']
})
export class NewchatComponent implements OnInit {

  newmessage: ChatMessage = {
    username: "",
    message: ""
  };

  constructor(public chat: ChatService) { }

  ngOnInit() {
  }

}
