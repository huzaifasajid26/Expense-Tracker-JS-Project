// Accessing HTML Elements

// Add Expense Section
let amount = document.getElementById("amount");
let dropDown = document.getElementById("dropdown");
let description = document.getElementById("description");
let addBtn = document.getElementById("btn");
// =====================================
let category = document.getElementById("category");
let descriptionList = document.getElementById("description-list");
let amountList = document.getElementById("amount-list");
let date = document.getElementById("date");
let del = document.getElementById("delete");
// =====================================
let rs = document.getElementById("rs");
let categoryDiv = document.getElementsByClassName("category-summary");

// Global Variables

let total = 0;

const addExpense = (e) => {
  e.preventDefault();

  if (
    amount.value !== "" &&
    dropDown.value !== "" &&
    description.value !== ""
  ) {
    if (!isNaN(amount.value)) {
      // Amount Section
      let aItem = document.createElement("p");

      aItem.innerText = amount.value;

      aItem.classList.add("amount-item");

      amountList.appendChild(aItem);

      amount.value = "";

      // description Section

      let dsItem = document.createElement("p");

      dsItem.innerText = description.value;

      dsItem.classList.add("description");

      descriptionList.appendChild(dsItem);

      description.value = "";

      // Category Section

      let drItem = document.createElement("p");

      drItem.innerText = dropDown.value;

      drItem.classList.add("category");

      category.appendChild(drItem);

      // Date & Time Section

      let dateItme = document.createElement("p");

      let now = new Date();

      dateItme.innerText = now.toLocaleString();

      dateItme.classList.add("date");

      date.appendChild(dateItme);

      // Delete Button Section

      let deleteBtn = document.createElement("button");
      let deleteBtnDiv = document.createElement("div");

      deleteBtn.innerText = "Delete";

      deleteBtn.classList.add("del");
      deleteBtnDiv.classList.add("delete-btn-parent");

      deleteBtnDiv.appendChild(deleteBtn);
      del.appendChild(deleteBtnDiv);

      deleteBtn.addEventListener("click", () => {
        // Minus Section
        let deleteAmount = Number(aItem.innerText);

        total = total - deleteAmount;

        rs.innerText = `Rs: ${total}`;

        aItem.remove();
        dsItem.remove();
        drItem.remove();
        dateItme.remove();
        deleteBtnDiv.remove();

        summaryP.innerText =  ""
      });

      // Total Amount Section

      // Plus Section
      let userAmount = Number(aItem.innerText);

      total = total + userAmount;

      rs.innerText = `Rs: ${total}`;
      // ================================================

      let summaryAmount = aItem.innerText;
      let summaryDr = drItem.innerText;

      let summaryP = document.createElement("p");

      summaryP.innerText = `${summaryDr} : ${summaryAmount}`;

      categoryDiv[0].appendChild(summaryP);
    } else {
      alert("please enter a number");
    }
  } else {
    alert("please fill all fields");
  }
};

addBtn.addEventListener("click", addExpense);

