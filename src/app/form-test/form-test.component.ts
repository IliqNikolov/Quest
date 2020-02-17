import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms'

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit {

  eventForm: FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.eventForm=this.fb.group(
      {
        text: '',
        events: this.fb.array([])
      }
    );
  }

  get eventForms()
  {
    return this.eventForm.get('events') as FormArray
  }

  addEvent()
  {
    const event= this.fb.group({
      name: [],
      description: [],
      code: []
    })
    this.eventForms.push(event)
  }

  deleteEvent(i)
  {
    this.eventForms.removeAt(i)
  }
}
