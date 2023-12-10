export const setForm = (id, username, birthday, ability) => ({
    type: "SET_FORM",
    payload: {
        id,
        username,
        birthday,
        ability,
    },
});

export const setLocalData = (data) => ({
    type: "SET_LOCAL_DATA",
    payload: data,
});

export const getData = (id, username, birthday, ability) => ({
    type: "GET_PREV_VALUES",
    payload: {
        id,
        username,
        birthday,
        ability,
    },
});

export const updateData = (updatedData) => ({
    type: "UPDATE_DATA",
    payload: updatedData,
});

