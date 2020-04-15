import { DefaultRootState } from 'react-redux'
import { CSSProperties } from 'styled-components'

import imagePlaceholderSrc from '../assets/image-placeholder.jpg'
import { types } from './actionTypes'
import { COLORS_SCHEMA } from './constants'
import { APP_NAME } from 'common/constants'

const INITIAL_STATE = {
  loading: false,
  colors: COLORS_SCHEMA[0],
  fontFamily: 'Montserrat',
  fontSize: 60,
  foreText: 'This is',
  imageStage: imagePlaceholderSrc,
  mainText: 'Your best cover ever',
  playlistName: `Welcome to ${APP_NAME}`,
  playlistId: null,
  textAlign: 'left',
}

export type State = typeof INITIAL_STATE & {
  textAlign: CSSProperties['textAlign']
}

export interface Actions {
  type: types
  payload: string | number | State['colors']
  meta: keyof State
}

const reducer = (state = INITIAL_STATE, { type, payload, meta }: Actions) => {
  switch (type) {
    case types.UPDATE_EDITOR:
      return { ...state, [meta]: payload }

    default:
      return state
  }
}

// Selectors
const selectors = {
  getEditor: (state: DefaultRootState) => state.editor,
  getEditorLoading: (state: DefaultRootState) => state.editor.loading,
  getTextAlign: (state: DefaultRootState) => state.editor.textAlign,
  getFontFamily: (state: DefaultRootState) => state.editor.fontFamily,
  getPlaylistName: (state: DefaultRootState) => state.editor.playlistName,
}

export { reducer, selectors, INITIAL_STATE }