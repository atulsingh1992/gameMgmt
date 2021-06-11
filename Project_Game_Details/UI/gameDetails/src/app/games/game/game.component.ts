import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {GamesService} from 'src/app/shared/games.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public addition : boolean = true;

  constructor(private service : GamesService,private toastr : ToastrService) { }

  ngOnInit() {
    this.resetGameDetail();
    this.service.insertFlag=true;
  }


  resetGameDetail(form? : NgForm){
    if(form!=null){
      form.resetForm();}
    this.service.formData = {
      game_Id : 0,
      game_Name : null,
      game_description : null,
      game_releaseDate : new Date(),
      game_rating : 0,
      game_feedback : ''
    }}
  

  
onSubmit(form:NgForm){
  if(form.value.game_Id==0)
  {
    this.insertRecord(form)
  }
  else{
    this.updateRecord(form);
  }
  }
  
  insertRecord(form:NgForm){
    if(form.form.controls.game_Name.value != "" && form.form.controls.game_Name.value != null
       && form.form.controls.game_description.value != "" && form.form.controls.game_description.value != null
       && form.form.controls.game_feedback.value != "" && form.form.controls.game_feedback.value != null
       && form.form.controls.game_rating.value != 0)
    {
  this.service.postGame(form.value)
  .subscribe(res=> {
    this.service.gameList();
    this.toastr.success("Game details added succesfully");
    this.resetGameDetail(form)}); 
  }
  else{
    this.toastr.error("Please enter all mandatory detail");
  }
  
  }

  updateRecord(form:NgForm){
    this.service.updateGame(form.value)
    .subscribe(res=> {
      this.service.gameList();
      this.toastr.success("Game details updated  succesfully")
      this.resetGameDetail(form)}); 
     
    }

    addGame(){
      this.resetGameDetail();
      this.service.insertFlag=true;
    }
}
