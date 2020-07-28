<template>
  <nav class="header__main">
    <div class="container">
      <ul>
        <li>
          <router-link to="/">
            <img class="logo" src="~@/assets/img/home/logo.png" alt />
          </router-link>
        </li>
        <li>
          <div class="header__item">
            <dropdown title="Services" :items="services" />
            <form @submit.prevent="handleSearch">
              <input
                class="search__input"
                type="text"
                id="fname"
                name="fname"
                v-model="searchInput"
              />
            </form>
          </div>
        </li>
        <li>
          <!-- <h3 v-if="localStorage.token">yra tokens</h3> -->
          <div class="header__item">
            <button
              class="button register"
              id="show-modal"
              @click="showModal = true"
            >
              Registruotis | Prisijungti
            </button>
            <modal v-if="showModal" @close="showModal = false">
              <h4 slot="header">Prisijunk prie Vinted</h4>
              <div slot="body">
                <p>
                  Parduok nebereikalingus drabužius už savo kainą. Pradėk
                  šiandien!
                </p>

                <div class="container">
                  <input
                    v-model="login.email"
                    class="input"
                    type="email"
                    placeholder="E-Paštas"
                    name="uname"
                    required
                  />
                  <input
                    v-model="login.password"
                    class="input"
                    type="password"
                    placeholder="Slaptažodis"
                    name="psw"
                    required
                  />
                </div>
              </div>
              <div slot="footer">
                <div class="login__buttons">
                  <router-link class="modal__button" to="/registration"
                    >Registruotis</router-link
                  >
                  <!-- <button class="modal__button" to="/register">Registruotis</button> -->
                  <div class="modal__line"></div>
                  <button @click="handleLogin" class="modal__button">
                    Prisijungti
                  </button>
                </div>
              </div>
            </modal>
            <button class="button signin">Parduok dabar</button>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Dropdown from "@/components/partials/Dropdown";
import Modal from "@/components/partials/Modal";
// import IfUserExists from "@/components/partials/IfUserExists";
import { mapActions } from "vuex";
import api from "@/api/";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
        error: false
      },

      showModal: false,
      services: [
        {
          title: "Drabužiai",
          link: "#"
        },
        {
          title: "Nariai",
          link: "#"
        },
        {
          title: "Forumas",
          link: "#"
        },
        {
          title: "Pagalbos Centras",
          link: "#"
        }
      ],
      searchInput: ""
    };
  },
  props: { name: { default: "Drabužiai" } },
  name: "navbar",
  components: { Dropdown, Modal },

  created() {},
  methods: {
    ...mapActions({
      setSearchQuery: "shop/setSearchQuery"
    }),
    handleSearch() {
      // TODO validation
      this.setSearchQuery(this.searchInput);
      if (this.$route.name != "Search") {
        this.$router.push("search");
      }
    },
    handleLogin() {
      const body = {
        email: this.login.email,
        password: this.login.password
      };
      api.login(
        body,
        body => {
          localStorage.token = JSON.stringify(body.tokens[0]);
          console.log(body);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

//
<style lang="scss" scoped>
.header__main {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 54px;
  background-color: #fff;
  border-bottom: 2px solid #ececec;
  z-index: 2;

  ul {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    padding: unset;
    margin: unset;
    .logo {
      width: 90px;
    }

    .header__item {
      display: flex;
      align-items: center;
    }
    .search__input[type="text"] {
      // min-width: 100%;
      padding: 5px 10px;
      border-radius: 0px 10px 10px 0px;
      margin: 8px 0;
      box-sizing: border-box;
      border: none;
      background-color: #f5f6f7;
      color: #bbb;
      width: 500px;
    }
    .search__input[type="text"]:focus {
      outline: none;
    }
    // }

    .button {
      margin-left: 20px;
      background-color: transparent;
      border: 1px solid #0ab0ba;
      border-radius: 5px;
      color: #0ab0ba;
      padding: 3px 10px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    }

    .signin {
      background-color: #0ab0ba;
      color: white;
    }
  }

  // .modal__header {
  //   margin-top: 30px;
  // }

  .input {
    width: 100%;
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid $darkGray;
  }

  .login__buttons {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    // color: black;

    .modal__button {
      background-color: transparent;
      border: unset;
      color: black;
    }
  }
  .modal__line {
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: $darkGray;
  }
}
</style>
