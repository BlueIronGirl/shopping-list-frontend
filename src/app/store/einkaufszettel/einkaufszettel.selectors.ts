import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromEinkaufszettel from './einkaufszettel.reducer';

export const selectEinkaufszettelState = createFeatureSelector<fromEinkaufszettel.State>(
  fromEinkaufszettel.einkaufszettelFeatureKey
);

export const selectAllEinkaufszettel = createSelector(
  selectEinkaufszettelState,
  state => state.einkaufszettel
);

export const selectEinkaufszettelById = (einkaufszettelId: number) => createSelector(
  selectEinkaufszettelState,
  state => {
    return state.einkaufszettel[state.einkaufszettel.findIndex(einkaufszettel => einkaufszettel.id === einkaufszettelId)];
  }
)

export const selectArtikelById = (einkaufszettelId: number, artikelId: number) => createSelector(
  selectEinkaufszettelState,
  state => {
    // @ts-ignore
    return state.einkaufszettel[state.einkaufszettel.findIndex(einkaufszettel => einkaufszettel.id === einkaufszettelId)].artikels.filter(artikel => artikel.id === artikelId)[0];
  }
)

export const selectAllUsers = createSelector(
  selectEinkaufszettelState,
  state => state.users
);

export const selectAllUsersFriends = createSelector(
  selectEinkaufszettelState,
  state => state.usersFriends
);

export const selectAllRoles = createSelector(
  selectEinkaufszettelState,
  state => state.roles
);

export const selectAllArtikelArchiv = createSelector(
  selectEinkaufszettelState,
  state => state.artikelsArchiv
);
