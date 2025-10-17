console.log('work.js')

// work js

let cardsArr = [
    {
        id: 1,
        image: '../Images-Videos/robot-AI.jpg',
        title: 'AI Robotics'
    },
    {
        id: 2,
        image: '../Images-Videos/robotics-head.jpg',
        title: 'Machine Learning'
    },
    {
        id: 3,
        image: '../Images-Videos/business-chart.png',
        title: 'Business'
    },
    {
        id: 4,
        image: '../Images-Videos/devICON.png',
        title: 'Development'
    },
    {
        id: 5,
        image: '../Images-Videos/cyber-lock.jpg',
        title: 'Ethical Hacking'
    },
    {
        id: 6,
        image: '../Images-Videos/cyber-world.png',
        title: 'Cyber Security'
    },
    {
        id: 7,
        image: '../Images-Videos/monitor.jpg',
        title: 'Editing'
    },
    {
        id: 8,
        image: '../Images-Videos/graphics-car.png',
        title: 'Graphics Work'
    }
]

let container = document.querySelector('.workContainer .cardContainer')

container.innerHTML = cardsArr.map(card => {
    return `<div class="card darkBox shape" card-id="${card.id}">
          <div class="image">
            <img src="${card.image}" alt="work-image">
          </div>
          <div class="title center">
            <h2>${card.title}</h2>
          </div>
        </div>`
}).join(' ')

