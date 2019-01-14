import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './services';
import { PopupComponent } from './popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  entryComponents: [PopupComponent, UserComponent],
  exports: [PopupComponent],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
