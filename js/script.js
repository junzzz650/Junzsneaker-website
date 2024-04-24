//stats

let section_counter = document.querySelector('.counters');
let counters = document.querySelectorAll('.counters span');

// Stats Animation

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 200;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 10);
        }
        else {
          counter.innerText = targetNumber;
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);






// const counters = document.querySelectorAll(".counters span")
// const container = document.querySelector(".counters")

// let activated = false

// window.addEventListener("scroll", ()=>{

//     if(pageYOffset > container.offsetTop - container.offsetHeight - 200 && activated === false) {
//         counters.forEach(counter => {
//         counter.innerText = 0

//         let count = 0;

//         function updateCount() {
//             const target = parseInt(counter.dataset.count)

//             if(count < target) {

//                 count++
//                 counter.innerText = count
//                 setTimeout(updateCount, 10)
//             }else {
//                 counter.innerText = target
//             }
//         }
//         updateCount();

//         activated = true
//     })
//     } else if(pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === true

//     ) {
//         counters.forEach(counter => {
//             counter.innerText = 0;
//         })

//         activated = false
//     }
// })



// function incrementStats() {
//     const counters = document.querySelectorAll(".counter");

//     counters.forEach(counter => {
//         counter.innerText = 0

//         const updateCounter = () =>{
//             const target = +counter.getAttribute('data-target')
//             const c = +counter.innerText

//             const increment = target / 200

//             if (c < target){
//                 counter.innerText = Math.ceil(c + increment)
//                 setTimeout(updateCounter, 1)
//             } else{
//                 counter.innerText = target
//             }
//         }

//         updateCounter();
//     })
// }

// document.addEventListener(onscroll, incrementStats)
