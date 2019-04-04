// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    token
    name
    surname
    email
    sessions {
      items {
        id
        type
        title
        description
        topics
        averageRating
      }
      nextToken
    }
  }
}
`
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      token
      name
      surname
      email
      sessions {
        nextToken
      }
    }
    nextToken
  }
}
`
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    type
    title
    description
    timeRange {
      start
      end
      isInPast
    }
    room {
      id
      name
      capacity
    }
    topics
    speakers {
      items {
        id
        token
        name
        surname
        email
      }
      nextToken
    }
    participants {
      items {
        id
        token
        name
        surname
        email
      }
      nextToken
    }
    ratings {
      items {
        id
        owner {
          id
          token
          name
          surname
          email
        }
        rating
      }
      nextToken
    }
    averageRating
  }
}
`
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      type
      title
      description
      timeRange {
        start
        end
        isInPast
      }
      room {
        id
        name
        capacity
      }
      topics
      speakers {
        items {
          id
          token
          name
          surname
          email
        }
        nextToken
      }
      participants {
        items {
          id
          token
          name
          surname
          email
        }
        nextToken
      }
      ratings {
        items {
          id
          owner {
            id
            token
            name
            surname
            email
          }
          rating
        }
        nextToken
      }
      averageRating
    }
    nextToken
  }
}
`
export const getRoom = `query GetRoom($id: ID!) {
  getRoom(id: $id) {
    id
    name
    capacity
  }
}
`
export const listRooms = `query ListRooms(
  $filter: ModelRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      capacity
    }
    nextToken
  }
}
`
export const getRating = `query GetRating($id: ID!) {
  getRating(id: $id) {
    id
    owner {
      id
      token
      name
      surname
      email
      sessions {
        nextToken
      }
    }
    rating
  }
}
`
export const listRatings = `query ListRatings(
  $filter: ModelRatingFilterInput
  $limit: Int
  $nextToken: String
) {
  listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner {
        id
        token
        name
        surname
        email
      }
      rating
    }
    nextToken
  }
}
`
