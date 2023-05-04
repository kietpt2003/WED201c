//LƯU Ý: tên function không được đặt trùng với tên hàm trong thư viện(hay còn gọi là navi gì gì đó)
//Ví dụ không được đặt là submit() mà phải là send__submit() vì nó trùng vs submit() của thư viện
function send__submit() {
    // document.getElementsByTagName("input") sẽ trả về 1 array với các phần tử là tag <input>
    var arr = document.getElementsByTagName("input");
    // console.log() dùng để kiểm tra coi biến chạy ra gì (chạy trong phần inspect -> console)
    //console.log(arr)
    // dùng let hoặc var để khai báo biến đều được
    let name = arr[0].value;
    // do arr lưu các tag mà tag có nhiều element như id, value, type,...
    // nên phải chấm value để lấy ra value của nó
    let age = arr[1].value;
    // còn về thứ tự của arr thì theo thứ tự ghi html từ trên xuống
    let add = arr[2].value
    // có ";" hay không đều được
    // .checked trả về true/false (coi người ta có chọn checkbox hay chưa)
    var check1 = arr[5].checked;
    var check2 = arr[6].checked
    let check3 = arr[7].checked
    var gender = "";
    let favorite = ""
    // trong js, let hay var thay thế hết int, string,...(ko chắc nhưng theo cảm nhận là thế)

    // TH gender là đặc biệt vì kiểu radio
    if (arr[3].checked) {
        // cách ghi đơn giản nhất
        gender = "Male"
    } else {
        // cách ghi phức tạp :v
        gender = arr[4].value
    }
    // TH rỗng hết
    if (name == "" || age == "" || add == "") {
        // alert() dùng để xuất ra câu thông báo
        alert("Please fill all fields")
        return
    }
    // isNaN() là hàm is not a number
    if (isNaN(age)) {
        alert("Age must be a number")
    }
    //TH checkbox
    if (check1 || check2 || check3) {
        //Nếu 1 trong mấy cái này true thì k làm gì hết
    } else {
        //Nếu không chọn gì thì báo lỗi
        //Có thể ghi dấu '' hoặc dấu "" ở bất cứ hàm nào cũng đc
        alert('At least one favorite must be checked')
    }
    // Chuỗi favorite đã chọn
    for (let i = 5; i <= 7; i++) {
        // chạy for nếu đã dc checked thì thêm vào favorite
        if (arr[i].checked && i != 7) {
            favorite += arr[i].value + ", "
        }
        // cái dưới này để cho đẹp vì bỏ mất ", "
        if (arr[i].checked && i == 7) {
            favorite += arr[i].value
        }
    }

    //Khi đã nhập hết rồi thì bấm submit phải báo confirm
    // không thể báo alert dc vì confirm cho ra 2 nút OK/Hủy
    // Khi đề bài yêu cầu 2 nút thì dùng confirm()
    // confirm() trả về 2 giá trị 1 hoặc 0
    //ý tưởng: sẽ gán vô biến choice
    var choice = confirm('Confirm your information?\nName: ' + name + '\nAge: ' + age
        + '\nAddress: ' + add + "\nGender: " + gender + '\nFavorite: ' + favorite)
    // Thông báo gửi thành công dựa trên confirm()
    if (choice == 1) {
        alert("Information sent success!")
    } else {
        //Thông báo hủy thành công dựa trên confirm()
        alert('Cancel success!')
    }
    //Bonus thêm prompt() là sẽ xuất ra thông báo cho người dùng nhập và có 2 nút ok/cancel
    //nếu ấn ok thì lưu cái nhập vô var còn cancel thì var = null
    //như ví dụ bên dưới
    //có thể thấy prompt("Please enter your name", "Harry Potter")
    //vế trái là câu thông báo, vế phải là phần điền sẵn trong phần bắt nhập bỏ trống không ghi cũng được
    // let person = prompt("Please enter your name", "Harry Potter");
    // if (person != null) {
    //     document.getElementById("demo").innerHTML =
    //         "Hello " + person + "! How are you today?";
    // }
}

function send__reset() {
    // vì trong file input.html chỉ dùng 1 tag form nên arr[0]
    // bên dưới là cách ghi tắt
    //còn .reset() là hàm của thư viện navi qq gì đó
    document.getElementsByTagName('form')[0].reset()
    //Lưu ý: Cách này chỉ dùng được với tag(thẻ) <form> mà thôi
    //vì .reset() chỉ dùng dc vs <form> thôi
    //Cách khác đó là cho tất cả value về rỗng
}