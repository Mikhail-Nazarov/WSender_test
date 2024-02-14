var ul = document.getElementById("list_body");
function push() {
    var _a;
    var input = document.getElementById("list_add-item-bar_input");
    var text = (_a = input) === null || _a === void 0 ? void 0 : _a.value;
    if (!text) {
        if (!(input === null || input === void 0 ? void 0 : input.classList.contains("invalid")))
            input === null || input === void 0 ? void 0 : input.classList.add("invalid");
        return;
    }
    if (input === null || input === void 0 ? void 0 : input.classList.contains("invalid"))
        input === null || input === void 0 ? void 0 : input.classList.remove("invalid");
    var li = document.createElement("li");
    li.className = "list_body_item";
    var p = document.createElement("p");
    p.textContent = text;
    li === null || li === void 0 ? void 0 : li.appendChild(p);
    var btn = document.createElement("button");
    btn.className = "button list_body_item_delete-btn";
    btn.onclick = function () {
        ul === null || ul === void 0 ? void 0 : ul.childNodes.forEach(function (node) {
            if (node === li) {
                li.remove();
            }
        });
    };
    li === null || li === void 0 ? void 0 : li.appendChild(btn);
    ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
    input.value = "";
}
