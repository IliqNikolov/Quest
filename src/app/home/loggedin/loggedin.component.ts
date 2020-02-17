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

  ngOnInit() {
  }

  QuestSelected(e)
  {
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
    console.log(e );
    
    this.quest=e;
  }
  QuestEndedError()
  {
    this.list.GetQuestList();
    this.quest=null;
  }

}
