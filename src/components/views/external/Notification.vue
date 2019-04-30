<script>
import External from '@/services/external'

export default {
  name: 'NotificationForm',
  methods: {
    openNotification() {
      External.notification()
    }
  },
  data () {
    return {
      message1: '메시지를 입력해주세요.'
    }
  }
}
</script>

<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex
        mb-5
        xs12>
        <v-card class="elevation-12">
          <v-card-title></v-card-title>
          <v-card-text>
            <v-textarea
              name="notification-textarea"
              box
              label="알림전송하기"
              auto-grow
              v-model="message1"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="openNotification">알림전송</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
