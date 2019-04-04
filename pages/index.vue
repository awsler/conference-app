<template>
  <v-layout
    v-touch="{
      left() {
        nextDay()
      },
      right() {
        previousDay()
      }
    }"
  >
    <v-flex>
      <div class="display-1">
        {{ currentWeekdayName }}
        <v-btn fab flat absolute style="right:4em;top:1ex" @click="previousDay()">
          <v-icon>arrow_left</v-icon>
        </v-btn>
        <v-btn fab flat absolute style="right:0;top:1ex" @click="nextDay()">
          <v-icon>arrow_right</v-icon>
        </v-btn>
      </div>
      <div v-for="(event, i) in events" :key="i">
        <div v-if="!event.sameTime" class="headline time-info">{{ event.startTimeString }} Uhr</div>
        <event-list-item
          :description="event.description"
          :speaker="event.speaker"
          :location="event.location"
          :start-time="event.startTime"
          :end-time="event.endTime"
        />
      </div>
    </v-flex>
  </v-layout>
</template>

<style>
.dev_border {
  border: #7f7f7f 1px dashed;
}
.time-info {
  padding: 0.25em 0.1em;
}
</style>

<script>
import EventListItem from '@/components/EventListItem.vue'

import { API, graphqlOperation } from 'aws-amplify'
import { listEvents } from '@/src/graphql/queries'

export default {
  name: 'Agenda',
  components: {
    EventListItem
  },
  data() {
    return {
      selectedDate: null,
      selectedEvent: null,
      rawEvents: []
    }
  },
  computed: {
    events() {
      const result = []
      let lastEvent = null
      this.rawEvents
        .filter(event => {
          return (
            this.selectedDate === null || event.startTime.getDay() === this.selectedDate.getDay()
          )
        })
        .sort((a, b) => {
          return a.startTime.getTime() - b.startTime.getTime()
        })
        .forEach(event => {
          const newEvent = { ...event }
          newEvent.sameTime =
            lastEvent && event.startTime.getTime() === lastEvent.startTime.getTime()
          newEvent.startTimeString =
            event.startTime.getHours() + ':' + ('0' + event.startTime.getMinutes()).slice(-2)
          result.push(newEvent)
          lastEvent = event
        })
      return result
    },
    firstDate() {
      return new Date(
        this.rawEvents.reduce((total, current) => {
          return Math.min(
            total === null ? current.startTime.getTime() : total,
            current.startTime.getTime()
          )
        }, null)
      )
    },
    lastDate() {
      return new Date(
        this.rawEvents.reduce((total, current) => {
          return Math.max(
            total === null ? current.startTime.getTime() : total,
            current.startTime.getTime()
          )
        }, null)
      )
    },
    currentWeekdayName() {
      return this.getWeekdayName(this.selectedDate.getDay())
    }
  },
  async mounted() {
    const {
      data: {
        listEvents: { items }
      }
    } = await API.graphql(graphqlOperation(listEvents))

    // FIXME: Do not manipulate response, use proper data types instead!
    items.forEach(item => {
      item.startTime = new Date(item.timeRange.start)
      item.endTime = new Date(item.timeRange.end)
      item.location = item.room.name
      item.speaker = item.speakers.items[0].name
    })

    this.rawEvents = items
    console.log(items)
  },
  created() {
    this.selectDate(this.firstDate)
  },
  methods: {
    getWeekdayName(weekdayNumber) {
      // eslint-disable-next-line
      return ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][
        weekdayNumber
      ]
    },
    selectDate(date) {
      this.selectedDate = date
    },
    date2int(date) {
      return date.getFullYear() * 10000 + date.getMonth() * 100 + date.getDate()
    },
    previousDay() {
      if (this.date2int(this.selectedDate) > this.date2int(this.firstDate)) {
        this.selectDate(new Date(this.selectedDate.getTime() - 86400000))
      }
    },
    nextDay() {
      if (this.date2int(this.selectedDate) < this.date2int(this.lastDate)) {
        this.selectDate(new Date(this.selectedDate.getTime() + 86400000))
      }
    }
  }
}
</script>
