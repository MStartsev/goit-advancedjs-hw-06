/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, B extends AllType>(
  top: Pick<T, keyof AllType>,
  bottom: Pick<B, keyof AllType>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Example of using the function
const topObj = {
  name: "Top",
  position: 1,
  color: "Red",
  weight: 10,
  likes: 20,
};
const bottomObj = {
  name: "Bottom",
  position: 2,
  color: "Blue",
  weight: 200,
};

const result: AllType = compare(topObj, bottomObj);
console.log(result); //{name: 'Top', color: 'Red', position: 2, weight: 200}

export {};
