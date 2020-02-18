import { Component, OnInit } from '@angular/core';
import { QuestService } from 'src/app/services/quest.service';
import { GetQuest } from 'src/app/Interfaces/get-quest';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {

  quest : GetQuest;
  list;

  constructor(private questService : QuestService,private userService : UserServiceService) { }

  selectedIndex = 0;
  ngOnInit() {
  }

  QuestSelected(e)
  {
    this.changeFocus(1);
    this.questService.GetQuest(e).subscribe((quest : GetQuest) => {      
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
}
