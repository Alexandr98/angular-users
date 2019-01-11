import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public users$: Observable<any[]>;

  public constructor(private users: UsersService) { }

  public ngOnInit(): void {
    this.users$ = this.users.getUsers();
  }
}
