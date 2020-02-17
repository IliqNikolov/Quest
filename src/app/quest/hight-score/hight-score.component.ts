import { Component, OnInit } from '@angular/core';
import { QuestService } from 'src/app/services/quest.service';
import { ScoreList } from 'src/app/Interfaces/score-list';

@Component({
  selector: 'app-hight-score',
  templateUrl: './hight-score.component.html',
  styleUrls: ['./hight-score.component.scss']
})
export class HightScoreComponent implements OnInit {

  constructor(private questService : QuestService) { }

  scoreList : ScoreList
  ngOnInit() {
    this.questService.Score().subscribe((scoreList : ScoreList) => {  
      this.scoreList=scoreList
   },error=>{
     console.log(error);
  });
  }

}
