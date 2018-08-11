
export const CounterActions = {
    ADD_COUNTER : 'ADD_COUNTER',
    SUBTRACT_COUNTER : 'SUBTRACT_COUNTER',

    ADD_NEW_FOOD : 'ADD_NEW_FOOD',
    REMOVE_FOOD : 'REMOVE_FOOD',
    RESET : 'RESET'
};



export const addCounter = id => ({
    type : CounterActions.ADD_COUNTER,
    id
});

export const subtractCounter = id => ({
    type : CounterActions.SUBTRACT_COUNTER,
    id
});


export const addNewFood = (id, name) => ({
    type : CounterActions.ADD_NEW_FOOD,
    id ,
    name
});

export const removeFood = id => ({
    type : CounterActions.REMOVE_FOOD,
    id
});

export const resetCounter = () => ({
    type : CounterActions.RESET,
});

export const addFoodFunc = (name) => {
    //console.log("ffffffffff",name);
      switch (name){
          case "Meat":
              return addNewFood(1, name);
          case 'Chicken':
              return addNewFood(2, name);
          case 'Burger':
              return addNewFood(3, name);
          case "Salad":
              return addNewFood(4, name);
          case "Fish":
              return addNewFood(5, name);
          case "Pasta":
              return addNewFood(6, name);

      }

      return addNewFood(1, 'Meat')
};
