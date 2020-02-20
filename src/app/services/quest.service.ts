import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IQuest } from '../Interfaces/quest'

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor(private http: HttpClient,private router :Router) { }

  private QuestApiUrl : string ="https://localhost:44383/api/Quest";

  Create(quest : IQuest)
  {
    return this.http.post(`${this.QuestApiUrl}/Create`,quest,{withCredentials:true});
  }
  List():any
  {
    return this.http.get(`${this.QuestApiUrl}/List`,{withCredentials:true});
  }
  GetQuest(id : string):any
  {
    return this.http.get(`${this.QuestApiUrl}/${id}`,{withCredentials:true});
  }
  Join(code):any
  {
    return this.http.post(`${this.QuestApiUrl}/Join`,code,{withCredentials:true});
  }
  Start(code)
  {
    return this.http.post(`${this.QuestApiUrl}/Start`,{code:code},{withCredentials:true});
  }
  End(code)
  {
    return this.http.post(`${this.QuestApiUrl}/End`,{code:code},{withCredentials:true});
  }
  Delete(code)
  {
    return this.http.post(`${this.QuestApiUrl}/Delete`,{code:code},{withCredentials:true});
  }
  EnterCode(code):any
  {
    return this.http.post(`${this.QuestApiUrl}/Code`,code,{withCredentials:true});
  }
  Cheat(code):any
  {
    return this.http.post(`${this.QuestApiUrl}/Cheat`,{code:code},{withCredentials:true});
  }
  Leave(code)
  {
    return this.http.post(`${this.QuestApiUrl}/Leave`,{code:code},{withCredentials:true});
  }
  Score()
  {
    return this.http.get(`${this.QuestApiUrl}/Score`);
  }
}
