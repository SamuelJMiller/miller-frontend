import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/chat';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.scss']
})
export class ChatmessageComponent implements OnInit {
  @Input() message: ChatMessage = {
    username: "",
    message: ""
  };

  constructor() { }

  ngOnInit() {
  }

}
