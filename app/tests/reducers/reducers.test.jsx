var expect = require('expect');
var reducers  = require('reducers');
var df = require('deep-freeze-strict');

describe('reducers', ()=> {
  describe('searchText reducer', ()=> {
    it('should set search text', ()=> {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    })
  });
  describe('showCompleted reducers', ()=> {
    it('should flip show completed status', ()=> {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    })
  })
})