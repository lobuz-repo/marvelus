import {Component, OnInit} from '@angular/core';
import {MailboxModel} from '../mailbox/mailbox.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  private SEND_FEEDBACK_URL = `/feedback`;

  constructor(private http: HttpClient) {

  }


  postFeedback(feedback: MailboxModel): Observable<any> {
    return this.http.post(this.SEND_FEEDBACK_URL, feedback);
  }

  ngOnInit() {
  }

}
