<template>
  <div ref="contentRef" class="content">
    <slot></slot>
    <div class="scrollbar">
      <div class="scrollTrack">
        <div
          ref="scrollThumbRef"
          class="scrollThumb"
          :style="{
            backgroundColor: scrollThumbColor,
            height: `${teste.scrollThumbHeight}px`,
            top: `${teste.scrollBoxTop}px`,
          }"
          @mousedown="handleScrollThumbMouseDown"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const SCROLL_THUMB_MIN_HEIGHT: number = 20;

export default Vue.extend({
  props: {
    scrollThumbColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {
      contentRef: null as HTMLDivElement | null,
      scrollThumbRef: null as HTMLDivElement | null,
      teste: {
        scrollThumbHeight: SCROLL_THUMB_MIN_HEIGHT,
        scrollBoxTop: 0 as number,
        lastScrollThumbPosition: 0 as number,
        isDragging: false as boolean,
      },
    };
  },
  watch: {
    teste: {
      handler() {
        window.addEventListener("resize", this.handleThumbResize);
        // this is handle the dragging on scroll-thumb
        document.addEventListener("mousemove", this.handleDocumentMouseMove);
        document.addEventListener("mouseup", this.handleDocumentMouseUp);
        document.addEventListener("mouseleave", this.handleDocumentMouseUp);
      },
      deep: true,
    },
  },
  mounted() {
    this.contentRef = this.$refs.contentRef as HTMLDivElement;
    this.scrollThumbRef = this.$refs.scrollThumbRef as HTMLDivElement;
    if (this.contentRef) {
      const scrollHostElement = this.contentRef;
      const { clientHeight, scrollHeight } = scrollHostElement;
      const scrollThumbPercentage = clientHeight / scrollHeight;
      const thumbHeight = Math.max(
        scrollThumbPercentage * clientHeight,
        SCROLL_THUMB_MIN_HEIGHT
      );
      this.teste.scrollThumbHeight = thumbHeight;
      scrollHostElement.addEventListener("scroll", this.handleScroll, true);
    }
    window.addEventListener("resize", this.handleThumbResize);
    // this is handle the dragging on scroll-thumb
    document.addEventListener("mousemove", this.handleDocumentMouseMove);
    document.addEventListener("mouseup", this.handleDocumentMouseUp);
    document.addEventListener("mouseleave", this.handleDocumentMouseUp);
  },
  destroyed() {
    if (this.contentRef) {
      this.contentRef.removeEventListener("scroll", this.handleScroll, true);
    }
    window.removeEventListener("resize", this.handleThumbResize);
    document.removeEventListener("mousemove", this.handleDocumentMouseMove);
    document.removeEventListener("mouseup", this.handleDocumentMouseUp);
    document.removeEventListener("mouseleave", this.handleDocumentMouseUp);
  },
  methods: {
    handleThumbResize() {
      if (this.contentRef) {
        const { clientHeight, scrollHeight } = this.contentRef;
        const scrollThumbPercentage = clientHeight / scrollHeight;
        const thumbHeight = Math.max(
          scrollThumbPercentage * clientHeight,
          SCROLL_THUMB_MIN_HEIGHT
        );
        this.teste.scrollThumbHeight = thumbHeight;
      }
    },
    handleDocumentMouseUp(e: any) {
      if (this.teste.isDragging) {
        e.preventDefault();
        this.teste.isDragging = false;
      }
    },
    handleDocumentMouseMove(e: any) {
      if (this.teste.isDragging && this.contentRef) {
        e.preventDefault();
        e.stopPropagation();
        const { scrollHeight, offsetHeight } = this.contentRef;

        const deltaY = e.clientY - this.teste.lastScrollThumbPosition;
        const percentage = deltaY * (scrollHeight / offsetHeight);

        this.teste.lastScrollThumbPosition = e.clientY;
        this.teste.scrollBoxTop = Math.min(
          Math.max(0, this.teste.scrollBoxTop + deltaY),
          offsetHeight - this.teste.scrollThumbHeight
        );
        this.contentRef.scrollTop = Math.min(
          this.contentRef.scrollTop + percentage,
          scrollHeight - offsetHeight
        );
      }
    },
    handleScrollThumbMouseDown(e: any) {
      e.preventDefault();
      e.stopPropagation();
      this.teste.lastScrollThumbPosition = e.clientY;
      this.teste.isDragging = true;
    },
    handleScroll() {
      if (this.contentRef) {
        if (!this.contentRef) {
          return;
        }
        const { scrollTop, scrollHeight, offsetHeight } = this.contentRef;

        let newTop =
          (parseInt(scrollTop.toString(), 10) /
            parseInt(scrollHeight.toString(), 10)) *
          offsetHeight;
        newTop = Math.min(newTop, offsetHeight - this.teste.scrollThumbHeight);
        this.teste.scrollBoxTop = newTop;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
/* @use "src/app/theme/theme.module" as theme; */
.content {
  position: relative;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .scrollbar {
    position: fixed;
    top: 0;
    right: 0;
    width: 15px;
    height: 100%;
    margin-top: 66px;
    /* padding: 10px 0 10px 0; */
    &:hover {
      .scrollTrack {
        .scrollThumb {
          width: 10px;
        }
      }
    }
    .scrollTrack {
      width: 100%;
      height: 100%;
      .scrollThumb {
        position: absolute;
        margin-right: 5px;
        right: 0;
        width: 5px;
        /* height: 100px; */
        border-radius: 100px;
        transition: width 0.3s;
      }
      .scrollThumb:active {
        width: 10px;
      }
    }
  }
}

@media screen and (max-device-width: 1000px) {
  .scrollbar {
    display: none;
  }
}
</style>
