var expect = require('expect');

var TodoAPI = require('TodoApi');

describe('TodoAPI', ()=> {
  beforeEach(()=> {
    localStorage.removeItem('todos');
  });
  it('should exist', ()=> {
    expect(TodoAPI).toExist();
  });
  describe('Set Todos', ()=> {
    it('should set valid todos array', ()=>  {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }]
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid todos array', ()=> {
      var badTodos = {a:'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });
  describe('Get Todos', ()=> {
    it('should return empty array for bad LS data', ()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todos if valid array in localstorage', ()=> {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    })
  });
  describe('Filter Todos', () => {
    let todos = [{
      id: 1,
      text: 'some text',
      completed: true
    }, {
      id: 2,
      text: 'other text',
      completed: false
    }, {
      id: 3,
      text: 'more text',
      completed: true
    }
  ];
    it('should return all items if showCompleted true', ()=> {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });
    it('should return only non completed items when showCompleted is false', ()=> {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });
    it ('should sort by completed status', ()=> {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });
    it ('should return all items if searchText is blank', ()=> {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should only return items containing search term', ()=> {
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'more');
      expect(filteredTodos.length).toBe(1);
    })
  });
});