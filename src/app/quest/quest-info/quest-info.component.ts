import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGetQuest } from 'src/app/Interfaces/get-quest';
import { QuestService } from 'src/app/services/quest.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-quest-info',
  templateUrl: './quest-info.component.html',
  styleUrls: ['./quest-info.component.scss']
})
export class QuestInfoComponent implements OnInit {

  @Input() quest : IGetQuest;
  @Output() refreshList = new EventEmitter();
  @Output() questEndedError = new EventEmitter();
  @Output() changeFocus = new EventEmitter();
  @Output() changeQuest = new EventEmitter<IGetQuest>();
  isCodeInValid=false;
  constructor(private questService : QuestService, private userService : UserServiceService) { }

  test=false;
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
      this.changeQuest.emit(null); 
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
  this.questService.EnterCode({QuestId:this.quest.Id,Code:data.value.Code}).subscribe((quest : IGetQuest) => {  
    data.resetForm();
    this.changeQuest.emit(quest);
    this.isCodeInValid=false;
 },error=>{
   console.log(error.error);
   if(error.error=="Invalid Code")
   {
    this.isCodeInValid=true;
   }
   if(error.error=="The Quest Has Ended" || error.error=="No Quest")
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
    this.questService.Cheat(this.quest.Id).subscribe((quest : IGetQuest) => {  
      this.changeQuest.emit(quest);
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
      this.changeQuest.emit(null);
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

