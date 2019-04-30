<script>
import External from '@/services/external'

export default {
  methods: {
    onOpen() {
      External.open()
    }
  },
  data () {
    return {
      message1: 'URL을 입력하세요.'
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
              name="external-textarea"
              box
              label="외부 모듈 호출"
              auto-grow
              v-model="message1"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="onOpen">IE에서 열기</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
