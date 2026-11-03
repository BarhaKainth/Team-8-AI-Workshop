// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const days = opportunity.days_left;
  const label = document.createElement("span");
  label.className = "deadline-label";

  if (days < 0) {
    label.textContent = "Overdue";
    label.classList.add("deadline-overdue");
  } else if (days === 0) {
    label.textContent = "Due today";
    label.classList.add("deadline-soon");
  } else if (days <= 7) {
    label.textContent = `Due in ${days} ${days === 1 ? "day" : "days"}`;
    label.classList.add("deadline-soon");
  } else {
    return;
  }

  cell.appendChild(label);
}
