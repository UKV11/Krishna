// Initialize AOS animations
AOS.init();

// Dark Mode Toggle
const modeToggleBtn = document.getElementById('modeToggle');
modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Change button text based on current mode
  if (document.body.classList.contains('dark-mode')) {
    modeToggleBtn.textContent = 'Light Mode';
  } else {
    modeToggleBtn.textContent = 'Dark Mode';
  }
});

// Example Plotly Chart
const trace1 = {
  x: [1, 2, 3, 4, 5],
  y: [10, 15, 13, 17, 22],
  type: 'scatter',
  mode: 'lines+markers',
  marker: { color: 'var(--primary-color)' }
};
const layout = {
  title: 'Sample Plotly Chart',
  paper_bgcolor: 'var(--bg-color)',
  plot_bgcolor: 'var(--bg-color)',
  font: {
    color: 'var(--text-color)'
  }
};
Plotly.newPlot('chartDiv', [trace1], layout);
