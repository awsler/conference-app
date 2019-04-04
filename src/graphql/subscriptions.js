// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateRoom = `subscription OnCreateRoom {
  onCreateRoom {
    id
    name
    capacity
  }
}
`
export const onUpdateRoom = `subscription OnUpdateRoom {
  onUpdateRoom {
    id
    name
    capacity
  }
}
`
export const onDeleteRoom = `subscription OnDeleteRoom {
  onDeleteRoom {
    id
    name
    capacity
  }
}
`
export const onCreateRating = `subscription OnCreateRating {
  onCreateRating {
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
export const onUpdateRating = `subscription OnUpdateRating {
  onUpdateRating {
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
export const onDeleteRating = `subscription OnDeleteRating {
  onDeleteRating {
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
