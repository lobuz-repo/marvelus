import {Component, OnInit} from '@angular/core';
import {SharedComponent} from '../shared/shared.component';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {


  model: MailboxModel = {
    name: '',
    email: '',
    feedback: ''
  };


  constructor(private apiService: SharedComponent) {
  }

  ngOnInit() {
  }

  sendFeedback(): void {
    this.apiService.postFeedback(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('An error has occurred while sending feedback');
      }
    );
  }

}

export interface MailboxModel {
  name: string;
  email: string;
  feedback: string;
}
