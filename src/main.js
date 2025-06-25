"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("items");
    const displayImage = document.getElementById("displayImage");
    const photographer = document.getElementById("photographer");
    const description = document.getElementById("description");
    const score = document.getElementById("score");
    const increaseBtn = document.getElementById("increaseScore");
    const decreaseBtn = document.getElementById("decreaseScore");

    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    
    let currentKey = null;

    select.addEventListener("change", function () {
        currentKey = select.value;
        if (itemData[currentKey]) {
            const item = itemData[currentKey];
            displayImage.src = item.image;
            photographer.value = item.photographer;
            description.value = item.description;
            score.value = item.score;
        }
    });

    increaseBtn.addEventListener("click", function () {
        if (currentKey && itemData[currentKey]) {
            itemData[currentKey].score++;
            score.value = itemData[currentKey].score;
        }
    });

    decreaseBtn.addEventListener("click", function () {
        if (currentKey && itemData[currentKey]) {
            itemData[currentKey].score--;
            score.value = itemData[currentKey].score;
        }
    });
});
