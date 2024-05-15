document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('identify-event').classList.remove('hidden');
});

document.getElementById('random-archetype-btn').addEventListener('click', () => {
    const archetypeOptions = ['Archetype 1', 'Archetype 2', 'Archetype 3', 'Archetype 4', 'Archetype 5'];
    const randomArchetype = archetypeOptions[Math.floor(Math.random() * archetypeOptions.length)];
    document.getElementById('archetype-options').textContent = `Selected Archetype: ${randomArchetype}`;
    document.getElementById('archetype-options').classList.remove('hidden');
    document.getElementById('add-context').classList.remove('hidden');
});

document.querySelectorAll('.random-card-btn').forEach(button => {
    button.addEventListener('click', () => {
        const cardType = button.getAttribute('data-type');
        let cardOptions;
        if (cardType === 'macro-driver') {
            cardOptions = ['Macro Driver 1', 'Macro Driver 2', 'Macro Driver 3'];
        } else if (cardType === 'experience-principle') {
            cardOptions = ['Experience Principle 1', 'Experience Principle 2', 'Experience Principle 3', 'Experience Principle 4'];
        } else if (cardType === 'event-touch-point') {
            cardOptions = ['Event Touch Point 1', 'Event Touch Point 2', 'Event Touch Point 3', 'Event Touch Point 4', 'Event Touch Point 5', 'Event Touch Point 6', 'Event Touch Point 7', 'Event Touch Point 8'];
        }
        const randomCard = cardOptions[Math.floor(Math.random() * cardOptions.length)];
        document.getElementById(`${cardType}-options`).textContent = `Selected ${cardType.replace('-', ' ')}: ${randomCard}`;
    });
});
