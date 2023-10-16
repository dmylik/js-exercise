// console.log("6" / "2");
// console.log( '1' + 2 );
// console.log(2 + 2 + '1' );
// console.log( 6 - '2' );
// console.log( +true );
// console.log( +"" );
//
// let a, b, c;
//
// a = b = c = 2 + 2;
//
// console.log( a ); // 4
// console.log( b ); // 4
// console.log( c ); // 4
//
// console.log( 'Я' > 'А' );
// console.log( 'Коты' > 'Кода' );
// console.log( 'Сонный' > 'Сон' );

// console.log( '2' > 1 );
// console.log( 1 > '2' );
// console.log( '01' == 1 );



// console.log(false);
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(0n));
// console.log(Boolean(-0));
// console.log(Boolean(-0n));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

console.log(null === undefined)

if (0) { // 0 is falsy
}

let accessAllowed, age=20;

if(age>18)
    accessAllowed = true;
else
    accessAllowed = false;

let accessAllowed1 = (age > 18) ? true : false;
let message;

if (age < 3) {
    message = 'Здравствуй, малыш!';
} else if (age < 18) {
    message = 'Привет!';
} else if (age < 100) {
    message = 'Здравствуйте!';
} else {
    message = 'Какой необычный возраст!';
}

// message = (age < 3) ? 'Здравствуй, малыш!' :
//     (age < 18) ? 'Привет!' :
//         (age < 100) ? 'Здравствуйте!' :
//             'Какой необычный возраст!';

console.log( message );

let firstName = "";
let lastName = "";
let nickName = "Суперкодер";

console.log( firstName || lastName || nickName || "Аноним"); // Суперкодер

console.log(( 1 && 2 && null && 3 ));
console.log(( null || 2 || undefined ));
console.log( null || 2 && 3 || 4 );

let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

console.log(value)
