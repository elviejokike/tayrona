'use strict';

import type { Action } from '../actions/types';

export type Config = {
  setupReady: boolean
};

const initialState: Config = {
  setupReady: false
};

function setup(state: Config = initialState, action) {
  if (action.type === 'SETUP_READY') {
    return {
      setupReady: true
    };
  }
  return state;
}

module.exports = setup;
