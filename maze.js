
window.onload= function (){ 
    let fele=document.getElementById("boundary1");
	let borders=document.querySelectorAll(".boundary");
	let end=document.getElementById("end"); 
	let start=document.getElementById("start");
	let stat=document.getElementById( "status");
	let maze=document.getElementById("maze")
	let count = 0; 
	
	fele.onmouseover = function(){
		fele.classList.add("youlose");
	}
    for(let i=0; i<borders.length;i++){
		let change=borders[i] ;
		change.onmouseover=function(){
			borders.forEach(function(item){
				item.classList.add("youlose");
				return 0;
			});
			stat.innerHTML="you loose bitch";
		}
		
	} 
	end.onmouseover=function(){
		stat.innerHTML="you win bitch";
	} 
	start.onclick=function(){
		borders.forEach(function (item){
		  item.classList.remove("youlose")	;
		  
		});
		
	}
    maze.onmouseleave=function(){
		stat,innerHTML="you loose";
		borders.forEach(function (item){
			item.classList.add("youlose");
			return 0;
		})
	}
    
	
}

