class Cats {
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


module.exports.Cats = Cats;
module.exports.Images = Images;
