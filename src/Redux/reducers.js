const initialState = {
    id: null,
    username: "",
    birthday: "",
    ability: "",
    localDataes: [],
};

const storedData = JSON.parse(localStorage.getItem("formData"));

if (storedData) {
    initialState.localDataes = storedData;
}

console.log(JSON.parse(localStorage.getItem("formData")));

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FORM":
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                birthday: action.payload.birthday,
                ability: action.payload.ability,
            };

        case "SET_LOCAL_DATA":
            const localStorageData = JSON.parse(localStorage.getItem("formData")) || [];
            return {
                ...state,
                localDataes: localStorageData,
            };

        case "GET_PREV_VALUES":
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                birthday: action.payload.birthday,
                ability: action.payload.ability,
            };

        case "UPDATE_DATA":
            const updatedLocalDataes = state.localDataes.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            localStorage.setItem("formData", JSON.stringify(updatedLocalDataes));

            return {
                ...state,
                localDataes: updatedLocalDataes,
                id: action.payload.id,
                username: action.payload.username,
                birthday: action.payload.birthday,
                ability: action.payload.ability,
            };

        default:
            return state;
    }
};

export default FormReducer;