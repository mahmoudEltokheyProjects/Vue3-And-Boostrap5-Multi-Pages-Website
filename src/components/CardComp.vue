<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="post-box">
      <!-- post views -->
      <span class="post-views"> {{ views }} </span>
      <!-- post title -->
      <h3 class="post-title">{{ title }}</h3>
      <!-- post date -->
      <span class="post-date"> {{ date }} </span>
      <!-- post content -->
      <p class="post-content">
        {{ content }}
      </p>
      <!-- row :  post author , post category -->
      <div class="row">
        <!-- post author -->
        <div class="col-lg-6 col-xs-6 text-start">
          <span class="post-author">{{ author }}</span>
        </div>
        <!-- post category -->
        <div class="col-lg-6 col-xs-6 text-end">
          <span class="post-category">{{ category }}</span>
        </div>
      </div>
      <!-- image category -->
      <div class="col-lg-12">
        <img
          class="img-fluid my-3"
          :src="require(`../assets/cards_imgs/${filename}`)"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardComp",
  props: [
    "keys",
    "filename",
    "views",
    "title",
    "content",
    "author",
    "category",
    "date",
    "link",
  ],
};
</script>
<style scoped lang="scss">
.post-box {
  background-color: #fff;
  padding: 10px;
  margin: 15px 0;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  // post-views style
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #4caf50;
    color: #fff;
    border-radius: 4px;
    padding: 1px 5px;
    text-align: center;
    font-weight: bold;
  }
  // post-title style
  .post-title {
    color: #000;
  }
  // post-date style
  .post-date {
    display: block;
    padding: 0 0 5px 0;
    color: #888;
    font-size: 14px;
  }
  // post-content style
  .post-content {
    line-height: 2;
    color: #666;
  }
  // post-author style
  .post-author {
    background-color: #607d88;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
  // post-category style
  .post-category {
    background-color: #e91e63;
    padding: 6px 10px;
    border-radius: 4px;
    color: #fff;
  }
}
</style>
'
