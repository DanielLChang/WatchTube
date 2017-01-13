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

5.times do
  username = Faker::Pokemon.name
  while User.find_by_username(username) do username = Faker::Pokemon.name end

  user = User.create({
      username: username,
      email: Faker::Internet.email(username),
      password: "password",
  })

  users.push(user) if user
end


Video.destroy_all
videos = []

videos.push(
  Video.create!({
    title: "Baby, I Love Your Way",
    description: "Baby, I Love Your Way · Big Mountain ℗ 1994 Giant Records",
    video_url: "http://res.cloudinary.com/danielcloud/video/upload/v1484281481/Baby_I_Love_Your_Way_txja9i.mp4",
    thumbnail_url: "http://res.cloudinary.com/danielcloud/video/upload/v1484281481/Baby_I_Love_Your_Way_txja9i.jpg",
    user_id: users.sample.id,
    views: rand(10000000)
  })
)
#
# videos.push(
#   Video.create!({
#     title: "Best Of My Love",
#     description: "Best of My Love · The Emotions ℗ 1977 Columbia Records",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/c_scale,h_360,w_640/v1484281367/Best_of_My_Love_vyjm9d.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484281367/Best_of_My_Love_vyjm9d.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Can We Talk",
#     description: "Can We Talk · Tevin Campbell ℗ 1993 QWest Records",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484281616/Can_We_Talk_rgdzrp.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484281616/Can_We_Talk_rgdzrp.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Can't Take My Eyes Off Of You",
#     description: "Can't Take My Eyes Off You · Frankie Valli ℗ 2007 The Four Seasons Partnership",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484281449/Can_t_Take_My_Eyes_Off_You_fqowz1.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484281449/Can_t_Take_My_Eyes_Off_You_fqowz1.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Easy",
#     description: "Easy · Commodores ℗ 1977 Motown Records",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484281379/Easy_pm41xo.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484281379/Easy_pm41xo.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "I'll Be There",
#     description: "I'll Be There · Jackson 5 ℗ 1970 Motown Records",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484281723/I_ll_Be_There_sgv2vu.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484281723/I_ll_Be_There_sgv2vu.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Me And Mrs. Jones",
#     description: "Me and Mrs. Jones · Billy Paul ℗ 1972 Epic Records",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484281767/Me_and_Mrs._Jones_ad18xt.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484281767/Me_and_Mrs._Jones_ad18xt.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "One More Try",
#     description: "One More Try (Remastered) · George Michael ℗ 2010 G.K. Panayiotou",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484281855/One_More_Try_knjcoh.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484281855/One_More_Try_knjcoh.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Reasons",
#     description: "Reasons · Earth, Wind & Fire ℗ 1975 Columbia Records",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484281776/Reasons_jd4cz3.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484281776/Reasons_jd4cz3.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Shining Star",
#     description: "Shining Star · The Manhattans ℗ 1980 Sony Music Entertainment",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484281843/Shining_Star_wlxetr.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484281843/Shining_Star_wlxetr.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "SpellBound",
#     description: "A lonely girl jealous of her perfect sister must save her after writing negative thoughts that unexpectedly transform into monsters. Created by the talented Ying Wu & Lizzia Xu, at Ringling College of Art and Design",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284022/SpellBound_fitwer.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284022/SpellBound_fitwer.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Jinky Jenkins & Lucky Lou",
#     description: "Check out this amazingly crafted, multi-award CGI animated winning short film by the talented Michael Bidinger and Michelle Kwon! -- When the chaotically misfortunate Jenkins and the monotonously lucky Lou run into each other one morning, they find a thrilling and fulfilling change of pace as they hurtle down the hills of San Francisco in an ice cream cart.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283629/Jinky_Jenkins_Lucky_Lou_grfclp.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283629/Jinky_Jenkins_Lucky_Lou_grfclp.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Human Week",
#     description: "The actions and behaviours of the “Homo Sapiens” species have often been the subject of much speculation amongst sharks. Questions like “How do they not fall over?” and “What exactly is a space hopper?” have tormented sharks for centuries. Now, we join them for a sneak peek into the trials and tribulations only found in #HumanWeek! Hungry Shark Shorts is brought to you by Future Games of London, A Ubisoft studio.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283914/Human_Week_fp1ljk.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283914/Human_Week_fp1ljk.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Wish Upon a Coin",
#     description: "Mickey and Minnie’s wish to live happily ever after is put in danger after Pete steals all the coins from the wishing well.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283567/Wish_Upon_A_Coin_n7aond.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283567/Wish_Upon_A_Coin_n7aond.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "The Daily Grind",
#     description: "A rare insight into the fascinating private lives of sharks. This footage shows, for the first time, how these complex creatures deal with the issue of oral hygiene. Luckily, Sharks have the ability to grow new teeth, endlessly! Hungry Shark Shorts is brought to you by Future Games of London, A Ubisoft studio.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284376/The_Daily_Grind_oz0mpi.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284376/The_Daily_Grind_oz0mpi.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "At The Opera",
#     description: "At The Opera - Animated Short Film. Idea & Direction by Juan Pablo Zaramella",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284415/At_The_Opera_n2qzcv.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284415/At_The_Opera_n2qzcv.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Fugu",
#     description: "Fugu - Animated Short Film. Direction by Philippe Arthur",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284340/Fugu_cewnju.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284340/Fugu_cewnju.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "The Waffle",
#     description: "1 minute Animated short with the fair as theme by Stéphane Paccolat",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284244/The_Waffle_nbbuu0.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284244/The_Waffle_nbbuu0.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "The Dangerous Ones",
#     description: "A ninja love is blind story 3D animation short film by Daniel Klug",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283986/The_Dangerous_Ones_vqviwb.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283986/The_Dangerous_Ones_vqviwb.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Fresh Guacamole",
#     description: "The 2013 Academy Award Nominated film by PES. 'Fresh Guacamole' is the shortest film ever nominated for an Oscar.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283571/Fresh_Guacamole_d6bwfa.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283571/Fresh_Guacamole_d6bwfa.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Western Spaghetti",
#     description: "Western Spaghetti | Written and Directed by PES | *2009 Sundance Film Festival Winner *TIME Magazine voted #2 Viral Video of the Year *2009 Audience Award, Annecy Animation Festival",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283907/Western_Spaghetti_wvj4cf.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283907/Western_Spaghetti_wvj4cf.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "The Cake Is A Lie",
#     description: "Stop motion video inspired by PESfilm. By zinc2zinc2",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283749/The_Cake_Is_A_Lie_tvjveh.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283749/The_Cake_Is_A_Lie_tvjveh.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Counterfeight Pizza",
#     description: "Animation of a pizza made from objects around the house. Inspired by PES' Western Spaghetti. By Egg And Spoon Films",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284327/Counterfeit_Pizza_qhgz7t.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284327/Counterfeit_Pizza_qhgz7t.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Submarine Sandwich",
#     description: "'Submarine Sandwich' | Written and Directed by PES | Animated by PES and Dillon Markey",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283162/Submarine_Sandwich_tgmdhn.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283162/Submarine_Sandwich_tgmdhn.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Coinstar",
#     description: "Directed by PES. Commercial for Coinstar.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284300/Coinstar_zbylar.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284300/Coinstar_zbylar.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Pee-Nut",
#     description: "Peeing Peanuts! Written, Directed and Animated by PES.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283375/Pee-Nut_uvosag.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283375/Pee-Nut_uvosag.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "KaBoom!",
#     description: "KaBoom! Credits: Written, Directed and Animated by PES",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484283970/KaBoom_zyncxr.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484283970/KaBoom_zyncxr.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "The Deep",
#     description: "Written, Directed, and Animated by PES",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284328/The_Deep_d8fdze.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284328/The_Deep_d8fdze.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Black Gold",
#     description: "Written and Directed by PES",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284142/Black_Gold_dorbzq.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284142/Black_Gold_dorbzq.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Fireworks",
#     description: "Concept and Animation by PES.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284408/Fireworks_kpfraq.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284408/Fireworks_kpfraq.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Moth",
#     description: "Concept and Animation by PES.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284379/Moth_pq9ljf.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284379/Moth_pq9ljf.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
#
# videos.push(
#   Video.create!({
#     title: "Bacardi Train",
#     description: "Concept and Animation by PES. Don't drink and drive.",
#     video: "http://res.cloudinary.com/danielcloud/video/upload/v1484284402/Bacardi_Train_bvuvf1.mp4",
#     thumbnail: "http://res.cloudinary.com/danielcloud/video/upload/v1484284402/Bacardi_Train_bvuvf1.jpg",
#     user_id: users.sample.id,
#     views: rand(10000000)
#   })
# )
