function populate(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "jaunpur")
	{
		var optionArray = ["|--to--","jaunpur|Jaunpur","vbspu|Vbspu","shahganj|Shahganj"];
	} else if(s1.value == "shahganj")
	{
		var optionArray = ["|--to--","shahganj|Shahganj","vbspu|Vbspu","jaunpur|Jaunpur"];
	} 
	for(var option in optionArray)
	{
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
    }
}