<template>
  <div ref="img" class="leivii-img">
    <slot name="img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [],
      containerWidth: 0
    }
  },
  created() {
    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  },
  mounted() {
    this.imgs = Array.from(this.$el.querySelectorAll('img'))
    this.imgs.forEach(img => {
      img.addEventListener('mouseover', this.handleMouseOver, false)
      img.addEventListener('mouseout', this.handleMouseOut, false)
    })
    window.addEventListener('resize', this.handleWindowResize, false)
    this.handleWindowResize()
  },
  destroyed() {
    this.imgs.forEach(img => {
      img.removeEventListener('mouseover', this.handleMouseOver, false)
      img.removeEventListener('mouseout', this.handleMouseOut, false)
    })
    window.removeEventListener('resize', this.handleWindowResize, false)
  },
  methods: {
    handleWindowResize() {
      this.containerWidth = this.$refs.img.offsetWidth
      this.imgs.forEach(img => {
        img.width = Math.min(img.naturalWidth / 2, this.containerWidth)
        img.onload = () => img.width = Math.min(img.naturalWidth / 2, this.containerWidth)
      })
    },
    handleMouseOver(e) {
      let scale = 1
      let img = e.target
      let containerWidth = this.containerWidth

      if (img.width < containerWidth) {
        if (img.width * 2 > containerWidth) {
          scale = containerWidth / img.width
        } else if (img.width * 2 < containerWidth) {
          scale = 2
        }
      }
      img.style.transform = `scale(${scale})`
    },
    handleMouseOut(e) {
      e.target.style.transform = `scale(1)`
    }
  }
}
</script>

<style scoped>
.leivii-img img {
  position: relative;
  transform-origin: top left;
  transition: all .3s ease .2s;
  z-index: 9;
}
@media (max-width: 959px) {
  .leivii-img img {
    transition: none;
    width: 100% !important;
  }
}
@media (max-width: 419px) {
  .leivii-img img {
    transition: none;
    width: 100% !important;
  }
}
.leivii-img img:hover {
  box-shadow: 2px 2px 5px #ddd;
  z-index: 10;
}
</style>
