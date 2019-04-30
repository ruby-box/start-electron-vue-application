<script>
export default {
  data: () => ({
    step: 1
  })
}
</script>

<template>
  <v-form>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6 lg4>
          <v-card
            max-width="600"
            class="elevation-12"
          >
            <v-card-title class="title font-weight-regular justify-space-between">
              <span>로그인</span>
            </v-card-title>
            <!-- <v-toolbar dark color="primary">
              <v-toolbar-title>로그인</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip bottom>
                <v-btn
                  icon
                  large
                  :href="source"
                  target="_blank"
                  slot="activator"
                >
                  <v-icon large>code</v-icon>
                </v-btn>
                <span></span>
              </v-tooltip>
            </v-toolbar> -->

            <v-window v-model="step">
              <v-window-item :value="1">
                <v-card-text>
                  <v-text-field
                    prepend-icon="person"
                    label="아이디"
                    placeholder="아이디를 입력해주세요"
                    autofocus
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    type="password"
                    label="패스워드"
                    placeholder="패스워드를 입력해주세요"
                  ></v-text-field>
                  <span class="caption grey--text text--darken-1">
                    ERP시스템의 아이디를 입력해주세요.
                  </span>
                </v-card-text>
              </v-window-item>
            </v-window>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn
                color="primary"
                block
              >
                로그인
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
