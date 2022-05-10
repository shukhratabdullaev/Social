import { profileReducer, addPostAC, deletePost } from './../Redux/profile-reducer';


it('length of post should be incremented', () => {
  // 1. test data
  const action = addPostAC('it-kamasutra.com');
  const state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It\'s my first post?', likesCount: 11 },
      { id: 3, message: 'blabla', likesCount: 11 },
      { id: 4, message: 'Da da', likesCount: 11 },
    ],
    profile: {
      fullName: '',
      userId: null,
      photos: {
        small: '',
        large: ''
      },
      lookingForAJobDescription: '',
      aboutMe: ''
    },
    status: '',
  };

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it(`message of new post should be correct`, () => {
  // 1. test data
  const action = addPostAC('it-kamasutra.com');
  const state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It\'s my first post?', likesCount: 11 },
      { id: 3, message: 'blabla', likesCount: 11 },
      { id: 4, message: 'Da da', likesCount: 11 },
    ],
    profile: {
      fullName: '',
      userId: null,
      photos: {
        small: '',
        large: ''
      },
      lookingForAJobDescription: '',
      aboutMe: ''
    },
    status: '',
  };

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe('it-kamasutra.com');
});

it(`after deleting length of messages should be decrement`, () => {
  // 1. test data
  const action = deletePost(1);
  const state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It\'s my first post?', likesCount: 11 },
      { id: 3, message: 'blabla', likesCount: 11 },
      { id: 4, message: 'Da da', likesCount: 11 },
    ],
    profile: {
      fullName: '',
      userId: null,
      photos: {
        small: '',
        large: ''
      },
      lookingForAJobDescription: '',
      aboutMe: ''
    },
    status: '',
  };

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if postId is incorrect`, () => {
  // 1. test data
  const action = deletePost(100);
  const state = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It\'s my first post?', likesCount: 11 },
      { id: 3, message: 'blabla', likesCount: 11 },
      { id: 4, message: 'Da da', likesCount: 11 },
    ],
    profile: {
      fullName: '',
      userId: null,
      photos: {
        small: '',
        large: ''
      },
      lookingForAJobDescription: '',
      aboutMe: ''
    },
    status: '',
  };

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});
