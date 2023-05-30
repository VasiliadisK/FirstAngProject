import { Component } from '@angular/core';
import {ModalServiceService} from '../services/modal-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  NewTask = new FormGroup({
    task : new FormControl('')
  });
  
  constructor(private Service:ModalServiceService)
  {

  }

  exitModal(){
    this.Service.closeModalClicked();
  }

  onSubmit(){
    this.Service.addTaskToDay(this.NewTask.value.task!);
    
  }
  
}
