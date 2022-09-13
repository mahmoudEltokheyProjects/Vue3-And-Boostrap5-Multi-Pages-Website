<template>
  <div class="services">
    <div class="container">
      <!-- ++++++++++++++++++++++++++++++++++++ "latest article" section ++++++++++++++++++++++++++++++++++++ -->
      <!-- ================ services-header ================ -->
      <div class="services-header my-4 text-center">
        <h2 class="text-capitalize fs-1 fw-bold">latest article</h2>
        <p class="services-paragraph px-5 py-3 text-black-50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          quidem architecto, repudiandae neque quaerat pariatur praesentium
          beatae iusto eaque quo voluptatum assumenda, molestiae dolor. Deleniti
          voluptate exercitationem atque amet praesentium?
        </p>
      </div>
      <!-- =========== services-body : "CardComp" component =========== -->
      <div class="row">
        <!-- ++++++++ posts part ++++++++ -->
        <card-comp
          v-for="postVar in posts"
          v-bind:key="postVar.id"
          v-bind:views="postVar.views"
          v-bind:title="postVar.title"
          v-bind:content="postVar.content"
          v-bind:author="postVar.author"
          v-bind:date="postVar.date"
          v-bind:category="postVar.category"
          v-bind:filename="postVar.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import "CardComp" component
import CardComp from "../components/CardComp.vue";
// import jsonObject_posts file
import JsonPosts from "../json/blog_posts.json";
export default {
  components: { CardComp },
  name: "ServicesView",
  data: function () {
    return {
      // the value of "posts" attribute will come from JsonPosts component from "blog_posts.json" file
      posts: JsonPosts,
    };
  },
};
</script>
