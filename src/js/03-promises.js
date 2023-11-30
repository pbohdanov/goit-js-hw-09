import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputValueFirstDelayMS = (form.querySelector('input[name="delay"]'));
const inputValueDelayStep  = form.querySelector('input[name="step"]');
const inputValueAmount = form.querySelector('input[name="amount"]');
const btnFormSub = form.querySelector('button[type="submit"]')


btnFormSub.addEventListener('click', onCreatingPromise);

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       
      if (shouldResolve) {
    resolve({ position, delay });
  } else {
    reject({ position, delay });
      }
      
   },delay) })
};

function onCreatingPromise(evt) {
  evt.preventDefault();
  
  let numberDelay = Number(inputValueFirstDelayMS.value);
  const step = Number(inputValueDelayStep.value)
  const amount = Number(inputValueAmount.value);
  

  for (let i = 1; i <= amount; i += 1){
 
  
    

  createPromise(i, numberDelay)
  .then(({ position, delay }) => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
     Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    numberDelay+= step;
}

  }