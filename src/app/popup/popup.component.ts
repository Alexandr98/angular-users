import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  registerForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private formBuilder: FormBuilder) { }

    onNoClick(): void {
      this.dialogRef.close();
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
          address: ['', Validators.required],
          about: ['', Validators.required],
      });
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
}

}
