type USERS = Record<string, string>
const users: USERS[] = [
  {
    username: 'test',
    password: 'test123',
    email: 'test@test.com',
    jurisdiction: 'sells',
  },
  {
    username: 'jelly',
    password: 'jelly123',
    email: 'jelly@jelly.com',
    jurisdiction: 'customer',
  },
  {
    username: 'founded',
    password: 'founded123',
    email: 'founded@founded.com',
    jurisditction: 'power',
  },
]
export { users, USERS }
