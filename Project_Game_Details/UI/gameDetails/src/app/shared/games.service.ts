import { Injectable } from '@angular/core';
import {Games} from '../shared/games.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
formData : Games;
insertFlag : boolean;
list : Games[];
readonly rootURL = "https://localhost:44396/api";
  constructor(private http : HttpClient) { }

  postGame(formData : Games){
    return this.http.post(this.rootURL+'/gamesDetail',formData)
  }

  gameList(){
    this.http.get(this.rootURL+'/gamesDetail')
    .toPromise().then(res=>this.list = res as Games[])
  }

  updateGame(formData : Games){
    return this.http.put(this.rootURL+'/gamesDetail/'+formData.game_Id,formData)
  }

   deleteGame(id : number){
    return this.http.delete(this.rootURL+'/gamesDetail/'+id)
  }
}
