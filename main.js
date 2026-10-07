// Initial array of school needs data (Array of Objects)
const schoolNeeds = [
  { schoolName: 'School A', studentCount: 500, volunteerCount: 10 },
  { schoolName: 'School B', studentCount: 300, volunteerCount: 8 },
  { schoolName: 'School C', studentCount: 400, volunteerCount: 12 }
];

// DOM Element references
const tableBody = document.getElementById('needs-table-body');
const totalVolunteersElement = document.getElementById('total-volunteers');
const addSchoolForm = document.getElementById('add-school-form');

/**
 * Function: renderTable
 * Renders table rows by iterating over schoolNeeds using a FOR LOOP
 * and updates total volunteer count.
 */
function renderTable() {
  // Clear existing content in table body
  tableBody.innerHTML = '';
  let totalVolunteers = 0;

  // Requirement: FOR LOOP to iterate through array elements
  for (let i = 0; i < schoolNeeds.length; i++) {
    const item = schoolNeeds[i];
    totalVolunteers += item.volunteerCount;

    // Create a new table row element
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.schoolName}</td>
      <td>${item.studentCount}</td>
      <td>${item.volunteerCount}</td>
    `;

    // Append created row to table body
    tableBody.appendChild(row);
  }

  // Update total count in footer
  totalVolunteersElement.textContent = totalVolunteers;
}

/**
 * Requirement: EVENT LISTENER
 * Listens for form submit action to grab input values and append to table
 */
addSchoolForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload on submission

  // Read input values
  const schoolNameInput = document.getElementById('schoolName').value.trim();
  const studentCountInput = parseInt(document.getElementById('studentCount').value, 10);
  const volunteerCountInput = parseInt(document.getElementById('volunteerCount').value, 10);

  // Validate inputs
  if (schoolNameInput && !isNaN(studentCountInput) && !isNaN(volunteerCountInput)) {
    // Add new entry object to array
    schoolNeeds.push({
      schoolName: schoolNameInput,
      studentCount: studentCountInput,
      volunteerCount: volunteerCountInput
    });

    // Re-render table to display updated data
    renderTable();

    // Reset form inputs
    addSchoolForm.reset();
  }
});

// Initial rendering call on load
renderTable();