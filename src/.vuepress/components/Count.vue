<template>
  <div class="sample_box">
    <my-button size="large" type="success" @myclick="click"
      >Click MeοΌπ</my-button
    >
    <br />
    <br />
    <p>γ―γͺγγ―ζ°γθ‘¨η€ΊγγγΎγ</p>
    <p>γ«γ¦γ³γ: {{ count }}</p>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  name: "App",
  components: {
    MyButton,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click() {
      this.count++;
    },
  },
};
</script>

<style>
.sample_box {
  padding: 1em 1.5em;
  margin: 2em 0;
  background-color: #f4f9ff; /*θζ―θ²*/
  border: 1px solid #84c1ff; /*ζ η·*/
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); /*ε½±*/
  color: #000000; /*ζε­θ²*/
}
.sample_box p {
  margin: 0;
  padding: 0.5em;
  font-size: 1.1em;
  font-family: "Trebuchet MS", "Hannotate SC", "Chalkduster", sans-serif;
}
</style>
