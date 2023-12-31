import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {MessageService} from "primeng/api";
import {EinkaufszettelActions} from "./store/einkaufszettel/einkaufszettel.actions";
import {selectLogin} from "./store/einkaufszettel/einkaufszettel.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // adminModus = false;
  logoutButtonRendered = false;

  constructor(private store: Store, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.store.select(selectLogin).subscribe(user => this.logoutButtonRendered = user != null);
  }

  archiviereGekaufteArtikel() {
    this.store.dispatch(EinkaufszettelActions.archiviereArtikel());
  }

  logout() {
    this.store.dispatch(EinkaufszettelActions.logout());
  }
}
