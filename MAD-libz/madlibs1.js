
const makeStory = document.getElementById('create');

const storyFunction = function() {
    const storySpan = document.getElementById('story');
    const input = document.querySelector('input').value;
    // const libForm = document.getElementById('inputForm');

//mad lib variables    
    const apex = document.getElementById('apex').value;
    const name = document.getElementById('name').value;
    const activity = document.getElementById('activity').value;
    const monster = document.getElementById('monster').value;
    const bodyPart = document.getElementById('body-part').value;
    const bodyPair = document.getElementById('body-pair').value;
    const car = document.getElementById('car').value;
    const food = document.getElementById('food').value;
    const adverb = document.getElementById('adverb').value;
    const city = document.getElementById('city').value;
    const mammal = document.getElementById('mammal').value;
    const object = document.getElementById('object').value;
    const number = document.getElementById('number').value;
    const jailHobby = document.getElementById('indoor-act').value;

    storySpan.innerHTML = `
    There once was a ${apex} named ${name} who just wanted to practice ${activity}. 
    But unfortunately one day a ${monster} with a big ${bodyPart} and one ${bodyPair}, driving a ${car} pulled up 
    next to ${name} while on the way to buy some ${food}. The ${monster} looked at ${name} ${adverb} and asked for directions to ${city}. 
    They stared at each other, until a ${mammal}
        came along and yelled at them for blocking traffic. Our poor ${name} had a bad temper, and 
        so he threw a ${object} at the poor creature, killing him instantly and 
        landing himself in jail where he spent ${number} long years 
        learning ${jailHobby}.
    `;

    document.getElementById('inputForm').style.display = 'none';
    storySpan.classList.remove('hidden');
    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = 'again!';
    resetBtn.style.cssText = `display: flex; justify-self: center; margin: 1em; font-size: 35px; background-color: yellow;`;
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        window.location.reload();
    });
};

// function storyFunction () {
//     if (input === '') {
//     alert('Fill out all fields first for a good story!');
//     return false; }
// };
makeStory.addEventListener('click', storyFunction);



  