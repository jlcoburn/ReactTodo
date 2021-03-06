var expect = require('expect');
var reducers  = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', ()=> {
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
  });

  describe('todosReducer', () => {
    it('should add new todo', ()=> {
      var action = {
        type: 'ADD_TODO',
        text: 'pet the cat'
      };
      var res = reducers.todosReducer(df([]), df(action));
      
      expect(res.length).toBe(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('should toggle completed', () => {
      var todos = [{
        id: '123',
        text: 'something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];     
 
      var action = {
        type: 'TOGGLE_TODO',
        id: '123',

      }

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    })
  });

  
});