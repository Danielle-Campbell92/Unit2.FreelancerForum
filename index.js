//A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

// The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

// A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

// New freelancers continue to appear every few seconds, and the average starting price is updated accordingly

//Create class for initial freelancers
const freelancers = [
    {name: "Alice", occupation: "writer", price: 30},
    {name: "Ben", occupation: "teacher", price: 15},
    {name: "Carol", occupation: "programmer", price: 70},
    {name: "John", occupation: "writer", price: 35},
];

//Create new set of freelancers to randomly generate and appear
const newFreelancers = [
     {name: "Danny", occupation: "cat therapist", price: 50},
    {name: "Danielle", occupation: "programmer", price: 80},
    {name: "Richard", occupation: "dog walker", price: 55}
]

function init(){

    const root = document.querySelector('#root');
    console.log(root);

    const h1 = document.createElement("h1");
    h1.innerHTML = "Freelancer Forum"
    console.log(h1);
    root.append(h1);

    const h2 = document.createElement("h2");
    h2.innerHTML = "The average starting price is $"
    console.log(h2);
    root.append(h2);

    const h3 = document.createElement("h3");
    h3.innerHTML = "Available Freelancers"
    console.log(h3);
    root.append(h3);

    const freelanceContainer = document.createElement("div");
    freelanceContainer.id = "freelanceContainer"
    freelanceContainer.classList.add("freelancers");
    root.append(freelanceContainer);
    console.log(freelanceContainer);

    renderFreelancers()



}

function renderFreelancers(){
    const container = document.querySelector("#freelanceContainer");
    container.innerHTML = ""
    
    freelancers.forEach((freelancer)=>{
        const freeDiv = document.createElement("div");
        freeDiv.classList.add("freelancer")
        freeDiv.innerHTML = `<span><strong>Name:</strong>${freelancer.name}</span>
                             <span><strong>Occupation:</strong>${freelancer.occupation}</span>
                             <span><strong>Price:</strong>${freelancer.price}</span>
        
                            `
        container.append(freeDiv);
    })

}

//Create function and add interval for every few seconds
const addFree = () => {
    const randomIndex = Math.floor(Math.random() * newFreelancers.length);
    const newFreelancer = newFreelancers[randomIndex];
    freelancers.push(newFreelancer)
    renderFreelancers();

}

//Interval
const add = setInterval(addFree, 1000);
setTimeout(() => {
    clearInterval(add)
}, 10000);





init();