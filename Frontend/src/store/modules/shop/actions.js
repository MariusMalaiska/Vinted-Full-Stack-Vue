import {
  TOGGLE_IS_LOADING,
  CREATE_CATEGORY_FILTERS,
  TOGGLE_FILTER,
  SELECT_FILTERED_ITEMS,
  SELECT_QUERIED_ITEMS,
  SET_SEARCH_QUERY,
  CHANGE_ITEMS_PER_PAGE_OPTION,
  CHANGE_SORT_OPTION,
  SORT_ITEMS,
  SELECT_PAGE_ITEMS,
  SET_ITEM_COUNT,
  CREATE_PAGINATION,
  SET_PAGE
} from "./mutation-types";

export default {
  async fetchItems({ commit, dispatch }) {
    commit(TOGGLE_IS_LOADING);
    setTimeout(() => {
      // Užaugęs būsiu API CALL
      commit(CREATE_CATEGORY_FILTERS);
      dispatch("selectItems");
      commit(TOGGLE_IS_LOADING);
    }, 500);
  },

  filterItems({ commit, dispatch }, filterName) {
    commit(TOGGLE_FILTER, filterName);
    dispatch("selectItems");
  },

  changeItemsPerPageOption({ commit, dispatch }, itemsPerPage) {
    commit(CHANGE_ITEMS_PER_PAGE_OPTION, itemsPerPage);
    commit(SET_PAGE, 1);
    dispatch("selectItems");
  },

  changeSortOption({ commit, dispatch }, name) {
    commit(CHANGE_SORT_OPTION, name);
    dispatch("selectItems");
  },

  setPage({ commit, dispatch }, page) {
    commit(SET_PAGE, page);
    dispatch("selectItems");
  },
  setSearchQuery({ commit, dispatch }, searchQuery) {
    commit(SET_SEARCH_QUERY, searchQuery);
    dispatch("selectItems");
  },

  selectItems({ commit }) {
    commit(SELECT_QUERIED_ITEMS);
    commit(SELECT_FILTERED_ITEMS);
    commit(SET_ITEM_COUNT);
    commit(SORT_ITEMS);
    commit(SELECT_PAGE_ITEMS);
    commit(CREATE_PAGINATION);
  }

  // async register({ commit }, { nickName, email, password }) {
  //   // return new Promise((resolve, reject) => {
  //   try {
  //     const response = await fetch("http://localhost:3002/v1/user/register", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         nickName,
  //         password,
  //         email
  //       }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     });
  //     //   const json = await response.json();
  //     if (response.ok) {
  //       // setToken(response.headers.get("x-auth-node"));
  //       console.log(response);
  //       // localStorage.setItem("token", response.headers.get("x-auth-node"));
  //       history.replace("/");
  //     } else {
  //       setError(response);
  //     }
  //   } catch (e) {
  //     console.log(await e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  // )}
};
