function changeSortOrder(current, newSort) {

  if(!current && !newSort)
    return "";

  if(!current)
    current = newSort;
    
  if(!newSort)
    mewSort = current;

  var direction = current.slice(0, 1);
  var name = current.replace("+", "").replace("-", "");

  if (newSort == name && direction == "+") 
    return "-" + newSort;
  else
    return "+" + newSort;

}