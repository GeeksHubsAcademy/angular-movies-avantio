import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  savedLength : number;
  constructor(private storage: StorageService) {}

  ngOnInit(): void {
   this.storage.observableLength.subscribe((data: number) => {
     this.savedLength = data;
   });
  }
}
