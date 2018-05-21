class Cat {
  constructor() {
    this.personality = null;
    this.like = null;
    this.hate = null;
    this.image = null;
  }
}

const Images = [
  [
  {
    type: 'Beautiful',
    uri: require('./images/Cats/Beautiful.png')
  },
  {
    type: 'Cute',
    uri: require('./images/Cats/Cute.png')
  },
  {
    type: 'Dangerous',
    uri: require('./images/Cats/Dangerous.png')
  }
],
[
  {
    type: 'Funny',
    uri: require('./images/Cats/Funny.png')
  },
  {
    type: 'Geeky',
    uri: require('./images/Cats/Geeky.png')
  },
  {
    type: 'Sexy',
    uri: require('./images/Cats/Sexy.png')
  }
],
[
  {
    type: 'Smart',
    uri: require('./images/Cats/Smart.png')
  },
  // {
  //   type: 'Stoic',
  //   uri: require('./images/Cats/Stoic.png')
  // },
    {
    type: 'Kind',
    uri: require('./images/Cats/Kind.png')
  },
  { 
    type: 'Artistic',
    uri: require('./images/Cats/Artistic.png')
  },
  // {
  //   type: 'Wealthy',
  //   uri: require('./images/Cats/Wealthy.png')
  // }
]
];


module.exports.Cat = Cat;
module.exports.Images = Images;
