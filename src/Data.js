class Cats {
  constructor() {
    this.like = 0;
    this.fun = 0;
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
  'The best is tho, a cozy box! The darkness and cozyness....Ummm...Nyan',
  'Enough talking! Stop talking to me otherwise I\'ll scratch your face, Nyan'
];

const talkingImage = {
 0: require('./images/Talk/talk0.gif'),
 1: require('./images/Talk/talk1.gif'),
 2: require('./images/Talk/talk2.gif'),
 3: require('./images/Talk/talk3.gif'),
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
  0: require('./images/Food/food0.gif'),
  1: require('./images/Food/food1.gif'),
  2: require('./images/Food/food2.gif'),
  3: require('./images/Food/food3.gif'),
  4: require('./images/Food/food4.gif'),
  5: require('./images/Food/food5.gif'),
};

const snackImage = {
  0: require('./images/snack.gif')
}

const playTime = [
  'Nyan! Play Time!',
  'Nyan! Yes! I love playing!',
  'Nyan! Faster! Higher!',
  'Nyan! That\'s it? Do it more!',
  'Nyan! Can you do better?',
  'Okay I\'m tired now. Stop!'
];

const playingImage = {
  0: require('./images/Play/play0.gif'),
  1: require('./images/Play/play1.gif'),
  2: require('./images/Play/play2.gif'),
};  

const dating = [
  'Nyan, where do you wanna go?',
  'The weather looks really nice. Sunny and Warm!',
  'Bring me to a fun place, Nyan.'
];

const places = {
  lake: {
    url: require('./images/Dates/lake.gif'),
    talks: [
      'Nyan! I hate water!',
      'Are you going fishing?',
      'Nyan! We got a huge tuna!',
      'We didn\'t catch anything...Nyan(sigh)'
    ]
  },
  animalPark: {
    url: require('./images/Dates/park.gif'),
    talks: [
      'Nyan! There are so many dogs!',
      'What is this dog doing? It\'s waving its tail. This is freaking me out.',
      'I\'m going to scratch this dog\'s face!',
      'Nyan, this cat smells....good...'
    ]
  },
  catCafe: {
    url: require('./images/Dates/cafe1.gif'),
    talks: [
      'Nyan! So many cats!',
      'This place has a lot of cat towers. I love it',
      'Nyan, you better protect me from other cats. They\'re annoying.',
      'I\'m going to take a nap here...Nyan..'
    ]
  },
  forest: {
    url: require('./images/Dates/forest.gif'),
    talks: [
      'Nyan! Everything is green!',
      'Look! Birds! I\'m going to follow them.',
      'Can I attack the birds? Yes?',
      'Too many bugs here. Nyan'
    ]
  },
  karaoke: {
    url: require('./images/Dates/karaoke.gif'),
    talks: [
      'Nyan! I love karaoke! :D',
      'Nyan~~ Nyan~~~~ Nyaaaan~~',
      'Nyaaaaaaaan~~~~~~~~~',
      'What? I\'m not finished yet. Next song!'
    ]
  }
};

const endings = {
  happy: {
    title: 'You two are Nyanmates!',
    comment: 'Congrats! Your cat loves you so much! Hopefully happily ever after...',
    url: require('./images/Ending/happy.gif'),
  },
  died: {
    title: 'Your cat died!',
    comment: 'Oh no! You are so terrible!', 
    url: require('./images/Ending/died.jpg'),
  },
  cheat: {
    title: 'Your cat cheated on you',
    comment: 'I\'m sorry. Your cat fell in love with someone else...',
    url: require('./images/Ending/cheat.gif'),
  },
  kidnapped: {
    title: 'Your cat got kidnapped!',
    comment: 'Your cat is gone! It looks like someone kidnapped your cat...',
    url: require('./images/Ending/kidnapped.gif'),
  }, 
  druggy: {
    title: 'Your cat is a druggy now',
    comment: 'What did you do to your cat? Your cat became a catnip addict!',
    url: require('./images/Ending/druggy.gif'),
  },
  transform: {
    title: 'Your cat transformed to a special being',
    comment: 'Whoa! Your cat is now your master. Behave yourself!',
    url: require('./images/Ending/transform.gif'),
  }
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
  places,
  endings
};

