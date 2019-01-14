import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../popup/popup.component';
import { UserComponent } from '../user/user.component';
import { UsersService } from '../services';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() public users$: Observable<any[]>;
  constructor(public dialog: MatDialog,
    private users: UsersService) { }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      height: '500px',
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openDialogDetails(id): void {
    this.users.getUsers().subscribe(val => console.log('DATA==>',val));
    this.users$ = this.users.getUserById(id);
    const dialogRef = this.dialog.open(UserComponent, {
      height: '500px',
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
