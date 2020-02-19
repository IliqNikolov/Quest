import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuestService } from 'src/app/services/quest.service';
import { QuestList } from 'src/app/Interfaces/quest-list';
import { UserServiceService } from 'src/app/services/user-service.service';
import { GetQuest } from 'src/app/Interfaces/get-quest';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() selectedQuest=new EventEmitter();
  @Output() selectedThisQuest=new EventEmitter();

  showJoinForm=false;
  invalidCode=false;
  alreadyJoined=false;
  constructor(private questService: QuestService, private userService : UserServiceService) { }

  questList = {} as QuestList;
  ngOnInit() {
    this.GetQuestList();
  }

  GetQuestList()
  {
    this.questService.List().subscribe((list : QuestList) => {  
      this.questList=list
   },error=>{
     console.log(error);
     if(error.status==401)
     {
       this.userService.Logout();
     }
   
  });
  }
  ClickedOnQuest(e)
  {
    console.log(e.target);
    
    this.selectedQuest.emit(e.target.id);
  }

  ToggleJoinForm()
  {
    this.showJoinForm=!this.showJoinForm;
  }

  Join(data)
  {
    this.questService.Join(data).subscribe((quest : GetQuest) => {  
      this.invalidCode=false;
      this.alreadyJoined=false;
      this.GetQuestList();
      this.selectedThisQuest.emit(quest)
   },error=>{
    if(error.status==401)
    {
      this.userService.Logout();
    }
     if(error.error=="Already Joined")
     {
      this.invalidCode=false;
      this.alreadyJoined=true;
     }
     if(error.error=="Invalid Code")
     {
      this.invalidCode=true;
      this.alreadyJoined=false;
     }
     //console.log(error.error);     
  });
}
}
