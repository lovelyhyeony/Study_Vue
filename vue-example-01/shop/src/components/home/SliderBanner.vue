<template>
  <section class="slide1">
    <div class="wrap-slick1">
      <div class="slick1" ref="slick">
        <!--  -->
        <template v-for="banner in banners">
          <!-- style = : 배경이미지 추가 -->
          <div class="item-slick1 item1-slick1" :style="`background-image: url(${banner.image});`">
            <div class="wrap-content-slide1 sizefull flex-col-c-m p-l-15 p-r-15 p-t-150 p-b-170">
						<span class="caption1-slide1 m-text1 t-center animated visible-false m-b-15" data-appear="fadeInDown">
							{{ banner.subtitle }}
						</span>

              <h2 class="caption2-slide1 xl-text1 t-center animated visible-false m-b-37" data-appear="fadeInUp">
                {{ banner.title }}
              </h2>

              <div class="wrap-btn-slide1 w-size1 animated visible-false" data-appear="zoomIn">
                <!-- Button -->
                <a href="product.html" class="flex-c-m size2 bo-rad-23 s-text2 bgwhite hov1 trans-0-4">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import bannerApi from '@/api/banner.js';

export default {
  data() {
    return {
      banners: []
    }
  },
  created() {
    bannerApi.getMainSlideBanners().then(response => {
      // 이와같이 response data를 바로 banners 배열에 넣지 않는 이유는
      // banners 배열과 response data는 같은 주소를 같게 되므로
      this.banners = [].concat(response.data);
      // this.banners = response.data;
      // 이렇게 response data의 값을 추가하는 등의 변경이 있을 경우
      // banners 배열에도 영향을 끼치게 됌
      // response.data.push(123);
    })
  }
}
</script>