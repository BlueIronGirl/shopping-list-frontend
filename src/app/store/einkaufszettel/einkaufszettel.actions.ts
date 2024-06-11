import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {HttpErrorResponse} from "@angular/common/http";
import {Artikel} from "../../entities/artikel";
import {User} from "../../entities/user";
import {Einkaufszettel} from "../../entities/einkaufszettel";
import {Role} from "../../entities/role";

export const EinkaufszettelActions = createActionGroup({
  source: 'Einkaufszettel',
  events: {
    'Load Roles': emptyProps(),
    'Load Roles Success': props<{ data: Role[] }>(),
    'Load Roles Failure': props<{ error: HttpErrorResponse }>(),

    'Load Users': emptyProps(),
    'Load Users Success': props<{ data: User[] }>(),
    'Load Users Failure': props<{ error: HttpErrorResponse }>(),

    'Load Users Friends': emptyProps(),
    'Load Users Friends Success': props<{ data: User[] }>(),
    'Load Users Friends Failure': props<{ error: HttpErrorResponse }>(),

    'Update User': props<{ data: User }>(),
    'Update User Success': props<{ data: User }>(),
    'Update User Failure': props<{ error: HttpErrorResponse }>(),

    'Delete User': props<{ data: User }>(),
    'Delete User Success': props<{ data: User }>(),
    'Delete User Failure': props<{ error: HttpErrorResponse }>(),

    'Load Einkaufszettels': emptyProps(),
    'Load Einkaufszettels Success': props<{ data: Einkaufszettel[] }>(),
    'Load Einkaufszettels Failure': props<{ error: HttpErrorResponse }>(),

    'Create Einkaufszettel': props<{ data: Einkaufszettel }>(),
    'Create Einkaufszettel Success': props<{ data: Einkaufszettel }>(),
    'Create Einkaufszettel Failure': props<{ error: HttpErrorResponse }>(),

    'Update Einkaufszettel': props<{ data: Einkaufszettel }>(),
    'Update Einkaufszettel Success': props<{ data: Einkaufszettel }>(),
    'Update Einkaufszettel Failure': props<{ error: HttpErrorResponse }>(),

    'Delete Einkaufszettel': props<{ data: Einkaufszettel }>(),
    'Delete Einkaufszettel Success': props<{ data: Einkaufszettel }>(),
    'Delete Einkaufszettel Failure': props<{ error: HttpErrorResponse }>(),


    'Load Artikels': emptyProps(),
    'Load Artikels Success': props<{ data: Artikel[] }>(),
    'Load Artikels Failure': props<{ error: HttpErrorResponse }>(),

    'Create Artikel': props<{ einkaufszettelId: number, data: Artikel }>(),
    'Create Artikel Success': props<{ data: Artikel }>(),
    'Create Artikel Failure': props<{ error: HttpErrorResponse }>(),

    'Update Artikel': props<{ einkaufszettelId: number, data: Artikel }>(),
    'Update Artikel Success': props<{ data: Artikel }>(),
    'Update Artikel Failure': props<{ error: HttpErrorResponse }>(),

    'Delete Artikel': props<{ einkaufszettelId: number, data: Artikel }>(),
    'Delete Artikel Success': props<{ data: Artikel }>(),
    'Delete Artikel Failure': props<{ error: HttpErrorResponse }>(),

    'Archiviere Artikel': emptyProps(),
    'Archiviere Artikel Success': props<{ data: Artikel[] }>(),
    'Archiviere Artikel Failure': props<{ error: HttpErrorResponse }>(),


    'Load Archiv': emptyProps(),
    'Load Archiv Success': props<{ data: Artikel[] }>(),
    'Load Archiv Failure': props<{ error: HttpErrorResponse }>(),
  }
});
