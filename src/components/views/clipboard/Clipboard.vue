<script>
import Clipboard from '@/services/clipboard'

export default {
  methods: {
    onCopy() {
      Clipboard.copy()
    },
    onPaste() {
      Clipboard.paste()
    }
  },
  data () {
    return {
      message1: '복사/붙여넣기를 눌러보세요'
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
          <v-card-title>클립보드</v-card-title>
          <v-card-text>
            <v-textarea
              name="clipboard-textarea"
              box
              label="테스트 텍스트"
              auto-grow
              v-model="message1"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="onCopy">복사</v-btn>
            <v-btn @click="onPaste">붙여넣기</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
