import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage implements OnInit {
  public form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      parameterName: new FormControl(20, [
        Validators.required,
        Validators.min(0),
        Validators.max(100)
      ])
    });

    this.form.patchValue({ parameterName: 22 });
    console.log(this.form.get("parameterName").value);
    console.log(this.form.get("parameterName").invalid);

    this.form.patchValue({ parameterName: undefined });
    console.log(this.form.get("parameterName").value);
    console.log(this.form.get("parameterName").invalid); // is valid

    this.form.patchValue({ parameterName: 101 }); // invalid value
    console.log(this.form.get("parameterName").value);
    console.log(this.form.get("parameterName").invalid);

    this.form.patchValue({ parameterName: null });
    console.log(this.form.get("parameterName").value);
    console.log(this.form.get("parameterName").invalid); // is invalid

    this.form.valueChanges.subscribe(value => {
      console.log(value);
      console.log(this.form.get("parameterName").invalid);
    });
  }
  constructor(private formBuilder: FormBuilder) {}
}
