<template>
  <div class="single__item">
    <div class="container">
      <div class="single__item__container">
        <!-- =1 Veikia -->
        <div class="item__photos__container col-8" v-if="item.img.length === 1">
          <img v-bind:src="item.img[0]" class="card-img-top main__img img" alt="..." />
        </div>
        <!-- =2 Veikia -->
        <div class="item__photos__container col-8" v-else-if="item.img.length === 2">
          <img v-bind:src="item.img[0]" class="card-img-top main__img img" alt="..." />
          <div class="item__photo__right">
            <img v-bind:src="item.img[1]" class="card-img-top second__img img" alt="..." />
          </div>
        </div>
        <!-- =3 Veikia -->
        <div class="item__photos__container col-8" v-else-if="item.img.length === 3">
          <img v-bind:src="item.img[0]" class="card-img-top main__img img" alt="..." />
          <div class="item__photos__right">
            <img v-bind:src="item.img[1]" class="img__top img" alt="..." />
            <div class="item__photos__right__bottom">
              <img v-bind:src="item.img[2]" class="third-img img" alt="..." />
            </div>
          </div>
        </div>
        <!-- =4 Veikia -->
        <div class="item__photos__container col-8" v-else-if="item.img.length === 4">
          <img v-bind:src="item.img[0]" class="card-img-top main__img img" alt="..." />
          <div class="item__photos__right">
            <img v-bind:src="item.img[1]" class="img__top img" alt="..." />
            <div class="item__photos__right__bottom">
              <img v-bind:src="item.img[2]" class="img__bottom img" alt="..." />
              <img v-bind:src="item.img[3]" class="img__bottom img" alt="..." />
            </div>
          </div>
        </div>
        <!-- >=5 Veikia -->
        <div class="item__photos__container col-8" v-else-if="item.img.length >= 5">
          <img v-bind:src="item.img[0]" class="card-img-top main__img img" alt="..." />
          <div class="item__photos__right">
            <div class="item__photos__right__two">
              <img v-bind:src="item.img[1]" class="img__top__two img" alt="..." />
              <img v-bind:src="item.img[2]" class="img__top__two img" alt="..." />
            </div>
            <div class="item__photos__right__bottom">
              <img v-bind:src="item.img[3]" class="img__bottom img" alt="..." />
              <div
                class="img__overlayed"
                :class="{'img__more': imgCount > 5}"
                :imgCount-msg="imgCount - 5"
              >
                <img v-bind:src="item.img[4]" class="img__bottom overlayed img" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="single__item__info col-4">
          <div class="details__list">
            <h3 class="price">{{ item.price }} €</h3>
            <div class="details__list__line"></div>
            <div class="details__list__details">
              <p class="details__list__title">PREKĖS ŽENKLAS</p>
              <p>{{ item.brand }}</p>
            </div>
            <div class="details__list__details">
              <p class="details__list__title">DYDIS</p>
              <p>{{ item.size }}</p>
            </div>
            <div class="details__list__details">
              <p class="details__list__title">BŪKLĖ</p>
              <p>{{ item.condition }}</p>
            </div>
            <div class="details__list__details">
              <p class="details__list__title">SPALVA</p>
              <p>{{ item.color }}</p>
            </div>
            <div class="details__list__details">
              <p class="details__list__title">VIETOVĖ</p>
              <p>{{ item.city }}</p>
            </div>
            <div class="details__list__details">
              <p class="details__list__title">PERŽIŪRĖTA</p>
              <p>{{ item.views }}</p>
            </div>
            <div class="details__list__details">
              <p class="details__list__title">ĮKELTA</p>
              <p>{{ item.date }}</p>
            </div>
            <div class="details__list__line"></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.about }}</p>
            <div class="details__list__buttons">
              <button type="button" class="btn btn__contact">Teirautis</button>
              <button type="button" class="btn btn__remember">Pažymėti</button>
            </div>
          </div>
          <div class="user__box">
            <img v-bind:src="user.img" class="user__img" alt="..." />
            <div class="user__info">
              <h4>{{ user.username }}</h4>
            </div>
          </div>
          <div class="user__info__box">
            <div class="user__info">
              <div class="details__list__details">
                <p class="details__list__title">VIETOVĖ</p>
                <p>{{ user.city }}</p>
              </div>
              <div class="details__list__details">
                <p class="details__list__title">Paskutinis prisijungimas:</p>
                <p>{{ user.loginDate }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  props: ["id", "img", "price", "size", "height", "width", "brand", "username"],
  created() {
    console.log(this.id);
  },
  computed: {
    item() {
      return this.$store.getters["shop/getItemById"](this.id);
    },
    user() {
      return this.$store.getters["shop/getUserById"](this.id);
    },
    imgCount() {
      return this.$store.getters["shop/getItemById"](this.id).img.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.single__item {
  background-color: #eaedee;
  min-height: 1000px;

  &__container {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-top: 30px;

    .item__photos__container {
      //   margin-top: 50px;
      display: flex;
      flex-direction: row;
      height: 500px;

      .img {
        border: 2px solid transparent;
        border-radius: 3px;
      }

      .main__img {
        object-fit: cover;
        height: 100%;
        width: 50%;
      }

      .second__img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
      .item__photos__right__two {
        display: flex;
        height: 50%;
        width: 50%;
        .img__top__two {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
      .item__photos__right {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        .img__top {
          object-fit: cover;
          height: 50%;
          width: 100%;
        }

        .item__photos__right__bottom {
          display: flex;
          flex-direction: row;
          height: 50%;
          width: 100%;
          .third-img {
            object-fit: cover;
            height: 100%;
            width: 100%;
          }
          .img__bottom {
            object-fit: cover;
            height: 100%;
            width: 50%;

            &__overlayed {
              width: 100%;
            }
          }
          .overlayed {
            width: 100%;
          }
          .img__more {
            position: relative;
            height: 100%;

            &:before {
              content: "+" attr(imgCount-msg);
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 5;
              color: white;
              font-size: 4rem;
              font-weight: bold;
              transform: translate(0, 30%);
            }
            &:after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba($gray-100, 0.4);
            }
          }
        }
      }
    }
    .single__item__info {
      box-sizing: border-box;
      padding: 5px;
      .details__list {
        border-radius: 3px;
        width: 100%;
        background-color: #ffffff;
        box-sizing: border-box;
        padding: 20px;
        text-align: left;
        // color: red;
        // .price {
        //   color: red;
        // }
        &__line {
          background-color: #eaedee;
          width: 100%;
          height: 1px;
          margin: 10px 0px;
        }
        &__details {
          display: flex;
          justify-content: space-between;
        }
        &__title {
          color: #666;
        }
        &__buttons {
          display: flex;
          flex-direction: column;

          .btn__contact {
            color: #fff;
            background-color: #0ab0ba;
            margin-bottom: 10px;
          }

          .btn__remember {
            color: #0ab0ba;
            border: 1px solid #9a9a9a;
          }
        }
      }

      .user__box {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #ffffff;
        box-sizing: border-box;
        padding: 20px;
        text-align: left;
        margin-top: 20px;

        .user__img {
          margin-right: 10px;
          height: 70px;
          width: 70px;
          border-radius: 100%;
        }
      }
      .user__info__box {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #ffffff;
        box-sizing: border-box;
        padding: 20px;
        margin-top: 2px;

        .user__info {
          width: 100%;
        }
        // .user__img {
        //   margin-right: 10px;
        //   height: 70px;
        //   width: 70px;
        //   border-radius: 100%;
        // }
      }
    }
  }
}
</style>
