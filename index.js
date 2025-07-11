const desinput = document.getElementById("desplay")
function item(inp) {
    desinput.value += inp
}
function cleardisplay() {
    desinput.value = "";
}
function equal() {
    desinput.value = eval(desinput.value);
}
function deletelast() {
    desinput.value = desinput.value.slice(0, -1);
}