/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

type Union = number | string;
type Literal = "enable" | "disable";

let union: Union;

union = "Text";
union = 10;

let literal: Literal;

literal = "enable";
literal = "disable";

export {};
