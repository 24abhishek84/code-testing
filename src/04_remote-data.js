/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
const got = require('got');

const solution = async () => {
  try {
    const todos = await got('https://jsonplaceholder.typicode.com/todos');
    const todosList = JSON.parse(todos.body);
    const users = await got('https://jsonplaceholder.typicode.com/users');
    const usersList = JSON.parse(users.body);
    const completedUsersList = usersList.map(user => {
      const userInToDo = todosList.find(x => x.id === user.id);
      const completedStatus = userInToDo.completed ? 1 : 0;
      return {username: user.username, completed: completedStatus}
    });
    return completedUsersList;
  } catch (error) {
    console.error(error);
  }
}

module.exports = solution
