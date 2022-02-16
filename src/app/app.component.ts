import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = " bro" ;
  isShow = false;

  toggleStatus() {
    this.isShow = !this.isShow;
  }
}
