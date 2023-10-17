function wr(){
    console.log(...arguments)
}

// wr("6" / "2");
// wr( '1' + 2 );
// wr(2 + 2 + '1' );
// wr( 6 - '2' );
// wr( +true );
// wr( +"" );
//
// let a, b, c;
//
// a = b = c = 2 + 2;
//
// wr( a ); // 4
// wr( b ); // 4
// wr( c ); // 4
//
// wr( 'Я' > 'А' );
// wr( 'Коты' > 'Кода' );
// wr( 'Сонный' > 'Сон' );

// wr( '2' > 1 );
// wr( 1 > '2' );
// wr( '01' == 1 );



// wr(false);
// wr(Boolean(''));
// wr(Boolean(0));
// wr(Boolean(0n));
// wr(Boolean(-0));
// wr(Boolean(-0n));
// wr(Boolean(NaN));
// wr(Boolean(undefined));
// wr(Boolean(null));


//
// wr(null === undefined)
//
// if (0) { // 0 is falsy
// }
//
// let accessAllowed, age=20;
//
// if(age>18)
//     accessAllowed = true;
// else
//     accessAllowed = false;
//
// let accessAllowed1 = (age > 18) ? true : false;
// let message;
//
// if (age < 3) {
//     message = 'Здравствуй, малыш!';
// } else if (age < 18) {
//     message = 'Привет!';
// } else if (age < 100) {
//     message = 'Здравствуйте!';
// } else {
//     message = 'Какой необычный возраст!';
// }
//
// // message = (age < 3) ? 'Здравствуй, малыш!' :
// //     (age < 18) ? 'Привет!' :
// //         (age < 100) ? 'Здравствуйте!' :
// //             'Какой необычный возраст!';
//
// wr( message );
//
// let firstName = "";
// let lastName = "";
// let nickName = "Суперкодер";
//
// wr( firstName || lastName || nickName || "Аноним"); // Суперкодер
//
// wr(NaN || 2 || true || '1')
// wr(0 || '' || false || undefined)
// wr(( 1 && 2 && 3 && 4 ));
// wr(( 1 && 2 && null && 3 ));
// wr( null || 2 || undefined );
// wr( null || 2 && 3 || 4 );
//
// let value = NaN;
//
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
//
// wr(value)
//
// let a =  2 + 2;
//
// switch (a) {
//     case 3:
//         wr( 'Маловато' );
//         break;
//     case 4:
//         wr( 'В точку!' );
//         // break;
//     case 5:
//     case 6:
//     case 7:
//         wr( 'Перебор' );
//         break;
//     default:
//         wr( "Нет таких значений" );
// }
//
// const  YourName = 'Максим'
// switch (YourName) {
//     case 'Максим':
//         wr( "Его родители отличные мужчины" );
//         break;
//
//     case 'Дима':
//     case 'Петя':
//     case 'Лехя':
//         wr( 'Красавчики' );
//         break;
//
//     default:
//         wr( 'Эдик это вообще ппц, а Андрей это диагнрос' );
// }

