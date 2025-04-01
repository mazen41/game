
// let tries = 0;

// // Select Elements
// let question = document.getElementById("question");
// let yes = document.getElementById("yes");
// let control = document.getElementById("control");
// let card = document.getElementById("card");
// let info = document.getElementById("info");
// let blocksContainer = document.querySelector(".memory-game-blocks");
// // let link = document.getElementById('link');
// let blocks = Array.from(blocksContainer.children);
// let duration = 1000;

// // Create Range Of Keys
// let originalOrderRange = Array.from(Array(blocks.length).keys());

// // Initial Shuffle
// shuffle(originalOrderRange);
// blocks.forEach((block, index) => {
//     block.style.order = originalOrderRange[index];
//     block.addEventListener('click', function () {
//         flipBlock(block);
//     });
// });

// // Shuffle Function
// function shuffle(array) {
//     let current = array.length, temp, random;
//     while (current > 0) {
//         random = Math.floor(Math.random() * current);
//         current--;
//         temp = array[current];
//         array[current] = array[random];
//         array[random] = temp;
//     }
//     return array;
// }

// // Function to restart the game
// function restartGame() {
//     shuffle(originalOrderRange); // Shuffle the original order
//     blocks.forEach((block, index) => {
//         block.style.order = originalOrderRange[index]; // Apply the new order
//     });
//     flipAllCardsBack(); // Flip all cards back over after shuffling
//     tries = 0; // Reset tries counter
//     document.querySelector('.tries span').innerHTML = tries; // Update the tries display
// }

// // Function to flip all cards back over
// function flipAllCardsBack() {
//     blocks.forEach(block => {
//         if (block.classList.contains('is-flipped')) {
//             block.classList.remove('is-flipped'); // Flip all cards back over
//         }
//     });
// }

// // Function to flip the block
// function flipBlock(selectedBlock) {
//     selectedBlock.classList.add('is-flipped');
//     let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

//     if (allFlippedBlocks.length === 2) {
//         stopClicking();
//         checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
//     }
// }

// // Function to stop clicking
// function stopClicking() {
//     blocksContainer.classList.add('no-clicking');
//     setTimeout(() => {
//         blocksContainer.classList.remove('no-clicking');
//     }, duration);
// }
// function showWinMessage() {
//     const link = document.getElementById('link');
//     const restartGameButton = document.getElementById('restartGame');

//     link.style.display = 'block'; // Show the win message

//     // Event for the "Play Again" button
//     restartGameButton.onclick = function() {
//         link.style.display = 'none'; // Hide the win message
//         restartGame(); // Restart the game
//     };

//     // Close the modal if the user clicks outside of the message
//     window.onclick = function(event) {
//         if (event.target === link) {
//             link.style.display = 'none'; // Hide the win message
//         }
//     };
// }
// function checkWinCondition() {
//     const allMatched = blocks.every(block => block.classList.contains('has-match'));

//     if (allMatched) {
//         control.style.display = "none";
//         card.style.display = "none";
//         info.style.display = "none";
//         showWinMessage();
//     }
// }

// // Function to check if blocks match
// function checkMatchedBlocks(firstBlock, secondBlock) {
//     let triesElement = document.querySelector('.tries span');

//     if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
//         firstBlock.classList.remove('is-flipped');
//         secondBlock.classList.remove('is-flipped');
//         firstBlock.classList.add('has-match');
//         secondBlock.classList.add('has-match');
//         document.getElementById('success').play();
//         checkWinCondition();
//     } else {
//         tries++; // Increment the tries counter
//         triesElement.innerHTML = tries; // Update the tries display

//         if (tries > 30) {
//             restartGame(); // Restart the game
//         } else {
//             setTimeout(() => {
//                 firstBlock.classList.remove('is-flipped');
//                 secondBlock.classList.remove('is-flipped');
//             }, duration);
//             document.getElementById('fail').play();
//         }
//     }
// }

// // Event for the "Start Game" button
// document.querySelector(".control-buttons span").onclick = function () {
//     document.querySelector(".control-buttons").remove();
// };

// // Event for the "Yes" button
// yes.onclick = () => {
//     question.style.display = 'none';
//     control.style.display = "block";
//     card.style.display = "grid";
//     info.style.display = "flex";
// };
let tries = 0;

// Select Elements
let question = document.getElementById("question");
let yes = document.getElementById("yes");
let control = document.getElementById("control");
let card = document.getElementById("card");
let info = document.getElementById("info");
let blocksContainer = document.querySelector(".memory-game-blocks");
let link = document.getElementById('link'); // Ensure this matches your HTML
let blocks = Array.from(blocksContainer.children);
let duration = 1000;

// Create Range Of Keys
let originalOrderRange = Array.from(Array(blocks.length).keys());

// Initial Shuffle
shuffle(originalOrderRange);
blocks.forEach((block, index) => {
    block.style.order = originalOrderRange[index];
    block.addEventListener('click', function () {
        flipBlock(block);
    });
});

// Shuffle Function
function shuffle(array) {
    let current = array.length, temp, random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
    }
    return array;
}

// Function to restart the game
function restartGame() {
    shuffle(originalOrderRange); // Shuffle the original order
    blocks.forEach((block, index) => {
        block.style.order = originalOrderRange[index]; // Apply the new order
    });
    flipAllCardsBack(); // Flip all cards back over after shuffling
    tries = 0; // Reset tries counter
    document.querySelector('.tries span').innerHTML = tries; // Update the tries display
}

// Function to flip all cards back over
function flipAllCardsBack() {
    blocks.forEach(block => {
        if (block.classList.contains('is-flipped')) {
            block.classList.remove('is-flipped'); // Flip all cards back over
        }
    });
}

// Function to flip the block
function flipBlock(selectedBlock) {
    selectedBlock.classList.add('is-flipped');
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if (allFlippedBlocks.length === 2) {
        stopClicking();
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}

// Function to stop clicking
function stopClicking() {
    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    }, duration);
}

function showWinMessage() {
    link.style.display = 'flex'; // Show the win message

    // Close the win message if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target === link) {
            link.style.display = 'none'; // Hide the win message
        }
    };
}

function checkWinCondition() {
    const allMatched = blocks.every(block => block.classList.contains('has-match'));

    if (allMatched) {
        control.style.display = "none";
        card.style.display = "none";
        info.style.display = "none";
        showWinMessage();
    }
}

// Function to check if blocks match
function checkMatchedBlocks(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span');

    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        checkWinCondition();
    } else {
        tries++; // Increment the tries counter
        triesElement.innerHTML = tries; // Update the tries display

        if (tries > 15) {
            restartGame(); // Restart the game
        } else {
            setTimeout(() => {
                firstBlock.classList.remove('is-flipped');
                secondBlock.classList.remove('is-flipped');
            }, duration);
        }
    }
}

// Event for the "Start Game" button
document.querySelector(".control-buttons span").onclick = function () {
    document.querySelector(".control-buttons").remove();
};

// Event for the "Yes" button
yes.onclick = () => {
    question.style.display = 'none';
    control.style.display = "block";
    card.style.display = "grid";
    info.style.display = "flex";
};