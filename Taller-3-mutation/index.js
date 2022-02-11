const targetNode = document.getElementById('targetNode');
const input = document.getElementById('name');
const addButton = document.getElementById('add');
const changeButton = document.querySelector('#change')


const config = {
    attributtes: true,
    childList: true,
    subtree: true,
};

const callback = function (mutationList, observer) {
    for (let mutation of mutationList) {
        if (mutation.type === 'childList') {
            console.info('A child node has been added or changed.')
        } else if (mutation.type === 'attributes') {
            console.info(`The ${mutation.attributreName} attribute has been modified`)
        }       
    }
}

function add() {
    const li = document.createElement('LI');
    li.appendChild(document.createTextNode(input.value));
    targetNode.appendChild(li);
}

function change() {
    targetNode.children[0].value = 10;
}

const observe = new MutationObserver(callback);
observe.observe(targetNode, config);

addButton.addEventListener('click', add);
changeButton.addEventListener('click', change)
