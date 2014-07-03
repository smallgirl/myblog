// 计算器

	function count(a)
	{
		var id = document.getElementsByName('checkList');
		var checkList = new Array();
		var priceList = new Array();
		var numList = new Array();
		var allPrice = 0;
		for(var i = 0; i < id.length; i++){
			if(id[i].checked)
			checkList.push(id[i].value);
		}  
		for(var i = 0; i < checkList.length; i++){
			var temp = document.getElementsByName('orderBy'+checkList[i]);
			for(var k = 0; i < temp.length; k++){
				if(temp[k].checked)
				priceList.push(temp[k].value);
			
			}

		} 
		for(var i = 0; i < checkList.length; i++){
			var temp = document.getElementsByName('number'+checkList[i]);
			numList.push(temp.value);
		}
		for(var i = 0; i < checkList.length; i++){
			
			
			allPrice = allPrice+ priceList[i]*numList[i];
		}
		alert(allPrice);

	}

/* 代码整理：懒人之家 lanrenzhijia.com */