let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
	menu.classList.toggle("move");


}

 // ARRAYS AND LISTS
 letbiolist = new Array(
    // { img: "#", item: "Educational Background"},
    { img: "#", item: "Projects Done"},
  );

  let listUl = "<div style='width:500px'>";
  for (let i = 0; i < biolistlistst.length; i++) {
    console.log(biolist[i].item);
    listUl +=
      "<table style='width: 100%; margin: 8px; border:1px solid grey; border-radius: 16px;'><tr><td rowspan='3' style='width:150px'><img src='" +
     biolistlist[i].img +
      "' alt='' style='width: 100px; height: 100px; object-fit: cover; border-radius: 50%;' />" +
      "</td></tr> <tr><td>Item: " +
     biolist[i].item +
      "</td></tr> <tr><td>Price: " +
     biolist[i].price +
      "</td></tr></table>";
  }
  listUl += "</div>";
  document.getElementById("listItems").innerHTML = listUl;

