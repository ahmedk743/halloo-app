import images from './images';
const dummyData = {
  chatItems: [
    {
      id: 1,
      name: 'Angela',
      profPic: images.avatar,
      online: true,
      lastMsg: 'This is last msg',
      lastMsgTime: '23:00',
      typing: false,
      newMsg: true,
      chats: [
        {
          id: 1,
          sent: true,
        },
        {
          id: 2,
          sent: false,
        },
        {
          id: 3,
          sent: true,
        },
        {
          id: 4,
          sent: false,
        },
        {
          id: 5,
          sent: true,
        },
        {
          id: 6,
          sent: false,
        },
        {
          id: 7,
          sent: false,
        },
        {
          id: 8,
          sent: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Jessica',
      profPic: images.avatar,
      online: true,
      lastMsg: 'This is last msg',
      lastMsgTime: '22:00',
      typing: true,
      newMsg: false,
      chats: [
        {
          id: 1,
          sent: true,
        },
        {
          id: 2,
          sent: false,
        },
        {
          id: 3,
          sent: true,
        },
        {
          id: 4,
          sent: false,
        },
        {
          id: 5,
          sent: true,
        },
        {
          id: 6,
          sent: false,
        },
        {
          id: 7,
          sent: false,
        },
        {
          id: 8,
          sent: true,
        },
      ],
    },
    {
      id: 3,
      name: 'Ex',
      profPic: images.avatar,
      online: false,
      lastMsg: 'This is last msg',
      lastMsgTime: '3:00',
      typing: false,
      newMsg: false,
      chats: [
        {
          id: 1,
          sent: true,
        },
        {
          id: 2,
          sent: false,
        },
        {
          id: 3,
          sent: true,
        },
        {
          id: 4,
          sent: false,
        },
        {
          id: 5,
          sent: true,
        },
        {
          id: 6,
          sent: false,
        },
        {
          id: 7,
          sent: false,
        },
        {
          id: 8,
          sent: true,
        },
      ],
    },
    {
      id: 4,
      name: 'Friend',
      profPic: images.avatar,
      online: true,
      lastMsg: 'This is last msg',
      lastMsgTime: '2:00',
      typing: false,
      newMsg: true,
      chats: [
        {
          id: 1,
          sent: true,
        },
        {
          id: 2,
          sent: false,
        },
        {
          id: 3,
          sent: true,
        },
        {
          id: 4,
          sent: false,
        },
        {
          id: 5,
          sent: true,
        },
        {
          id: 6,
          sent: false,
        },
        {
          id: 7,
          sent: false,
        },
        {
          id: 8,
          sent: true,
        },
      ],
    },
    {
      id: 5,
      name: 'Koi B',
      profPic: images.avatar,
      online: false,
      lastMsg: 'This is last msg',
      lastMsgTime: '23:00',
      typing: true,
      newMsg: true,
      chats: [
        {
          id: 1,
          sent: true,
        },
        {
          id: 2,
          sent: false,
        },
        {
          id: 3,
          sent: true,
        },
        {
          id: 4,
          sent: false,
        },
        {
          id: 5,
          sent: true,
        },
        {
          id: 6,
          sent: false,
        },
        {
          id: 7,
          sent: false,
        },
        {
          id: 8,
          sent: true,
        },
      ],
    },
  ],
};

export default dummyData;
