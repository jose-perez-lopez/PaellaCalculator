const CALCULATE_INGREDIENT_AMOUNTS = 'CALCULATE_INGREDIENT_AMOUNTS';

const initialState = {};

const IngredientReducer = (state = initialState, action) => {

    console.log("-----------",action.type,state)
    switch (action.type) {
        case CALCULATE_INGREDIENT_AMOUNTS:
            console.log("-----1-----")
            return { ...state,
                        peopleNumber : action.payload,
                        rice: action.payload *0.1,
                        water: action.payload *0.225
            }
        default: {
            console.log("-----2-----")
            return state;
        }
    }
}


export {IngredientReducer};