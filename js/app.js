let count=0;

const img=document.querySelector('img');
const text=document.querySelector('.msg');

img.addEventListener("click", function(){
	count++;
	if(count%10 === 1)
	{
		text.innerHTML = "Cat Image has been clicked for the "+count+"st time." 
	}
	else if(count%10 === 2)
	{
		text.innerHTML = "Cat Image has been clicked for the "+count+"nd time." 
	}
	else if(count%10 === 3)
	{
		text.innerHTML = "Cat Image has been clicked for the "+count+"rd time." 
	}
	else
	{
		text.innerHTML = "Cat Image has been clicked for the "+count+"th time."
	}

});