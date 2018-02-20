$(document).ready()
{
	$('#start').click(
		function(){
			candys      = 7;
			colums      = 7;
			colHeight   = $('.panel-tablero .col-1').height();
			candyHeight = colHeight/candys;
			candyNumber = 0;
			

			//Creo los dulces aleatoriamente
			for(i=1; i<=colums; i++){
				for(k=1; k<=candys; k++){
					random = Math.round(Math.random() * (4 - 1) + 1);
					candyNumber += 1;
					posCandy    =  colHeight-(candyHeight*k);
					$(".col-"+i).append("<img src='image/"+random+".png' id='col-"+i+"-"+k+"' alt=''>");
					$("#col-"+i+"-"+k).css("top",posCandy);
				}
			}
			$(this).html("Re-iniciar");
		}
	);
}