//for...loop

//Lặp đi lặp lại tác vụ: giải bài tập về nhà
//B1: Mở máy
//B2: Đọc đề
//B3: Ptich
//B4: Code
//B5: Đóng máy đi ngủ

// for(let i = 1; i<=4; i = i + 1){   //for(let i = 1; i < 8; i = i + 2)    //for(let i = 8; i > 0; i = i - 2) --> lap lai 4 lan
//     //bodyconsole.log("Mở máy");
//     console.log("Đọc để");
//     console.log("Phân tích");
//     console.log("Code");
//     console.log("Đóng máy");
//     console.log("Đi ngủ");
// }

// for(let i = 0; i < 5; i = i + 1){
//     for(let j = 0; j < 4; j = j + 2){
//         console.log(i,j);
//     }
// }





//Tính năng đăng nhập vào fb.com
//Kiểm tra (email, password)
//Đúng hết --> Vào trang newfeed
//Sai --> Lặp lại quá trình trên

//Cách 1:
// B1:
// Cho 1 biến result = 49
// Cho người dùng nhập vào giá trị cần đoán
// Lặp đi lặp lại quá trình kiểm
// tra xem số người dùng đoán có === result
// Nếu trùng --> In ra là Bingo
// Nếu sai lặp đi lặp lại quá trình trên

// let result = 49;
// let loop = true;

// while (loop === true) {
//   // B2: Cho người dùng nhập vào 1 biến
//   // answer
//   let answer = +prompt("Mời bạn nhập vào số cần đoán");

//   // B3:
//   if (answer === result) {
//     console.log("Bingo");
//     loop = false;
//   } else {
//     console.log("Sai rồi, mời bạn nhập lại số cần đoán !!!");
//   }
// }



//Cách 2:
// let result = 49;
// let answer;
// while (answer !== result) {
//   let answer = +prompt("Mời bạn nhập vào số cần đoán");
// }
// console.log("Bingo");



let condition = 1;
do{
    console.log("Hello world");
} while(condition == 0);

