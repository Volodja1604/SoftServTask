function year(num){
	if(Number(num)%4!=0) return 'звичайний';
	else if (Number(num)%100==0) 
	    {
		if(Number(num)%400!=0) return 'звичайний';
	    
	    else return 'високосний';
         }
	else return 'високосний'
	}
console.log(year(2011));