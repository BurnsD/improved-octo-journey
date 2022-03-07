const { Post } = require('../models');

const postdata = [
  {
    title: 'Post test 1',
    post_content: 'Content of post 1.',
    user_id: 1
  },
  {
    title: 'Post test 2',
    post_content: 'Content of post 2.',
    user_id: 2
  },
  {
    title: 'Post test 3',
    post_content: 'Content of post 3.',
    user_id: 3
  },
  {
    title: 'Post test 4',
    post_content: 'Content of post 4.',
    user_id: 4
  },
  {
    title: 'Post test 5',
    post_content: 'Content of post 5.',
    user_id: 5
  },
  {
    title: 'Post test 6',
    post_content: 'Content of post 6.',
    user_id: 1
  },
  {
    title: 'Post test 7',
    post_content: 'Content of post 7.',
    user_id: 1
  },
  {
    title: 'Post test 8',
    post_content: 'Content of post 8.',
    user_id: 1
  },
  {
    title: 'Post test 9',
    post_content: 'Content of post 9.',
    user_id: 1
  },
  {
    title: 'Post test 10',
    post_content: 'Content of post 10.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;