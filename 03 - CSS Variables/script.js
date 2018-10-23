const inputs = document.querySelectorAll('.controls input');
const handleUpdate = (e) => {
  const element = e.target;
  const suffix = element.dataset.sizing || '';

  document.documentElement.style.setProperty(`--${element.name}`, element.value + suffix);
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

