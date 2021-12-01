import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // Message need to be accessed by both chatlist and newchat
  public messages: ChatMessage[] = [];

  private baseUrl = "http://73.19.65.35:3500/api";

  constructor(private http: HttpClient) { }

  public getChannels(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/channel`);
  }

  public getMessagesFromChannel(channel: string): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(`${this.baseUrl}/channel/${channel}`);
  }

  public sendNewMessage(channel: string, message: ChatMessage): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(`${this.baseUrl}/channel/${channel}`, message);
  }

  public updateChannel(channel: string, content: ChatMessage[]): Observable<ChatMessage[]> {
    return this.http.put<ChatMessage[]>(`${this.baseUrl}/channel/${channel}`, content);
  }

  public deleteChannel(channel: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/channel/${channel}`);
  }

}
