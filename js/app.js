$(document).ready()
{
	candys      = 7;
	colums      = 7;
	colHeight   = $('.panel-tablero .col-1').height();
	candyHeight = colHeight/candys;
	candyNumber = 0;
	posCandy    = 0;
	console.log(candyHeight)
	for(i=1; i<=colums; i++){
		for(k=1; k<=candys; k++){
			random = Math.round(Math.random() * (4 - 1) + 1);
			candyNumber += 1;
			$(".col-"+i).append("<img src='image/"+random+".png'  id='col-"+i+"-"+k+"' alt=''>");
		}
	}

	$('#start').click(
		function(){
			//Creo los dulces aleatoriamente
			
			if(candyNumber == 49 ){
				for(i=0; i<=colums; i++){
					
					for(k=1; k<=candys; k++){
						if(k==candys){
							posCandy = 0;
						}else{
							posCandy += candyHeight;
						}
						console.log(posCandy);
						$("#col-"+i+"-"+k).animate(
							{
								top: posCandy
							},1000
						)
					}
				}
			}
			$(this).html("Re-iniciar");
		}
	);
}