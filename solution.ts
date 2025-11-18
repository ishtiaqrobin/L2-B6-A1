type Value = string | number | boolean;

const formatValue = (value: Value): Value => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return 0;
};

const getLength = (value: string | (string | number | boolean)[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Rating = {
  title: string;
  rating: number;
};

const filterByRating = (items: Rating[]): Rating[] => {
  return items.filter((item) => item.rating >= 4 && item.rating <= 5);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (books: Book) => {
  const { title, author, publishedYear, isAvailable } = books;

  const available = isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${available}`
  );
};

const getUniqueValues = (
  array1: (string | number)[],
  array2: (string | number)[]
): (string | number | undefined)[] => {
  const newArray: (string | number | undefined)[] = [];

  const exists = (
    unique: (string | number | undefined)[],
    value: string | number | undefined
  ): boolean => {
    for (let i = 0; i < unique.length; i++) {
      if (unique[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
    if (!exists(newArray, element)) {
      newArray.push(element);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if (!exists(newArray, element)) {
      newArray.push(element);
    }
  }

  return newArray;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }

  const totalPrice = products
    .map((product) => {
      const totalBeforeDiscount = product.price * product.quantity;

      if (
        product.discount !== undefined &&
        product.discount >= 0 &&
        product.discount <= 100
      ) {
        const discountAmount = (totalBeforeDiscount * product.discount) / 100;
        return totalBeforeDiscount - discountAmount;
      } else {
        return totalBeforeDiscount;
      }
    })
    .reduce((sum, current) => sum + current, 0);

  return totalPrice;
};
