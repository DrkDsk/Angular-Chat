import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-users-type',
  templateUrl: './users-type.component.html',
  styleUrls: ['./users-type.component.css'],
})
export class UsersTypeComponent implements OnInit {
  public formMessage = new FormGroup({
    message: new FormControl(''),
  });

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  sendMessage(): void {
    const { message} = this.formMessage.value;
    this.chatService.sendMessage({message });
    this.formMessage.controls['message'].reset();
  }
}
