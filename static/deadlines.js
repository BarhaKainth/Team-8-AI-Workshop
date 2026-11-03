// This runs once for every row in the table.
//   row          the table row (<tr>)
//   cell         the deadline cell (<td>)
//   opportunity  the row's data, including its deadline date
function showDeadline(row, cell, opportunity) {
  const [year, month, day] = opportunity.deadline.split("-").map(Number);
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const deadline = Date.UTC(year, month - 1, day);
  const daysLeft = (deadline - today) / 86400000;
  let labelText;
  let labelClass;

  if (daysLeft < 0) {
    labelText = "Overdue";
    labelClass = "deadline-overdue";
  } else if (daysLeft === 0) {
    labelText = "Due today";
    labelClass = "deadline-today";
  } else if (daysLeft <= 7) {
    labelText = "Due in " + daysLeft + (daysLeft === 1 ? " day" : " days");
    labelClass = "deadline-soon";
  } else {
    return;
  }

  const label = document.createElement("span");
  label.className = "deadline-label " + labelClass;
  label.textContent = labelText;
  cell.appendChild(label);
}
