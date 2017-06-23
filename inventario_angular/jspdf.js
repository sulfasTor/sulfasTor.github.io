function html2pdf(){

  var doc = new jsPDF({
    orientation: 'landscape'
  });

  // We'll make our own renderer to skip this editor
  var specialElementHandlers = {
  	'#editor': function(element, renderer){
  		return true;
  	}
  };

  // All units are in the set measurement for the document
  // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
  doc.fromHTML($('body').get(0), 15, 15, {
  	'width': 200,
  	'elementHandlers': specialElementHandlers
  });
    doc.save("inventario.pdf");
}
