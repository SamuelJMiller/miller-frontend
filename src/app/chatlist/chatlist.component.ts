import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.scss']
})
export class ChatlistComponent implements OnInit {

  constructor(public chat: ChatService) { }

  ngOnInit() {
  }

}
