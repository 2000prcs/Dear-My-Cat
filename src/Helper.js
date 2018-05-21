class Cats {
  constructor() {
    this.like = 0;
    this.hate = 0;
    this.health = 0;
    this.addict = 0;
  }
}

const Images = [
  [
  {
    type: 'Beautiful',
    url: require('./images/Cats/Beautiful.png')
  },
  {
    type: 'Cute',
    url: require('./images/Cats/Cute.png')
  },
  {
    type: 'Dangerous',
    url: require('./images/Cats/Dangerous.png')
  }
],
[
  {
    type: 'Funny',
    url: require('./images/Cats/Funny.png')
  },
  {
    type: 'Geeky',
    url: require('./images/Cats/Geeky.png')
  },
  {
    type: 'Sexy',
    url: require('./images/Cats/Sexy.png')
  }
],
[
  {
    type: 'Smart',
    url: require('./images/Cats/Smart.png')
  },
  // {
  //   type: 'Stoic',
  //   uri: require('./images/Cats/Stoic.png')
  // },
    {
    type: 'Kind',
    url: require('./images/Cats/Kind.png')
  },
  { 
    type: 'Artistic',
    url: require('./images/Cats/Artistic.png')
  },
  // {
  //   type: 'Wealthy',
  //   uri: require('./images/Cats/Wealthy.png')
  // }
]
];

const talks = [
  'Nyan! I guess you wanna talk with me?',
  'Fine. What do you want?',
  'I love fish. Fish is the best food in the world!',
  'When I\'m bored, I hunt a mouse or a bird. You should try it too! It\'s super fun.',
  'Nyan, do you wanna talk more? Fine.',
  'Sometimes I go out and walk around this neighborhood. A little exercise? Nyan',
  'I like to lay down and enjoy the sunshine. It feels so good...',
  'The best is tho, a cozy box! The darkness and cozyness....Ahhh...Nyan',
  'Enough talking! Stop talking to me otherwise I\'ll scratch your face, Nyan'
];

const talkingImage = {
 talk0: require('./images/Talk/talk0.gif'),
 talk1: require('./images/Talk/talk1.gif'),
 talk2: require('./images/Talk/talk2.gif'),
 talk3: require('./images/Talk/talk3.gif'),
};

const feedTime = [
  'Nyan! I\'ve been waiting for it! Why are you so slow?',
  'I was so hungry, Nyan',
  'Do you have fatty tuna?',
  'Do you have salmon? I want a king salmon.',
  'This is it? I want more food! Nyan!',
  'Good job. You are a pretty good human',
  'Enough. I\'m full, Nyan'
];

const feedingImage = {
  food0: require('./images/Food/food0.gif'),
  food1: require('./images/Food/food1.gif'),
  food2: require('./images/Food/food2.gif'),
  food3: require('./images/Food/food3.gif'),
  food4: require('./images/Food/food4.gif'),
  food5: require('./images/Food/food5.gif'),
};

const snackImage = require('./images/snack.gif');


const playTime = [
  'Nyan! Play Time!',
  'Nyan! Yes! I love playing!',
  'Nyan! Faster! Higher!',
  'Nyan! That\'s it? Do it more!',
  'Nyan! Can you do better?',
  'Okay I\'m tired now. Stop!'
];

const playingImage = require('./images/play.gif');

const dating = [
  'Nyan, where do you wanna go?',
  'The weather looks really nice. Sunny and Warm!',
  'Bring me to a fun place, Nyan.'
];

const places = {
  lake: [
    'Nyan! I hate water!',
    'Are you going to do fishing?',
    'Nyan! We got a huge tuna!',
    'Nothing...Nyan'
  ],
  animalPark: [
    'Nyan! There are so many dogs!',
    'What is this dog doing? It\'s waving its tail. This is freaking me out.',
    'I\'m going to scratch this dog\'s face!',
    'Nyan, this cat smells....good...'
  ],
  catCafe: [
    'Nyan! So many cats!',
    'This place has a lot of cat towers. I love it',
    'Nyan, you better protect me from other cats. They\'re annoying.',
    'I\'m going to take a nap here...Nyan..'
  ],
  forest: [
    'Nyan! Everywhere is green!',
    'Look! Birds! I\'m going to follow them.',
    'Can I attach the bird? Yes?',
    'Too many bugs here. Nyan'
  ],
  karaoke: [
    'Nyan! I love karaoke! :D',
    'Nyan~~ Nyan~~~~ Nyaaaan~~',
    'Nyaaaaaaaan~~~~~~~~~',
    'What? I\'m not finished yet. Next song!'
  ]
};

module.exports = {
  Cats,
  Images,
  talks,
  talkingImage,
  feedTime,
  feedingImage,
  snackImage,
  playTime,
  playingImage,
  dating,
  places
};

