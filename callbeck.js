function greeting(greetinghandler, name){
    greetinghandler(name)
}

// const laptop = {price: 45000, brand : 'lenevo', memory: '8gb'};

function greetingHandler(name){
    console.log('good morning', name)
}

function evening(name){
    console.log('goood evening', name)
}

greeting(greetingHandler, 'Anirban');
greeting(greetingHandler, 'Joya');
greeting(evening, 'tom')