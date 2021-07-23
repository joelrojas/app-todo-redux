import { createAction, props } from '@ngrx/store';

export type validFilters = 'todos' | 'completados' | 'pendientes';
export const setfilter = createAction('[Filtro] set Filtro', props<{ filter: validFilters}>());
