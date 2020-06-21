/**
 * DON'T TOUCH THIS FILE - IT'S MY TASK
 * @author Usman Suleiman @Usman
 * Story title: TEST:User Model
 * Ticket Id: #45803
 * URL https://app.clubhouse.io/startng/story/45803/test-user-model
 */
const dbHandler = require('./db-handler');
const userService = require('../src/services/UserService');
const userModel = require('../src/models/User');

// Connect to a test databse before running any tests.
beforeAll(async () => {
  await dbHandler.connect();
});

// clear all test data after every test.
afterEach(async () => {
  await dbHandler.clearDatabase();
});
// Remove and close the db and server.
afterAll(async () => {
  await dbHandler.closeDatabase();
});


describe('user', () => {
  it('can be created correctly', () => {
    expect(async () => {
      await userService.create(mockUser);
    })
      .not.toThrow();
  });

  it('can be unverified', () => {
    expect(async () => {
      await userService.create(unverifiedUser);
    }).not.toThrow();
  });

  it('requires a name, email, and password', async () => {
    await expect(async () => {
      await userService.create(noName);
    })
      .rejects
      .toThrow();

    await expect(async () => {
      await userService.create(noEmail);
    })
      .rejects
      .toThrow();

    await expect(async () => {
      await userService.create(noPassword);
    })
      .rejects
      .toThrow();
  });

  it('exists after being created', async () => {
    const newUser = await userService.create(mockUser3);
    const createdUser = await userModel.findOne({_id: newUser.uid });
    expect(createdUser.name).toBe(mockUser3.name);
  });

  it('can be updated correctly', async () => {
    const result = await userService.create(mockUser2);
    const filter = { _id: result.uid };
    const update = {
      name: 'Uzumaki Naruto'
    };
    const updated = await userModel.findOneAndUpdate(filter, update, { new: true });
    expect(updated.name).toBe(update.name);
  });

  it('should be deleted correctly', async () => {
    const result = await userService.create(mockUser4);
    const filter = { _id: result.uid };
    const operation = await userModel.deleteOne(filter);
    expect(operation.ok).toBe(1);
  });
});

const mockUser = {
  name: 'Usman Suleiman',
  email: 'usmansbk1@gmail.com',
  password: 'ittadakimasu',
  number: '1234567890',
  address: 'home',
  verified: true
};

const mockUser2 = {
  name: 'Usman Suleiman',
  email: 'usmansbkx@gmail.com',
  password: 'ittadakimasu',
  number: '1234567890',
  address: 'home',
  verified: true
};

const mockUser3 = {
  name: 'Usman Suleiman',
  email: 'usmansbky@gmail.com',
  password: 'ittadakimasu',
  number: '1234567890',
  address: 'home',
  verified: true
};

const mockUser4 = {
  name: 'Usman Suleiman',
  email: 'usmansbkz@gmail.com',
  password: 'ittadakimasu',
  number: '1234567890',
  address: 'home',
  verified: true
};

const unverifiedUser = {
  name: 'Usman moon',
  email: 'usmansbk2@gmail.com',
  password: 'alacakazm',
  number: '1234567890',
  address: 'home',
};

const noName = {
  email: 'usmansbk3@gmail.com',
  password: 'ittadakimasu',
  number: '1234567890',
  verified: true,
  address: 'home'
};

const noEmail = {
  name: 'Usman Suleiman',
  password: 'ittadakimasu',
  number: '1234567890',
  address: 'home',
  verified: true
};

const noPassword = {
  name: 'Usman Suleiman',
  email: 'usmansbk1@gmail.com',
  number: '1234567890',
  address: 'home',
  verified: true
};