<script>
  export default {
    data: () => ({
        items: [
          {
            action: 'dashboard',
            title: 'Dashboard',
            to: '/dashboard'
          },
          { divider: true },
          { header: '자료송수신' },
          {
            action: 'send',
            title: '자료전송',
            to: '/sendform'
          },
          { divider: true },
          { header: '업무망' },
          {
            action: 'settings',
            title: '로그인',
            to: '/sample3'
          },
          {
            action: 'send',
            title: '자료전송',
            to: '/wv-sendform'
          },
          {
            action: 'move_to_inbox',
            title: '보낸자료',
            to: '/sendlist'
          },
          {
            action: 'move_to_inbox',
            title: '받은자료',
            to: '/receivelist'
          },
          {
            action: 'move_to_inbox',
            title: '로그아웃',
            to: '/logout'
          },
          { divider: true },
          { header: '샘플' },
          // {
          //   action: 'email',
          //   title: '결재대기함',
          //   to: '/receivelist'
          // },
          // {
          //   action: 'call_split',
          //   title: '결재이력함',
          //   to: '/receivelist'
          // },
          {
            action: 'settings',
            title: '브라우저호출',
            to: '/external'
          },
          {
            action: 'settings',
            title: '클립보드',
            to: '/clipboard'
          },
          {
            action: 'settings',
            title: '파일업로드',
            to: '/fileupload'
          },
          {
            action: 'settings',
            title: '웹뷰샘플',
            to: '/sample1'
          },
          {
            action: 'settings',
            title: 'Net-Protect 관리자',
            to: '/sample2'
          },
          {
            action: 'settings',
            title: 'Net-Protect 사용자(인터넷망)',
            to: '/sample4'
          },
          {
            action: 'settings',
            title: '로그인샘플',
            to: '/sample/login'
          }
        ]
      }
    ),
    methods: {
      showMessage() {
        alert("Click!!")
      }
    },
    props: {
      source: String
    }
  }
</script>

<template>
  <v-list dense>
    <template v-for="(item, index) in items">
      <v-list-tile
        v-if="item.action"
        :key="item.title"
        :to="item.to"
      >
        <v-list-tile-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-divider
        v-else-if="item.divider"
        :key="index"
      ></v-divider>

      <v-subheader
        v-else-if="item.header"
        :key="item.header">
          {{ item.header }}
      </v-subheader>
    </template>
  </v-list>
</template>
