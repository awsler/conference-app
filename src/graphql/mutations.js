// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
        rating
      }
      nextToken
    }
    averageRating
  }
}
`
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
        rating
      }
      nextToken
    }
    averageRating
  }
}
`
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
        rating
      }
      nextToken
    }
    averageRating
  }
}
`
export const createRoom = `mutation CreateRoom($input: CreateRoomInput!) {
  createRoom(input: $input) {
    id
    name
    capacity
  }
}
`
export const updateRoom = `mutation UpdateRoom($input: UpdateRoomInput!) {
  updateRoom(input: $input) {
    id
    name
    capacity
  }
}
`
export const deleteRoom = `mutation DeleteRoom($input: DeleteRoomInput!) {
  deleteRoom(input: $input) {
    id
    name
    capacity
  }
}
`
export const createRating = `mutation CreateRating($input: CreateRatingInput!) {
  createRating(input: $input) {
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
export const updateRating = `mutation UpdateRating($input: UpdateRatingInput!) {
  updateRating(input: $input) {
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
export const deleteRating = `mutation DeleteRating($input: DeleteRatingInput!) {
  deleteRating(input: $input) {
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
