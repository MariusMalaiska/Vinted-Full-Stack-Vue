export default {
  //   getSelectedItems: ({ items, sex, category }) =>
  //     items.filter(item => item.sex == sex && item.category == category),
  getCategories: ({ categories }) => categories,
  getCatalog: ({ categories }) => categories.catalog,
  homeItems: ({ items }) => items,
  getItemById: state => id => state.items.find(item => item.id === id),
  users: ({ users }) => users,
  getUserById: state => id => state.users.find(user => user.id === id),

  //  register: ({ categories }) => categories,

  //   _________________________________________
  getHomeItems: ({ items }) => items,

  getSelectedItems: ({ selectedItems }) => selectedItems,

  getItemCount: ({ selectedItemCount }) => selectedItemCount,

  getSearchQuery: ({ searchQuery }) => searchQuery,

  //   getItemById: state => id => state.items.find(todo => todo.id === id),

  getIsLoading: ({ isLoading }) => isLoading,

  getFilters: ({ filters }) => filters,

  getItemsPerPageOptions: ({ itemsPerPageOptions }) => itemsPerPageOptions,

  getSortOptions: ({ sortOptions }) => sortOptions,

  getPagination: ({ pagination }) => pagination
};
