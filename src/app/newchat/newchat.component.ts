import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chat';
import { ChatService } from '../services/chat.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  chatForm: FormGroup = new FormGroup({});

  constructor(public chat: ChatService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.chatForm = this.fb.group({
      username: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.newMessage.message = this.chatForm.controls['message'].value;

    this.chat.sendNewMessage(this.newMessage.username, this.newMessage).subscribe(data => {
      this.chat.messages.push(data);
    });

    this.initializeForm();
  }

}
