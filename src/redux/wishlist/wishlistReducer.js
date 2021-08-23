//jshint esversion: 9

const init = localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [];
const data = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")).products : [];

export const wishlistReducer = (initState = init, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            console.log(initState);
            const temp = [...initState];
            data.forEach((element) => {
                if (element.id.toString() === action.payload.toString()) temp.push(element);
            });
            localStorage.setItem("wishlist", JSON.stringify(temp));
            return temp;

        case "REMOVE_FROM_WISHLIST":
            const nTemp = initState.filter((item) => {
                return item.id.toString() !== action.payload.toString();
            });
            localStorage.setItem("wishlist", JSON.stringify(nTemp));
            return nTemp;

        default:
            return initState;
    }
};
