<template>
  <div class="register">
    <div class="register__container">
      <h2>Registruotis</h2>
      <form
        class="registration__form"
        @submit.prevent="
          {
            register;
          }
        "
      >
        <div class="container">
          <div v-if="error">alert{{ error }}</div>
          <input
            v-model="registration.username"
            class="input"
            type="text"
            placeholder="Vartotojo vardas"
            name="nickname"
            required
          />
          <input
            v-model="registration.email"
            class="input"
            type="email"
            placeholder="El. Pašto adresas"
            name="email"
            required
          />
          <input
            v-model="registration.password"
            class="input"
            type="password"
            placeholder="Slaptažodis"
            name="password"
            required
          />
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Sutinku
            su taisyklėmis
          </label>
          <p class="validation">
            Užsiregistruodamas patvirtinu, kad perskaičiau ir sutinku su Vinted
            taisyklėmis ir privatumo politika. Patvirtinu, jog man ne mažiau
            kaip 18 metų.
          </p>
        </div>
        <button @click.prevent="handleRegistration()" class="button signin">
          Registruotis
        </button>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import api from "@/api/";

export default {
  name: "registration",
  data() {
    return {
      registration: {
        username: "",
        email: "",
        password: "",
        error: false
      }
    };
  },
  methods: {
    handleRegistration() {
      console.log("handleRegistration started");
      const body = {
        nickName: this.registration.username,
        email: this.registration.email,
        password: this.registration.password
      };
      console.log(body, "body");
      api.register(
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
    // register() {
    //   const body = {
    //     nickName: this.registration.username,
    //     email: this.registration.email,
    //     password: this.registration.password
    //   };
    //   console.log(body);
    //   axios
    //     .post("http://localhost:3003/v1/user/register", body, {
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     })
    //     .then(success => {
    //       console.log(success);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }

  //   data: () => ({
  //     username: "",
  //     password: "",
  //     error: false
  //   })
  //   methods: {
  //     register() {
  //       return this.$store.getters["shop/register"]({
  //         username: this.username,
  //         password: this.password
  //       })
  //         .then(success => {
  //           this.$router.push("/");
  //         })
  //         .catch(error => {
  //           this.error = true;
  //         });
  //       //   return console.log(this.username);
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  justify-content: center;
  .register__container {
    width: 320px;
    margin-top: 60px;
    .input {
      width: 100%;
      margin: 20px 0;
      border: none;
      border-bottom: 1px solid $darkGray;
      color: $darkGray;
    }
    .validation {
      font-size: 13px;
    }
    .button {
      margin-top: 30px;
      background-color: transparent;
      border: 1px solid #0ab0ba;
      border-radius: 5px;
      color: #0ab0ba;
      padding: 10px 15px;
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
}
</style>
