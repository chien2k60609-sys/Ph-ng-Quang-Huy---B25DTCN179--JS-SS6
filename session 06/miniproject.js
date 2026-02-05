let loginAttempts = 0;
let isAuthenticated = false;

while (loginAttempts < 3) {
    let username = prompt("Mời bạn nhập tài khoản:");
    let password = prompt("Mời bạn nhập mật khẩu:");

    if (username === "admin" && password === "12345") {
        alert("Đăng nhập thành công!");
        isAuthenticated = true;
        break;
    } else {
        loginAttempts++;
        let remain = 3 - loginAttempts;

        if (username !== "admin" && password !== "12345") {
            alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${remain} lần thử.`);
        } else if (username !== "admin") {
            alert(`Sai tài khoản! Bạn còn ${remain} lần thử.`);
        } else {
            alert(`Sai mật khẩu! Bạn còn ${remain} lần thử.`);
        }
    }
}


if (isAuthenticated === false) {
    alert("Tài khoản đã bị khóa!");
    
}else {
    let libraries = ["Toán", "Văn", "Anh"];
 let Choice ;
 do {
    Choice = prompt(`
        1 Nhập thêm lô sách mới.
        2 Hiển thị danh sách sách.
        3 Tìm kiếm sách.
        4 Cập nhật tên sách.
        5 Đảo ngược thứ tự kệ sách.
        6 Nhập kho từ nguồn khác.
        7 Thoát chương trình.
`)    
switch (Choice) {
    case "1":
          let sach = prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");
          let sachmoi = sach.split(",");
          let dem = 0;
          for (let i = 0; i < sachmoi.length; i++) {
            let tensach = sachmoi[i].trim(); 
            if (tensach !== "") {
              libraries.push(tensach);
              dem++;
            }
            alert(`Đã thêm thành công ${dem} cuốn sách mới.`);
          }

        break;
    case "2" :
        console.log("danh sách");
        for(let i = 0 ; i < libraries.length ; i ++) {
            console.log(`stt${[i+1]} - tên sách ${libraries[i]}`);
        }
         alert("Danh sách đã in ra");
        
        break;
    case "3" :
        let searchName = prompt("Nhập tên cuốn sách cần tìm:").trim().toLowerCase();
        if (libraries.includes(searchName)) {
          let vitri = libraries.indexOf(searchName);
          console.log( `Sách "${searchName}" được tìm thấy tại vị trí số ${vitri} trong mảng.`);
          
        } else {
          console.log(`Không tìm thấy sách "${searchName}" trong kho.`);;
          
        }
        break;
    case "4" :
        let uppdatebook =(prompt("Nhập tên sách cần sửa:").trim());
        let timthay = libraries.indexOf(uppdatebook);

        if (timthay !== -1) {
          let tenmoi = prompt(`Tìm thấy sách "${uppdatebook}". vui long nhập tên mới:`);
          if (tenmoi) {
            libraries[timthay] = tenmoi;
            alert("Cập nhật thành công!");
          }
        } else {
          alert("Sách không tồn tại để sửa.");
        }
        break;
    case "5" :
         libraries.reverse();
         console.log("danh sách sau khi đảo ngược");
         for(let i = 0 ; i <libraries.length ; i ++) {
           console.log(`STT ${i + 1} - ${libraries[i]}`);
         }
         
        break;
    case "6" :
        let librarys2 = ["Sách Kỹ Năng", "Truyện Tranh"];
        libraries = libraries.concat(librarys2);
        alert("Đã gộp thành công.");
        break;
    case "7" :
        console.log("thoát chương trình");
        
        break;

    default:
        console.log("chỉ chọn từ 1-7");
        
        break;
}
 } while (Choice !=="7");

}
 
