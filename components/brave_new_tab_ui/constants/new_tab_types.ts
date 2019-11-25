/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

export const enum types {
  BOOKMARK_ADDED = '@@newtab/BOOKMARK_ADDED',
  BOOKMARK_REMOVED = '@@newtab/BOOKMARK_REMOVED',
  NEW_TAB_TOP_SITES_DATA_UPDATED = '@@newtab/NEW_TAB_TOP_SITES_DATA_UPDATED',
  NEW_TAB_SITE_PINNED = '@@newtab/NEW_TAB_SITE_PINNED',
  NEW_TAB_SITE_UNPINNED = '@@newtab/NEW_TAB_SITE_UNPINNED',
  NEW_TAB_SITE_IGNORED = '@@newtab/NEW_TAB_SITE_IGNORED',
  NEW_TAB_UNDO_SITE_IGNORED = '@@newtab/NEW_TAB_UNDO_SITE_IGNORED',
  NEW_TAB_UNDO_ALL_SITE_IGNORED = '@@newtab/NEW_TAB_UNDO_ALL_SITE_IGNORED',
  NEW_TAB_SITE_DRAGGED = '@@newtab/NEW_TAB_SITE_DRAGGED',
  NEW_TAB_SITE_DRAG_END = '@@newtab/NEW_TAB_SITE_DRAG_END',
  NEW_TAB_HIDE_SITE_REMOVAL_NOTIFICATION = '@@newtab/NEW_TAB_HIDE_SITE_REMOVAL_NOTIFICATION',
  NEW_TAB_BOOKMARK_INFO_AVAILABLE = '@@newtab/NEW_TAB_BOOKMARK_INFO_AVAILABLE',
  NEW_TAB_GRID_SITES_UPDATED = '@@newtab/NEW_TAB_GRID_SITES_UPDATED',
  NEW_TAB_STATS_UPDATED = '@@newtab/NEW_TAB_STATS_UPDATED',
  NEW_TAB_PRIVATE_TAB_DATA_UPDATED = '@@newtab/NEW_TAB_PRIVATE_TAB_DATA_UPDATED',
  NEW_TAB_PREFERENCES_UPDATED = '@@newtab/NEW_TAB_PREFERENCES_UPDATED',
  NEW_TAB_SET_INITIAL_DATA = '@@newtab/NEW_TAB_SET_INITIAL_DATA',
  // Rewards Widget
  CREATE_WALLET = '@@newtab/CREATE_WALLET',
  DISMISS_NOTIFICATION = '@@newtab/DISMISS_NOTIFICATION',
  ON_ADS_ENABLED = '@@newtab/ON_ADS_ENABLED',
  ON_ADS_ESTIMATED_EARNINGS = '@@newtab/ON_ADS_ESTIMATED_EARNINGS',
  ON_ENABLED_MAIN = '@@newtab/ON_ENABLED_MAIN',
  ON_REWARDS_SETTING_SAVE = '@@newtab_panel/ON_SETTING_SAVE',
  ON_WALLET_INITIALIZED = '@@newtab/ON_WALLET_INITIALIZED',
  ON_BALANCE_REPORTS = '@@newtab/ON_BALANCE_REPORTS',
  ON_PROMOTIONS = '@@newtab/ON_PROMOTIONS',
  ON_PROMOTION_FINISH = '@@newtab/ON_PROMOTION_FINISH',
  ON_BALANCE = '@@newtab/ON_BALANCE',
  ON_WALLET_EXISTS = '@@newtab/ON_WALLET_EXISTS',
  SET_INITIAL_REWARDS_DATA = '@@newtab/SET_INITIAL_REWARDS_DATA',
  SET_PRE_INITIAL_REWARDS_DATA = '@@newtab/SET_PRE_INITIAL_REWARDS_DATA',
  // Binance Widget
  SET_API_KEYS = '@@newtab/SET_API_KEYS',
  ON_BINANCE_BALANCE = '@@newtab/ON_BINANCE_BALANCE',
  SET_HIDE_BALANCE = '@@newtab/SET_HIDE_BALANCE',
  CONNECT_TO_BINANCE = '@@newtab/CONNECT_TO_BINANCE'
}
