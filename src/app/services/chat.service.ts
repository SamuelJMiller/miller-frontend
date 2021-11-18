import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ChatMessage } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private baseurl = "http://73.19.65.35:3500/api";

  constructor(private http: HttpClient) { }

  public getChannels(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseurl}/channel`);
  }

  public getMessagesFromChannel(channel: string): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(`${this.baseurl}/channel/${channel}`);
  }

  public newMessage(channel: string, message: ChatMessage): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(`${this.baseurl}/channel/${channel}`, message);
  }

}
