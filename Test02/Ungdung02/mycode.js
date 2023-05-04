// cách đổi màu bằng ID
// document.getElementById('name').style.backgroundColor = "yellow"
// để không màu thì backgroundColor = ""
function Color_Background(input) {
    if (input == 'name') {
        document.getElementById('name').style.backgroundColor = "yellow"
        document.getElementById('phone').style.backgroundColor = ""
        document.getElementById('txt').style.backgroundColor = ""
    } else if (input == 'phone') {
        document.getElementById('name').style.backgroundColor = ""
        document.getElementById('phone').style.backgroundColor = "yellow"
        document.getElementById('txt').style.backgroundColor = ""
    } else if (input == 'txt') {
        document.getElementById('name').style.backgroundColor = ""
        document.getElementById('phone').style.backgroundColor = ""
        document.getElementById('txt').style.backgroundColor = "yellow"
    }
}
//Thêm attribute từ element
//Cách 1: từ một element.[tên attribute cần thêm(riêng class thì phải ghi là className vì trong js bị trùng)] rồi = '[cái trong attribute đó]'
//        ví dụ: document.getElementById('name').style = 'border: 2px blue solid; height: 100px; width: 100px;'
//        nhưng cách này không thêm được attribute lạ(mới) không có trong tag đó
//Cách 2: từ một element dùng .setAttribute() để tạo ra một thuộc tính style, name, id,...
//        dữ liệu truyền vào là 2 string(string đầu là attribute, string sau là mấy cái trong attribute đó) ví dụ:
//        document.getElementById('name').setAttribute('style', 'border: 2px blue solid; height: 100px; width: 100px;')
//        thằng này vip hơn vì nó có thể tạo ra một thuộc tính lạ(mới) không có trong tag đó. ví dụ
//        document.getElementById('name').setAttribute('abc', 'haha atribute lạ kìa')

//Lấy attribute từ element
//Cách 1: là '.' Ví dụ: document.getElementById('name').style
//        lưu ý chỉ có thể dùng vs mấy cái như alert() thôi và mấy attribute lạ(mới) ko có trong tag đó thì k gọi đc
//Cách 2: .getAttribute() là để lấy ra thuộc tính đó, ví dụ:
//        var nameInputID = document.getElementById('name').getAttribute('id')
//        lưu ý: nếu trong cái tag đó bên trong html chưa dc dùng thuộc tính đó ví dụ style(vì thường style qua bên css)
//             : thì khi getAttribute('style) sẽ ra null và có thể kết hợp với setAttribute để tạo style trước rồi mới get ra
//        và có thể get được những attribute lạ(mới) không có trong tag đó