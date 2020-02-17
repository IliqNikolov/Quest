import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms'
import { QuestService } from 'src/app/services/quest.service';
import { Quest } from 'src/app/Interfaces/quest';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  eventForm: FormGroup

  constructor(private fb:FormBuilder, private questService: QuestService, private userService: UserServiceService,
    private router:Router) { }

  latitude = 42.68508331140545;
  longitude = 23.34253094771657;
  cursorLat;
  cursorLon;
  locationChosen=false;
  showMap=false;
  mapToggleButtonText="Add map location"
  noStagesFlag : boolean =false;

  MapClick(event)
  {
    console.log(event);
    this.cursorLat=event.coords.lat;
    this.cursorLon=event.coords.lng;
    this.locationChosen=true;
  }

  ToggleMap()
  {
    if(this.showMap)
    {
      this.showMap=false;
      this.mapToggleButtonText="Add map location"
    }
    else{
      this.showMap=true;
      this.mapToggleButtonText="Remove map location"
    }
  }

  ngOnInit() {
    this.eventForm=this.fb.group(
      {
        questName: '',
        code: '',
        cheats: '0',        
        mapLat: '',
        mapLon: '',
        date: '',
        time:'',
        stages: this.fb.array([])
      }
    );
      this.addStage();
      
  }

  get stageForms()
  {
    return this.eventForm.get('stages') as FormArray
  }
  get questName()
  {    
    return this.eventForm.get('questName');
  }
  get code()
  {
    return this.eventForm.get('code');
  }
  get cheats()
  {
    return this.eventForm.get('cheats');
  }

  addStage()
  {
    const stage= this.fb.group({
      name: [],
      description: [],
      code: []
    })
    this.stageForms.push(stage)
    this.noStagesFlag=false;
  }

  deleteStage(i)
  {
    this.stageForms.removeAt(i)
    if(this.stageForms.length==0)
    {
      this.noStagesFlag=true;
    }
  }

  CreateEvent(data : Quest)
  {
    if(this.showMap)
    {
      data.mapLat=this.cursorLat;
      data.mapLon=this.cursorLon;
    }
    else
    {
      data.mapLat=null;
      data.mapLon=null;
    }
    this.questService.Create(data).subscribe((resp : any) => {  
      this.router.navigate(["/"])
      
   },error=>{
     console.log(error);
     if(error.status==401)
     {
       this.userService.Logout();
     }
   
  });
    
  }
}
