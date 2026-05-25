const li_el = document.querySelectorAll("li");
const submit_btn = document.getElementById("submit-btn");
const rating_container_el = document.getElementById("rating-container-main");
const success_msg_el = document.getElementById("success-msg");
const user_rating_el = document.getElementById("usr-select-rating");
console.log(li_el)
document.getElementById('submit-btn').disabled = true;
li_el.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.add("li-select")
        user_rating_el.textContent = `You selected ${el.textContent} out of 5`
        select_rating(el)
    })
})
submit_btn.addEventListener("click", () => {
    console.log("clicked")
    console.log(rating_container_el)
    console.log(success_msg_el)
    rating_container_el.classList.add("hide")
    success_msg_el.classList.remove("hide")
})
function select_rating(rating) {
    li_el.forEach(el => {
        console.log(el.textContent)
        el.textContent !== rating.textContent ? el.classList.remove("li-select") : null
    })
    document.getElementById('submit-btn').disabled = false;
}

