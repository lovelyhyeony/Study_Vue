<template>
  <div>
    <h1>Welcome to {{ title }}!</h1>
    <input type="text" v-model="input1"/>
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>

    <select class="form-control" v-model="region" @change="changeRegion">
      <option :key="i" :value="d.v" v-for="(d,i) in options">{{ d.t }}</option>
    </select>

    <table class="table table-bordered" v-show="tableShow">
      <tr :key="i" v-for="(d,i) in options">
        <td>{{ d.v }}</td>
        <td>{{ d.t }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "개발자의 품격",
      title2: "Seoul",
      input1: "abcd",
      options: [
        {v: "S", t: "Seoul"},
        {v: "J", t: "Jeju"},
        {v: "B", t: "Busan"}
      ],
      region: "B", // v-model을 통해 (셀렉트 콤보박스가 제일 먼저 부산이 나옴)
      tableShow: true
    };
  },
  watch: {
    // 변수명을 function형식으로
    // 데이터가 변경이되면 바로 캐치해서 알 수 있음
    /**
     * 계속적으로 특정 데이터를 계속 관찰하고 있다가
     * 데이터가 변경이 일어났을때 캐치를 해서 사용할 수 있다.
     * 우리가 선언한 변수명하고 동일한 메서드명을 만들면 된다.
     */
    input1() {
      console.log(this.input1);
    }
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = 12345;
    },
    changeRegion() {
      alert(this.region);
    }
  },

  /**
   * 라이프사이클 훅
   */
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>
