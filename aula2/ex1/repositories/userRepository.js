const users = [
  {
    name: "John Doe",
    age: 30,
    email: "john@email.com",
  },
];

const getAll = () => {
  return users;
};

const create = (user) => {
  users.push(user);
  return user;
};

module.exports = {
  getAll,
  create,
};
