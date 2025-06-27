const UserController = require("./user-controller");
const User = require("./user");
const { add } = require("../calculator/calculator");

const userController = new UserController();

test('add user to userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);    
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {    
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);    
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('Funncion findbyemail', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user); 
  expect(userController.findByEmail("santiago@generation.org")).toStrictEqual(user);
});

test('Funncion findbyemail', () => {
  let user = new User(12345,"Alejandro", "Alejandro@generation.org");
  userController.add(user); 
  expect(userController.findByEmail("Alejandro@generation.org")).toStrictEqual(user);
});


test('Funcion findById', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.findById(1234)).toStrictEqual(user);
})

test('Funcion findById', () => {
  let user = new User(123456,"Alejandro", "Alejandro@generation.org");
  userController.add(user);
  expect(userController.findById(123456)).toStrictEqual(user);
})