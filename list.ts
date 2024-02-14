const ul = document.getElementById("list_body");

function push() {
  const input = document.getElementById("list_add-item-bar_input");
  const text = (input as HTMLInputElement)?.value;
  if (!text) {
    if (!input?.classList.contains("invalid")) input?.classList.add("invalid");
    return;
  }
  if (input?.classList.contains("invalid")) input?.classList.remove("invalid");
  const li = document.createElement("li");
  li.className = "list_body_item";
  const p = document.createElement("p");
  p.textContent = text;
  li?.appendChild(p);
  const btn = document.createElement("button");
  btn.className = "button list_body_item_delete-btn";
  btn.onclick = () => {
    ul?.childNodes.forEach((node) => {
      if (node === li) {
        li.remove();
      }
    });
  };
  li?.appendChild(btn);
  ul?.appendChild(li);
  (input as HTMLInputElement).value = "";
}
