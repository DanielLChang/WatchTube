```js
{
  session: {
    currentUser: {
      id: 1,
      username: "demo"
    },
    errors: []
  },
  videos: {
    currentVideo: {
      id: 1,
      title: "video1",
      description: "description1",
      video_url: "video_url1",
      views: 1,
      username: "user1",
      created_date: Jan 9, 2017,
      likes: {
        likes: 1,
        dislikes: 2
      }
      comments: {
        1: {
          id: 1,
          body: "commentbody1",
          likes: {
            likes: 1,
            dislikes: 0
          }
        }
      }
    }
    video_list: {
      1: {
        id: 4,
        title: "videolisttitle1",
        description: "videolistdescription1",
        views: 3,
        username: "videolistusername1",
        thumbnail: "image_url"
      }
    }
  }
  search: {
    1: {
      id: 1,
      username: "searcheduser",
      avatar: "pic_url",
    }
    2: {
      id: 3,
      title: "searchedvideo",
      description: "searcheddescription",
      views: 2
      username: "user1"
      thumbnail: "image_url"
    }
  }
}

```
