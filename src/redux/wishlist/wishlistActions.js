//jshint esversion: 9

export const addToWishlist = (id) => {
    return {
        type: "ADD_TO_WISHLIST",
        payload: id,
    };
};

export const removeFromWishlist = (id) => {
    return {
        type: "REMOVE_FROM_WISHLIST",
        payload: id,
    };
};
