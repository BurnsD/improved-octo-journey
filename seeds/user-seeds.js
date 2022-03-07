const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'John Doe',
    email: 'Jdoe@gmail.com',
    password: 'password'
  },
  {
    username: 'Jane Doe',
    email: 'JaneDoe@gmail.com',
    password: 'password'
  },
  {
    username: 'TorstenFyre',
    email: 'VikingofNowhere@gmail.com',
    password: 'password'
  },
  {
    username: 'Thisisnotatest',
    email: 'test@gmail.com',
    password: 'password'
  },
  {
    username: 'Thisisatest',
    email: 'thisisnotatest@gmail.com',
    password: 'password'
  },
  {
    username: 'genereicusername',
    email: 'EmAiL@gmail.com',
    password: 'password'
  },
  {
    username: 'GarfieldStoleMyLunch',
    email: 'ilovepasta@gmail.com',
    password: 'password'
  },
  {
    username: 'Luke_Imyapops',
    email: 'DeathStar@gmail.com',
    password: 'password'
  },
  {
    username: 'DoEsThIsWoRk',
    email: 'outofideas@gmail.com',
    password: 'password'
  },
  {
    username: 'Imaseedanddontknowit',
    email: 'imarealemial@gmail.com',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;