let fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
console.log(fruit)

const fruitListElement = document.querySelector('#fruit-list')
const fruitInputElement = document.querySelector('#fruit-input')

// fix this function to show dropdown
function searchFruit(){
        fruit.sort();
        loadData(fruit, fruitListElement);
    };

function loadData(data, element){
    if(data) {
        element.innerHTML = "";
        let innerElement = "";
        data.forEach((item)=>{
            innerElement +=
             `<li>${item}</li>`;
        });
        element.innerHTML = innerElement;
    }
}

searchFruit();

function filterData(data, searchText){
   return data.filter((x)=>x.toLowerCase().includes(searchText.toLowerCase()));
}

fruitInputElement.addEventListener("input", function(){
const filterData = filterData(fruit, fruitInputElement.value);
loadData(filteredData, fruitListElement);
});