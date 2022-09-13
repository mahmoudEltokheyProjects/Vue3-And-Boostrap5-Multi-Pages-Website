<template>
  <div
    class="col-lg-4 col-md-6 col-sm-12 px-0 py-3"
    v-for="(priceVar, index) in priceList"
    :key="index"
  >
    <div class="card mx-3 my-1">
      <h3 class="priceHead text-center text-capitalize my-4">
        {{ priceVar.priceType }}
      </h3>
      <img
        :src="require(`../assets/pricing_plan_imgs/${priceVar.link}`)"
        class="img-fluid m-auto"
        style="width: 100px; height: 100px"
        alt="Image Not Found"
      />
      <div class="card-body text-center">
        <h5 class="card-title fw-bold mt-3">{{ priceVar.priceAmount }}</h5>
        <p class="card-text text-black-50 fs-5">{{ priceVar.caption }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="fa fa-check"></i>{{ priceVar.spaceCap }}
        </li>
        <li class="list-group-item">
          <i class="fa fa-check"></i> {{ priceVar.emailNum }}
        </li>
        <li class="list-group-item">
          <i class="fa fa-check"></i> {{ priceVar.spaceCap }}
        </li>
        <li class="list-group-item">
          <i class="fa fa-check"></i> {{ priceVar.subdomainNum }}
        </li>
        <li class="list-group-item">
          <i class="fa fa-check"></i> {{ priceVar.databaseNum }}
        </li>
        <li class="list-group-item">
          <i class="fa fa-check"></i> {{ priceVar.supportType }}
        </li>
      </ul>
      <div class="chooseBtn text-center my-4">
        <button class="btn btn-primary text-capitalize">choose plan</button>
      </div>
    </div>
  </div>
</template>

<script>
import PriceData from "../json/prices_data.json";
export default {
  name: "PriceComp",
  data: function () {
    return {
      priceList: PriceData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border: 0;
  box-shadow: 0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%);
}
.card ul {
  position: relative;
}
.card ul li {
  padding: 15px 45px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
.card .card-title {
  font-size: 60px;
  color: #1787e0;
}
.card ul li i {
  position: absolute;
  left: 15px;
  top: 20px;
  font-weight: bold;
  font-size: 20px;
  color: #2196f3;
}
.card .chooseBtn button {
  padding: 10px 25px;
  font-size: 18px;
  font-weight: 500;
  background-color: #fff;
  color: #1787e0;
  border: 2px solid #1787e0;
}
.card .chooseBtn button:hover {
  background-color: #1787e0;
  color: #fff;
  border: 2px solid #1787e0;
}
</style>
