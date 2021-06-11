import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Games } from 'src/app/shared/games.model';
import { GamesService } from 'src/app/shared/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  constructor(private service : GamesService,private toastr : ToastrService) { }

  ngOnInit() {
    this.service.gameList();
  }

  detail(game : Games){
    this.service.formData = Object.assign({},game);
    this.service.insertFlag = false;
  }

  onDelete(game : Games)
  {
    if(confirm('Are you sure to delete this record'))
    this.service.deleteGame(game.game_Id).subscribe(res=>{
      this.toastr.warning("Game deleted successfully");
       this.service.gameList();
    }
      )
      this.service.gameList();
  }

}

