import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetQuest } from 'src/app/Interfaces/get-quest';
import { QuestService } from 'src/app/services/quest.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-quest-info',
  templateUrl: './quest-info.component.html',
  styleUrls: ['./quest-info.component.scss']
})
export class QuestInfoComponent implements OnInit {

  @Input() quest : GetQuest;
  @Output() refreshList = new EventEmitter();
  @Output() questEndedError = new EventEmitter();
  isCodeInValid=false;
  constructor(private questService : QuestService, private userService : UserServiceService) { }

  ngOnInit() {
  }
  Start()
  {
    this.questService.Start(this.quest.Id).subscribe(() => {  
      this.quest.Status="Started";
      this.refreshList.emit();
   },error=>{
     console.log(error.error);
     if(error.status==401)
     {
       this.userService.Logout();
     }
  });
}

End()
  {
    this.questService.End(this.quest.Id).subscribe(() => {  
      this.quest.Status="Finished";
      this.refreshList.emit();
   },error=>{
     console.log(error.error);
     if(error.status==401)
     {
       this.userService.Logout();
     }
  });
}

Delete()
  {
    this.questService.Delete(this.quest.Id).subscribe(() => {  
      this.quest=null;
      this.refreshList.emit();
   },error=>{
     console.log(error.error);
     if(error.status==401)
     {
       this.userService.Logout();
     }
  });
}

EnderCode(data)
{
  this.questService.EnterCode({QuestId:this.quest.Id,Code:data.Code}).subscribe((quest : GetQuest) => {  
    this.quest=quest;
    this.isCodeInValid=false;
 },error=>{
   console.log(error.error);
   if(error.error=="Invalid Code")
   {
    this.isCodeInValid=true;
   }
   if(error.error=="The Quest Has Ended")
   {
     this.questEndedError.emit();
   }
   if(error.status==401)
   {
     this.userService.Logout();
   }
});
}

Cheat()
  {
    this.questService.Cheat(this.quest.Id).subscribe((quest : GetQuest) => {  
      this.quest=quest;
   },error=>{
     console.log(error.error);
     if(error.error=="The Quest Has Ended")
   {
     this.questEndedError.emit();
   }
     if(error.status==401)
     {
       this.userService.Logout();
     }
  });
}
Leave()
  {
    this.questService.Leave(this.quest.Id).subscribe(() => {  
      this.quest=null;
      this.refreshList.emit();
   },error=>{
     console.log(error.error);
     if(error.status==401)
     {
       this.userService.Logout();
     }
  });
}
}

