window.onload=function(){
		//默认参数设置
		var map=document.getElementById('super');//地图
		var xplay=document.getElementById('xplayer');//玩家飞机
		var mapX=0;//地图位置
		var boom=document.getElementsByTagName('a');//子弹集合
		var sum=boom.length;//子弹数量
		var box=document.getElementById('playBox');//主题
		//子弹发射
		function sooting(){
			for(var i=0;i<boom.length;i++){
				var y=(parseInt(xplay.style.top)+16)+"px";
				var x=(parseInt(xplay.style.left)+60)+"px";
				if(boom[i].style.display=="none"){
					boom[i].style.left=x;
					boom[i].style.top=y;
					boom[i].style.display="block";
					sum--;
					break;
				}
			}
		}
		//子弹移动
		function sootingMove(){
			mapX--;
			map.style.top=mapX+"px";
			 var is=document.getElementsByTagName('span')[0];
			 if(is){
			 	 var isX=parseInt(is.style.left);
			 }
			if(mapX<-2000){
				mapX=600;
			}
			for(var i=0;i<boom.length;i++){
				if(boom[i].style.display=="block"){
					boom[i].style.top=(parseInt(boom[i].offsetTop)-10)+"px";
					if(parseInt(boom[i].style.left)<(isX+128)&&parseInt(boom[i].style.left)>isX&&parseInt(boom[i].style.top)<128){
						boom[i].style.display="none";
						box.removeChild(document.getElementsByTagName('span')[0]);
						sum++
					}else if(parseInt(boom[i].style.top)<-10){
						boom[i].style.display="none";
						sum++
					}
				}		
			}
			document.getElementById("show").childNodes[1].childNodes[0].nodeValue=sum;
		}
		//随机敌人
		function kings(){
			var a=document.getElementsByTagName('span');
			if(a.length==0){
				var i=document.createElement('span');
				i.style.left=Math.floor(Math.random()*852)+"px";
				i.style.top="0px";
				playBox.appendChild(i);
			}else{
				return;
			}
		}
		setInterval(kings,2000);
		setInterval(sootingMove,50);
		//玩家飞机移动控制
		window.document.onkeydown=function(e){
			var event=e||window.event;
			switch(event.keyCode){
				case 37://左
					xplay.style.left=(Math.max(0,parseInt(xplay.offsetLeft)-10))+"px";
					break;
				case 38://上
					xplay.style.top=(Math.max(0,parseInt(xplay.offsetTop)-10))+"px";
					break;
				case 39://右
					xplay.style.left=(Math.min(852,parseInt(xplay.offsetLeft)+10))+"px";
					break;
				case 40://下
					xplay.style.top=(Math.min(472,parseInt(xplay.offsetTop)+10))+"px";
					break;
				case 32://子弹
					sooting();
					break;				
			}
		}
	}