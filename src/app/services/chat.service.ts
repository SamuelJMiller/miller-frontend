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

  public getChannels(): Observable<any> {
    return this.http.get(`${this.baseurl}/channel`);
  }

  public getMessagesFromChannel(channel: string): Observable<any> {
    return this.http.get(`${this.baseurl}/channel/${channel}`);
  }

}
