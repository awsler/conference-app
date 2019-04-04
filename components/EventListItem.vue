<template>
  <v-card elevation="5" style="margin-bottom: 1em">
    <v-card-title class="title">{{ description }}</v-card-title>
    <div class="text-xs-left" style="padding-left:0.85em">
      <v-chip color="green lighten-1" label>
        <v-avatar>
          <v-icon>room</v-icon>
        </v-avatar>
        {{ location }}
      </v-chip>
      <v-chip v-if="speaker != null" label color="blue lighten-3">
        <v-avatar>
          <v-icon>person</v-icon>
        </v-avatar>
        {{ speaker }}
      </v-chip>
      <v-chip v-if="endTime != null" label color="red lighten-2">
        <v-avatar>
          <v-icon>timelapse</v-icon>
        </v-avatar>
        {{ duration }}
        <v-icon>arrow_forward</v-icon>
        {{ endTimeString }}
      </v-chip>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'EventListItem',
  props: {
    description: {
      type: String,
      required: true
    },
    speaker: {
      type: String,
      required: false,
      default: null
    },
    location: {
      type: String,
      required: false,
      default: null
    },
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: false,
      default: null
    }
  },
  computed: {
    duration() {
      const millis = this.endTime.getTime() - this.startTime.getTime()
      if (millis < 0) {
        return 'negative duration'
      }
      let minutes = Math.floor(millis / 60000)
      const hours = Math.floor(minutes / 60)
      minutes -= hours * 60
      const result = []
      if (hours > 0) {
        result.push(hours + 'h')
      }
      if (minutes > 0 || result.length === 0) {
        result.push(minutes + 'min')
      }
      return result.join(' ')
    },
    endTimeString() {
      if (this.endTime == null) {
        return ''
      } else {
        return this.endTime.getHours() + ':' + ('0' + this.endTime.getMinutes()).slice(-2) + ' Uhr'
      }
    }
  }
}
</script>
