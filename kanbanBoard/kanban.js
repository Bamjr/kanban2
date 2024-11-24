const attachCard = (card) => {
    const swimlanes = document.querySelectorAll('.swimlane');
    const randomSwimland = Math.floor(Math.random() * swimlanes.length);

    swimlanes[randomSwimland].appendChild(card);
}

const createCard = (index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerText = `Card #${index}`;
    cardElement.draggable = 'true';

    cardElement.addEventListener('dragstart', (e) => {
        e.target.id = 'dragged';
    });

    cardElement.addEventListener('dragend', (e) => {
        e.target.id = undefined;
    });

    attachCard(cardElement);
}

const createCards = (amount) => {
    for (let i = 0; i < amount; i++) {
        createCard(i);
    }
}

const addEventListenersToSwimlanes = () => {
    const swimlanes = document.querySelectorAll('.swimlane');

    for (let i = 0; i < swimlanes.length; i++) {
        swimlanes[i].addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        swimlanes[i].addEventListener('drop', (e) => {
            e.preventDefault();

            const draggedCard = document.querySelector('#dragged');
            draggedCard.parentNode.removeChild(draggedCard);
            e.currentTarget.appendChild(draggedCard);
        })
    }
}

createCards(10);
addEventListenersToSwimlanes();
