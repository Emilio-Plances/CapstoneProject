import { Component } from '@angular/core';
import { LogService } from '../log-system/service/log.service';
import { IUser } from '../../interfaces/iuser';
import { ICharacter } from '../../interfaces/i-character';

@Component({
  selector: 'app-preferred',
  templateUrl: './preferred.component.html',
  styleUrl: './preferred.component.scss'
})
export class PreferredComponent {
  user!:IUser
  characters:ICharacter[]=[]
  constructor(
    private ls:LogService
  ){}
  ngOnInit(){
    this.ls.user$.subscribe(auth=>{
      if(!auth)return
      this.user=auth.user;
      this.ls.getPref(this.user.id).subscribe(data=>this.characters=data.response)
    })
  }
}
