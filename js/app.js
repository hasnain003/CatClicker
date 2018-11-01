//Model
const model = {
	currentCat : null,
	cats : [
	{
		name :'Amanda',
		img : './img/Amanda.jpg',
		count: 0
	},
	{
		name :'Alexa.jpg',
		img : './img/Alexa.jpg',
		count : 0
	},
	{
		name :'Alisha',
		img : './img/Alisha.jpg',
		count : 0
	},
	{
		name :'Princy',
		img : './img/Princy.jpg',
		count : 0 
	},
	{
		name :'Sundri',
		img : './img/Sundri.jpg',
		count : 0
	} ]
};
//console.log(model[0].img);


//Octopus
const octopus = {

	init: function() {
		model.currentCat =model.cats[0]; 

		catListView.init();
		catView.init();
		catView.render(model.currentCat);
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function(cat)
	{
		model.currentCat = cat;
	},

	incrementCounter: function() {
		model.currentCat.count++;
		catView.render();
	},
};



//View
const catView =  {

	init: function(){
		this.catElem = document.getElementById('catImage');
		this.catName = document.getElementById('name');
		this.msg = document.getElementById('msg');

		this.catElem.addEventListener('click', function() {
			octopus.incrementCounter();
		});

		this.render();
	},

	render: function() {
		const currentCat=octopus.getCurrentCat();
		const count = currentCat.count;
		this.catElem.src = currentCat.img;
		this.catName.textContent = currentCat.name;
		//console.log(currentCat.name);
		if(count === 0)
		{
			this.msg.innerHTML = "Cat Image hasn't been clicked yet.Meow!!";
		}
		if(count%10 === 1)
		{
			this.msg.innerHTML = "Cat Image has been clicked for the "+count+"st time." ;
		}
		else if(count%10 === 2)
		{
			this.msg.innerHTML = "Cat Image has been clicked for the "+count+"nd time." ;
		}
		else if(count%10 === 3)
		{
			this.msg.innerHTML = "Cat Image has been clicked for the "+count+"rd time." ;
		} 
		else
		{
			this.msg.innerHTML = "Cat Image has been clicked for the "+count+"th time.";
		}
	}
};

const catListView = {

	init: function() {
		this.catList=document.getElementById('catList');

		this.render();
	},

	render: function() {
		var cat, elem, i;
		const cats=octopus.getCats();

		this.catList.innerHTML= '';

		for( i=0;i<cats.length;i++)
		{
			 cat=cats[i];
 
			 elem=document.createElement('li');

			elem.textContent = cat.name;

			elem.addEventListener('click',(function(catCopy) {
				return function(){
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			this.catList.appendChild(elem);
		}
	}
};

//catView.render(model[0]);


document.addEventListener('DOMContentLoaded',octopus.init);



/*let count1=0,count2=0;
const text1=document.getElementById('.msg1');
const cat2=document.getElementById('.cat2');
const text2=document.getElementById('.msg2');
const c=document.getElementByIdAll('.cat');
let img=document.getElementById('img');
const cats=[...c];
let name=document.getElementById('.name');
let i=0;

function catName(){
	name.textContent = this.textContent;
}

function catImage(){
	img.src = "img/"+this.textContent+".jpg";
}

for(i=0;i<cats.length;i++)
{
	cats[i].addEventListener('click',catName);
	cats[i].addEventListener('click',catImage);
	let cat1=document.getElementById('.cat1');
}




 function clickCounter(){
	if(count1 === 0)
	{
		text1.innerHTML = "Cat Image hasn't been clicked yet.Meow!!";
	}
	if(count1%10 === 1)
	{
		text1.innerHTML = "Cat Image has been clicked for the "+count1+"st time." ;
	}
	else if(count1%10 === 2)
	{
		text1.innerHTML = "Cat Image has been clicked for the "+count1+"nd time." ;
	}
	else if(count1%10 === 3)
	{
		text1.innerHTML = "Cat Image has been clicked for the "+count1+"rd time." ;
	} 
	else
	{
		text1.innerHTML = "Cat Image has been clicked for the "+count1+"th time.";
	}
	count1++;

}

cat2.addEventListener("click", function(){
	count2++;
	if(count2%10 === 1)
	{
		text2.innerHTML = "Cat Image has been clicked for the "+count2+"st time." 
	}
	else if(count2%10 === 2)
	{
		text2.innerHTML = "Cat Image has been clicked for the "+count2+"nd time." 
	}
	else if(count2%10 === 3)
	{
		text2.innerHTML = "Cat Image has been clicked for the "+count2+"rd time." 
	}
	else
	{
		text2.innerHTML = "Cat Image has been clicked for the "+count2+"th time."
	}

});

*/