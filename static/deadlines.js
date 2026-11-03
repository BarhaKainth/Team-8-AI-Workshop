// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including days_left from the server
function showDeadline(row, cell, opportunity) {
  const statusCell = document.createElement("td");
  const label = document.createElement("span");
  const daysLeft = opportunity.days_left;

  label.className = "deadline-status";
  if (daysLeft < 0) {
    label.classList.add("deadline-overdue");
    label.textContent = "Overdue";
  } else if (daysLeft === 0) {
    label.classList.add("deadline-today");
    label.textContent = "Due today";
  } else {
    label.textContent = "Due in " + daysLeft + (daysLeft === 1 ? " day" : " days");
    if (daysLeft <= 7) {
      label.classList.add("deadline-soon");
    } else {
      label.classList.add("deadline-upcoming");
    }
  }

  statusCell.appendChild(label);
  row.insertBefore(statusCell, cell.nextSibling);
}
