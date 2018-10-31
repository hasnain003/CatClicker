let count1=0,count2=0;

const cat1=document.querySelector('.cat1');
const text1=document.querySelector('.msg1');
const cat2=document.querySelector('.cat2');
const text2=document.querySelector('.msg2');
const c=document.querySelectorAll('.cat');
let img=document.querySelector('img');
const cats=[...c];
let name=document.querySelector('.name');
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
	cats[i].addEventListener('click',clickCounter)
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
/*
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