import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create TODO', props<{text: string}>());

export const toggle = createAction('[TODO] Toogle TODO', props<{id: number}>());

export const edit = createAction('[TODO] Edit TODO', props<{id: number, text: string}>());

export const deleteTodo = createAction('[TODO] Delete TODO', props<{id: number}>());

export const toggleAll = createAction('[TODO] Toogle All TODO', props<{complete: boolean}>());

export const clearComplete = createAction('[TODO] clear Complete TODO');
