import { Component, OnInit } from '@angular/core';
import { QuestService } from 'src/app/services/quest.service';
import { IGetQuest } from 'src/app/Interfaces/get-quest';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {
  private _quest : IGetQuest;
  get quest(): IGetQuest
  {
    return this._quest;
  }
  set quest(val :IGetQuest)
  {
    if(val)
    {
      this.isQuestSelected=true;
    }
    else
    {
      this.isQuestSelected=false;
    }
    this._quest=val;   
  }
  list;
  isQuestSelected=false;

  constructor(private questService : QuestService,private userService : UserServiceService) { }

  selectedIndex = 0;
  ngOnInit() {
  }

  QuestSelected(e)
  {
    this.changeFocus(1);
    this.questService.GetQuest(e).subscribe((quest : IGetQuest) => {      
      this.quest=quest      
   },error=>{
     console.log(error);
     if(error.status==401)
     {
       this.userService.Logout();
     }
   
  });
    
  }
  GetListComponent(list)
  {
    this.list=list;
  }
  RefreshList()
  {    
    if(this.quest==null)
    {
      this.isQuestSelected=false;
    }
    else
    {
      this.isQuestSelected=true;
    }

    
    this.list.GetQuestList();
  }  
  SelectThisQuest(e)
  {  
    this.changeFocus(1);  
    this.quest=e;
  }
  QuestEndedError()
  {
    this.list.GetQuestList();
    this.changeFocus(0);
    this.quest=null;
  }
  changeFocus(tar : number)
  {
    this.selectedIndex = tar;
  }
  changeQuest(e)
  {
    if(e)
    {
      this.changeFocus(1);
    }
    else
    {
      this.changeFocus(0);
    }
    this.quest=e;
  }
}
