let count1=0,count2=0;

const cat1=document.querySelector('.cat1');
const text1=document.querySelector('.msg1');
const cat2=document.querySelector('.cat2');
const text2=document.querySelector('.msg2');

cat1.addEventListener("click", function(){
	count1++;
	if(count1%10 === 1)
	{
		text1.innerHTML = "Cat Image has been clicked for the "+count1+"st time." 
	}
	else if(count1%10 === 2)
	{
		text1.innerHTML = "Cat Image has been clicked for the "+count1+"nd time." 
	}
	else if(count1%10 === 3)
	{
		text1.innerHTML = "Cat Image has been clicked for the "+count1+"rd time." 
	}
	else
	{
		text1.innerHTML = "Cat Image has been clicked for the "+count1+"th time."
	}

});
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

