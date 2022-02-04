 const reducer = (posts = [], action) => {
    switch (action.types) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...posts,action.payload];
        default:
            return posts;
    }
};
export default reducer;