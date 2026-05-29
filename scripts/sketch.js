let size = 16;
const container = document.querySelector('.container');

const reset = document.querySelector('.reset');

const newGrid = document.querySelector('.newGrid');

newGrid.addEventListener(
  'click', () => {
    size = Number(prompt(`Select a new grid size
Max size is 100`));
    if(size > 100) return alert(`Error: Grid size is bigger than 100`);
    if(!size) size = 16;
    grid();
  });

function grid(){
  container.innerHTML = '';
  container.style.setProperty('--size', size);

  for(let i = 0; i < (size ** 2); i++){
    const square = document.createElement('div');
    
    square.className = 'square'
    square.style.width = 'calc(100%/var(--size))'
    square.style.height = 'calc(100%/var(--size))'
    container.appendChild(square);
    
  
    square.addEventListener(
      'mouseover', () =>  square.classList.add('painted')
    );
  };
};

reset.addEventListener(
  'click',
   () => document.querySelectorAll('.painted').forEach(sq => {
    sq.className = 'square';
   })
);

grid();