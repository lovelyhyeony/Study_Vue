<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
/**
 * @ : vue cli가 자체적으로
 * src 디렉토리와 연결해놓은 문자열!
 *
 * @/components/Header.vue :
 * src 아래에 있는
 * components 디렉토리 아래에 있는
 * Header.vue 파일을 의미
 */
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  mounted() {
    // mounted method에
    // initialize method를 실행하는 코드를 추가하면
    // 장바구니 기능이 활성화 됌
    $.initialize();
  },
  components: {
    Header,
    Footer
  }
}
</script>