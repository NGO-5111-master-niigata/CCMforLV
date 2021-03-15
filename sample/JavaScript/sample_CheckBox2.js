

/* HTML */


<p>選択した色 <span id="span8"></span></p>
<form name="form8">
<input type="checkbox" name="c8" value="red" onchange="chk1(this.value)"> 赤
<input type="checkbox" name="c8" value="blue" onchange="chk1(this.value)"> 青
</form>

/* HTMLここまで */


<script>
function chk1(val){

	document.getElementById("span8").textContent = val;

	if(val=== "red"){
		document.form8.c8[1].checked = false;
	}else{
		document.form8.c8[0].checked = false;
	}
}
</script>