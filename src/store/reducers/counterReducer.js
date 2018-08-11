import {CounterActions} from '../actions/counterActions';

const initialState = {
    foods : [
        { id : 1, name:'Meat', imgPath : './foods/meat.jpg', orders : 5 },
        { id : 2, name:'Chicken', imgPath : './foods/chicken.jpg', orders : 0 },
        { id : 3, name:'Burger', imgPath : './foods/burger.jpg', orders : 3 }
    ]
};

const counterReducer = (state = initialState , action) => {
    switch (action.type){
        case CounterActions.ADD_NEW_FOOD:
            let tempPath = './foods/'+action.name.toLowerCase()+'.jpg';
            let isAdd ;
            state.foods.forEach(v => v.id === action.id ? isAdd = true : null );

            return {
                foods:  isAdd ?
                     [...state.foods]
                    :[...state.foods, {
                                    id : action.id,
                                    name : action.name,
                                    imgPath : tempPath,
                                    orders : 0
                                }]

            };

        case CounterActions.REMOVE_FOOD:
            return {
                foods : state.foods.filter( v => v.id !== action.id)
            };

        case CounterActions.ADD_COUNTER :
            return {
                ...state,
                foods : state.foods.map(
                    food => food.id === action.id ?
                        {...food, orders : ++food.orders }
                        : food
                )

            };

        case CounterActions.SUBTRACT_COUNTER :
            return {
                ...state,
                foods : state.foods.map(
                    food => {
                        if (food.id === action.id) {
                            if (food.orders !== 0)
                                return {...food, orders: --food.orders};
                            else
                                return food;
                        }else{
                            return food;
                        }
                    }
                )

            };

        case CounterActions.RESET :
            return {
                foods : [
                    { id : 1, name:'Meat', imgPath : './foods/meat.jpg', orders : 5 },
                    { id : 2, name:'Chicken', imgPath : './foods/chicken.jpg', orders : 0 },
                    { id : 3, name:'Burger', imgPath : './foods/burger.jpg', orders : 3 }
                ]
            };

        default :
            return state;

    }
};

export default counterReducer;