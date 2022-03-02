let watches = JSON.parse(localStorage.getItem("basket"));
let count = 1;
for (let watch of watches) {
    let tdN = document.createElement("td");
    let tdImage = document.createElement("td");
    let tdName = document.createElement("td");
    let tdCount = document.createElement("td");
    let tdDelete = document.createElement("td");
    let icon = document.createElement('i');
    icon.className = "fa-solid fa-minus";
    icon.onclick = function () {
        this.parentElement.parentElement.remove();
        localStorage.removeItem(this.parentElement.parentElement);
        let tbody=document.getElementsByTagName('tbody')[0];
        if(tbody.children.length===0){
            alert("Kasibsizz. :DDD")
        }
    }
    tdN.innerText = count;
    count++;

    let img = document.createElement("img");
    img.setAttribute("src", watch.Src);
    tdImage.append(img)
    tdName.innerText = watch.Name;
    tdCount.innerText = watch.Count
    tdDelete.append(icon)

    let tr = document.createElement("tr");
    tr.append(tdN, tdImage, tdName, tdCount, tdDelete);

    document.querySelector(".table").lastElementChild.append(tr)

}
