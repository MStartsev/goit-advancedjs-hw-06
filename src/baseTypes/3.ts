let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  // Checking if some is a string
  str = some; // Now it's safe to assign the value
} else {
  // Handling the case when some is not a string
  console.error("The value is not a string");
}

export {};
