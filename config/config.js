module.exports = {

  /** LEDs pin */
  ledsPin: '12',

  /** Motion sensor pin */
  motionPin: '7',

  /** JWT signing secret */
  secretJWT: '$$/SOME_SECRET/$$',

  /** Needed sound paths */
  sound: {
    'ringUrl': './sounds/ring.mp3',
    'alarmUrl': './sounds/alarm.mp3'
  },

  /** Available songs types */
  songsTypes: [
    'Recommended',
    'Pop',
    'Jazz',
    'Rock',
    'Blues',
    'Techno',
    'Country',
    'Classical',
    'Electronic'
  ],

  /** Storing temporary statistics */
  stats: {
    'songsToday': 0
  },

  /** Songs list for first time run */
  songsList: [
    {
      "title": "Feel it still",
      "length": 175,
      "type": 1,
      "url": "http://pierreraii.com/cdn/Feel-It-Still.mp3"
    },
    {
      "title": "Say Nada (Remix)",
      "length": 180,
      "type": 1,
      "url": "http://pierreraii.com/cdn/Say-Nada.mp3"
    },
    {
      "title": "Cool kids",
      "length": 164,
      "type": 1,
      "url": "http://pierreraii.com/cdn/Cool-Kids.mp3"
    },
    {
      "title": "Baker street",
      "length": 150,
      "type": 2,
      "url": "http://pierreraii.com/cdn/Baker-Street.mp3"
    },
    {
      "title": "Take five",
      "length": 190,
      "type": 2,
      "url": "http://pierreraii.com/cdn/Take-Five.mp3"
    },
    {
      "title": "Equinox",
      "length": 181,
      "type": 2,
      "url": "http://pierreraii.com/cdn/Equinox.mp3"
    },
    {
      "title": "Sympathy for the devil",
      "length": 174,
      "type": 3,
      "url": "http://pierreraii.com/cdn/Sympathy-For-The-Devil.mp3"
    },
    {
      "title": "Fortunate son",
      "length": 159,
      "type": 3,
      "url": "http://pierreraii.com/cdn/Fortunate-Son.mp3"
    },
    {
      "title": "That's all",
      "length": 188,
      "type": 3,
      "url": "http://pierreraii.com/cdn/Thats-All.mp3"
    },
    {
      "title": "Deep deep water",
      "length": 200,
      "type": 4,
      "url": "http://pierreraii.com/cdn/Baker-Street.mp3"
    },
    {
      "title": "Stormy monday blues",
      "length": 170,
      "type": 4,
      "url": "http://pierreraii.com/cdn/Stormy-Monday-Blues.mp3"
    },
    {
      "title": "Broken hearted blues",
      "length": 183,
      "type": 4,
      "url": "http://pierreraii.com/cdn/Broken-Hearted-Blues.mp3"
    },
    {
      "title": "Stella",
      "length": 120,
      "type": 5,
      "url": "https://geo-samples.beatport.com/track/3d96d169-fd78-4e18-bb2b-f3bfd4a3eb1c.LOFI.mp3"
    },
    {
      "title": "Strand",
      "length": 120,
      "type": 5,
      "url": "https://geo-samples.beatport.com/track/1dd2f50a-4c49-4bde-8d49-fd3729df5414.LOFI.mp3"
    },
    {
      "title": "Pop (Stephan Vincent Remix)",
      "length": 120,
      "type": 5,
      "url": "https://geo-samples.beatport.com/track/0fd5bec3-7f5a-4c7a-8880-b0dfe0ee0621.LOFI.mp3"
    },
    {
      "title": "Bebe Rexha - Meant to Be (feat. Florida Georgia Line)",
      "length": 178,
      "type": 6,
      "url": "http://files.sergeharb.com/songs/country/Bebe%20Rexha%20-%20Meant%20to%20Be%20(feat.%20Florida%20Georgia%20Line).mp3"
    },
    {
      "title": "Keith Urban - The Fighter ft. Carrie Underwood",
      "length": 187,
      "type": 6,
      "url": "http://files.sergeharb.com/songs/country/Keith%20Urban%20-%20The%20Fighter%20ft.%20Carrie%20Underwood.mp3"
    },
    {
      "title": "Luke Bryan - Light It Up",
      "length": 177,
      "type": 6,
      "url": "http://files.sergeharb.com/songs/country/Luke%20Bryan%20-%20Light%20It%20Up%20(Audio).mp3"
    },
    {
      "title": "Schubert - Marche Militaire Nr 1",
      "length": 296,
      "type": 7,
      "url": "http://files.sergeharb.com/songs/classical/Schubert%20-%20Marche%20Militaire%20Nr%201%20(arr%20P%20Breiner)%20-%20Best-of%20Classical%20Music.mp3"
    },
    {
      "title": "Tchaikovsky - Piano Concerto No 1, B Flat Minor, Op 23 open",
      "length": 250,
      "type": 7,
      "url": "http://files.sergeharb.com/songs/classical/Tchaikovsky%20-%20Piano%20Concerto%20No%201,%20B%20Flat%20Minor,%20Op%2023%20open%20-%20Best-of%20Classical%20Music.mp3"
    },
    {
      "title": "Handel - Messiah Hallelujah Chorus",
      "length": 259,
      "type": 7,
      "url": "http://files.sergeharb.com/songs/classical/Handel%20-%20Messiah%20Hallelujah%20Chorus%20-%20London%20Philharmonic%20Orchestra%20%20Chorus%2C%20John%20Pritchard.mp3"
    },
    {
      "title": "Avicii - You Make Me",
      "length": 162,
      "type": 8,
      "url": "http://files.sergeharb.com/songs/electronic/Avicii%20-%20You%20Make%20Me%20(Avicii%20by%20Avicii).mp3"
    },
    {
      "title": "Calvin Harris - I Need Your Love ft. Ellie Goulding",
      "length": 226,
      "type": 8,
      "url": "http://files.sergeharb.com/songs/electronic/Calvin%20Harris%20-%20I%20Need%20Your%20Love%20ft.%20Ellie%20Goulding.mp3"
    },
    {
      "title": "David Guetta - Shot Me Down ft. Skylar Grey",
      "length": 192,
      "type": 8,
      "url": "http://files.sergeharb.com/songs/electronic/David%20Guetta%20-%20Shot%20Me%20Down%20ft.%20Skylar%20Grey%20(Lyrics%20Video).mp3"
    }
  ]
}