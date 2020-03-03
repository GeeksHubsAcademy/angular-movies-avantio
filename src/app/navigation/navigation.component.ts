import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  savedLength = 0;
  constructor(private storage: StorageService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.savedLength = this.storage.getLength();
    }, 3000);
  }
}
