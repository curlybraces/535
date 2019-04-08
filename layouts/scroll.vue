new Vue({
  el: '#app',
  data: () => ({
    offsetTop: 0
  }),

  methods: {
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    }
  }
})
