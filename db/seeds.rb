# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
users = []

users.push(User.create!({
  username: "Demo",
  email: "demo@gmail.com",
  password: "password"
}))

Video.destroy_all
videos = []

videos.push(
  Video.create!({
    title: "Baby, I Love Your Way",
    description: "Baby, I Love Your Way · Big Mountain ℗ 1994 Giant Records",
    video: URI.parse("https://www.dropbox.com/s/fc6mpn00sj9tl2k/Baby%2C%20I%20Love%20Your%20Way.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/o14u83r93shqy08/Baby%2C%20I%20Love%20Your%20Way.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)

videos.push(
  Video.create!({
    title: "Best Of My Love",
    description: "Best of My Love · The Emotions ℗ 1977 Columbia Records",
    video: URI.parse("https://www.dropbox.com/s/506188190p3aubn/Best%20of%20My%20Love.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/8sit7xlo4ka9fcg/Best%20of%20My%20Love.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)

videos.push(
  Video.create!({
    title: "Can We Talk",
    description: "Can We Talk · Tevin Campbell ℗ 1993 QWest Records",
    video: URI.parse("https://www.dropbox.com/s/4vghzg9pyk8y4c8/Can%20We%20Talk.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/smgnlb3tieui6m5/Can%20We%20Talk.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)

videos.push(
  Video.create!({
    title: "Can't Take My Eyes Off Of You",
    description: "Can't Take My Eyes Off You · Frankie Valli ℗ 2007 The Four Seasons Partnership",
    video: URI.parse("https://www.dropbox.com/s/p10uvwqahsly6cm/Can%27t%20Take%20My%20Eyes%20Off%20You.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/vvxi12rs0tf94t4/Can%27t%20Take%20My%20Eyes%20Off%20Of%20You.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)

videos.push(
  Video.create!({
    title: "Easy",
    description: "Easy · Commodores ℗ 1977 Motown Records",
    video: URI.parse("https://www.dropbox.com/s/0xrmi55q2tvehf2/Easy.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/mua0beskt2p70el/Easy.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)

videos.push(
  Video.create!({
    title: "I'll Be There",
    description: "I'll Be There · Jackson 5 ℗ 1970 Motown Records",
    video: URI.parse("https://www.dropbox.com/s/zisao7ejqm86dnb/I%27ll%20Be%20There.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/tlmpw6mtkfh1fqp/I%27ll%20Be%20There.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)

videos.push(
  Video.create!({
    title: "Me And Mrs. Jones",
    description: "Me and Mrs. Jones · Billy Paul ℗ 1972 Epic Records",
    video: URI.parse("https://www.dropbox.com/s/kjf0vj0jo496o2o/Me%20and%20Mrs.%20Jones.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/ismfcb7682d61k8/Me%20And%20Mrs.%20Jones.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)

videos.push(
  Video.create!({
    title: "One More Try",
    description: "One More Try (Remastered) · George Michael ℗ 2010 G.K. Panayiotou",
    video: URI.parse("https://www.dropbox.com/s/beu1hvcy8lvlxj7/One%20More%20Try.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/t1ou8h1vboe9unv/One%20More%20Try.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)

videos.push(
  Video.create!({
    title: "Reasons",
    description: "Reasons · Earth, Wind & Fire ℗ 1975 Columbia Records",
    video: URI.parse("https://www.dropbox.com/s/m3ypkgg3qu6ogd0/Reasons.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/lycodv8dp3c86qv/Reasons.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)

videos.push(
  Video.create!({
    title: "Shining Star",
    description: "Shining Star · The Manhattans ℗ 1980 Sony Music Entertainment",
    video: URI.parse("https://www.dropbox.com/s/gkmqvn3tqv6f99f/Shining%20Star.mp4?dl=0"),
    thumbnail: URI.parse("https://www.dropbox.com/s/g4xsbb6nfurg07z/Shining%20Star.png?dl=0"),
    user_id: all_users.sample.id,
    views: rand(10000000)
  })
)
