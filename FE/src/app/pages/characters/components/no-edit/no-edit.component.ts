import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICharacter } from '../../../../interfaces/i-character';
import { CharacterService } from '../../../../services/character.service';
import { LogService } from '../../../log-system/service/log.service';
import { IUser } from '../../../../interfaces/iuser';

@Component({
  selector: 'app-no-edit',
  templateUrl: './no-edit.component.html',
  styleUrl: './no-edit.component.scss'
})
export class NoEditComponent {
  loading!:boolean;
  preferred!:boolean;
  char!:ICharacter|undefined;
  logged!: boolean;
  user!:IUser

  constructor(
    private route:ActivatedRoute,
    private ls:LogService,
    private cs:CharacterService
  ){this.loading=true;}
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let idString:string|null = params.get('id');
      if (!idString) return;
      let id:number=parseInt(idString);

      this.cs.getById(id).subscribe(data=>{
        this.char=data.response
        this.ls.user$.subscribe(auth=>{
          this.logged=!!auth
          if(auth){
            this.user=auth?.user
            this.ls.getPref(auth.user.id).subscribe(array=>this.preferred=array.response.some(el=>el.id==id))
          }
          this.loading=false;
        })
      })
    })
  }
  printClass(){
    if(this.char?.pgClass[1]==null) return this.char?.pgClass[0];
    return this.char?.pgClass;
  }
  addPref(){
    if(!this.char) return;
    this.ls.addPref(this.user.id,this.char.id).subscribe(()=>{
      this.preferred=true;
      this.char?.preferredUsers.push(this.user);
    });
  }
  removePref(){
    if(!this.char) return;
    this.ls.removePref(this.user.id,this.char.id).subscribe(()=>{
      this.preferred=false;
      if(!this.char) return;
      this.char.preferredUsers=this.char.preferredUsers.filter(user=>user.id!=this.user.id);
    });
  }
}
