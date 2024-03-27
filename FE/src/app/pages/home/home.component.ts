import { Component } from '@angular/core';
import { LogService } from '../log-system/service/log.service';
import { CharacterService } from '../../services/character.service';
import { ICharacter } from '../../interfaces/i-character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  logged!:boolean;
  charByPref:ICharacter[]=[];
  constructor(
    private ls:LogService,
    private cs:CharacterService
  ){}
  ngOnInit():void{
    this.cs.getOrderedByPref().subscribe(data=>{
      if(data.response.length>5) for(let i=0;i<5;i++){ this.charByPref.push(data.response[i]);}
      else this.charByPref=data.response;
    })
  }
}
