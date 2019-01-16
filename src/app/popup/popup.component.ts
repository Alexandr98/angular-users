import { Component, Inject, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Output() public toList: EventEmitter<any> = new EventEmitter();
  registerForm: FormGroup;
  public users$: Observable<any[]>;

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private formBuilder: FormBuilder
    ) { }

  addToList(item: any): void {
    console.log('SUCCESS!!');
      this.dialogRef.close();
      this.toList.emit(item);
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      balance: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      eyeColor: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      address: ['', Validators.required],
      about: ['', Validators.required]
    });
  }
}
