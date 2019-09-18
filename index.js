const container = document.querySelector('#container');


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);
content.setAttribute('style', 'color: black; background: pink; border:10px solid black');


const para_1 = document.createElement('h1');
para_1.innerHTML = "I'm in a div";
para_1.style.color = 'black';


const head_1 = document.createElement('p');
head_1.innerHTML = "ME TOO!";
head_1.style.color = 'black';

content.appendChild(para_1);
content.appendChild(head_1);

const para_2 = document.createElement('p');
para_2.innerHTML = "Hey I'm red!";
document.getElementById("container").appendChild(para_2);
para_2.style.color = 'red';

const head_2 = document.createElement('h3');
head_2.innerHTML = "I'm a blue h3!";
document.getElementById("container").appendChild(head_2);
head_2.style.color = 'blue';

var btn = document.querySelector('#btn');
btn.onclick = () => alert("Yaa, I did it");  