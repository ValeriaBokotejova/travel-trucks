export const getFavoriteIds = (state) => state.favorites.ids;
export const isFavorite = (id) => (state) => state.favorites.ids.includes(id);