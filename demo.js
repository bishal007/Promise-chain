//promise chaining
const paymentPromise = new Promise((resolve, reject)=>{
	let transactionState = "money deducted";
  
  if(transactionState === "money deducted"){
  	resolve();
  }else{
  	reject();
  }
});



const placeOrder = (cart) =>{
	console.log('order placed');
  return new Promise((resolve, reject)=>{
  	reject();
  })
};

const cancelOrder = () =>{
	console.log('order cancelled');
};

const deliveryTracking = () =>{
	console.log('delivery initiated');
}

const rejectHandler = () =>{
	console.log('something went wrong');
}

paymentPromise.then(placeOrder, cancelOrder).then(deliveryTracking, rejectHandler);



//Normal Promise

const jobPromise = new Promise((resolve, reject)=>{
	let selected = true;
  
  setTimeout(()=>{
  	if(selected){
    	resolve();
    }else{
    	reject();
    }
  }, 3000)
});

console.log(jobPromise);

jobPromise.then(()=>{
	console.log(jobPromise);
});
jobPromise.catch(()=>{
	console.log(jobPromise);
});


// promise all, race, allsettled
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'two'));

Promise.all([promise1, promise2])
  .then((results) => {
    console.log('Promise.all result:', results);
  });

Promise.race([promise1, promise2])
  .then((result) => {
    console.log('Promise.race result:', result);
  });


  const promiseA = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'first promise resolved');
  });
  
  const promiseB = new Promise((resolve, reject) => {
    setTimeout(reject, 200, 'second promise rejected');
  });
  
  const promiseC = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'third promise resolved');
  });
  
  Promise.allSettled([promiseA, promiseB, promiseC])
    .then((results) => {
      results.forEach((result, index) => {
        console.log(`Promise ${index + 1}:`, result);
      });
    });
  