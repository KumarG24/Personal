sap.ui.controller("controller.addform",
{
  onInit : function() {
  	
var jsonModelDropDown = new sap.ui.model.json.JSONModel("model/dropdowns.json");
sap.ui.getCore().byId("idInitPage--idSelectBoard").setModel(jsonModelDropDown);

for (var y = 0; y<5; y ++){
var currentdatetime = new Date();
var currentyear = currentdatetime.getFullYear() - y ;
var oSelectYear = sap.ui.getCore().byId("idInitPage--idSelectAY");
var newItemYear = new sap.ui.core.Item({ key: currentyear, text: currentyear});
oSelectYear.addItem(newItemYear);
}
var selectItem = new sap.ui.core.Item({ key: "--Select--", text: "--Select--"});
oSelectYear.insertItem(selectItem);
},

changeEmail: function(){
var email = sap.ui.getCore().byId("idInitPage--InpEmail").getValue(); 

var mailregex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

if (!mailregex.test(email)) {

			jQuery.sap.require("sap.m.MessageToast");

			var msg = email + " is not a valid email address";
sap.m.MessageToast.show(msg,
{
				duration: 2000,
				width: "20em"
			});
		
		


//sap.ui.getCore().byId("idInitPage--InpEmail").setValueState("Error"); 

}

else{
//sap.ui.getCore().byId("idInitPage--InpEmail").setValueState("Sucess"); 	
	
}

},

changeBoard: function(){
	var changedBoard =	sap.ui.getCore().byId("idInitPage--idSelectBoard").getSelectedKey();
	if (changedBoard === "" || changedBoard === undefined || changedBoard === "--Select--"){
		sap.ui.getCore().byId("idInitPage--idSelectBoard").setValueState("Error");

}
else{
		
		sap.ui.getCore().byId("idInitPage--idSelectBoard").setValueState("Success");
	
}
	
	
},

changeAY: function(){
	var changedBoard =	sap.ui.getCore().byId("idInitPage--idSelectAY").getSelectedKey();
	if (changedBoard === "" || changedBoard === undefined || changedBoard === "--Select--"){
		sap.ui.getCore().byId("idInitPage--idSelectAY").setValueState("Error");

}
else{
		
		sap.ui.getCore().byId("idInitPage--idSelectAY").setValueState("Success");
	
}
	
	
},

Submit: function(){
	
	
var email = sap.ui.getCore().byId("idInitPage--InpEmail").getValue(); 

var mailregex = /^\w+[\w-+\.]*\@\w+([-\.]\w+)*\.[a-zA-Z]{2,}$/;

		

var selectedBoard =	sap.ui.getCore().byId("idInitPage--idSelectBoard").getSelectedKey();

var selectedAY =	sap.ui.getCore().byId("idInitPage--idSelectAY").getSelectedKey();

if(sap.ui.getCore().byId("idInitPage--InpName").getValue() === ""){
	
		
			jQuery.sap.require("sap.m.MessageToast");

			var msg = "Please enter your name";

			sap.m.MessageToast.show(msg,
			{
				duration: 2000,
				width: "20em"
			});
}	
	
else if (!mailregex.test(email)) {

			jQuery.sap.require("sap.m.MessageToast");

			var msg = email + " is not a valid email address";
sap.m.MessageToast.show(msg,
{
				duration: 2000,
				width: "20em"
			});
		
}

else if (selectedBoard === "" || selectedBoard === undefined || selectedBoard === "--Select--"){
		sap.ui.getCore().byId("idInitPage--idSelectBoard").setValueState("Error");
		
			jQuery.sap.require("sap.m.MessageToast");

			var msg = "Please enter valid Board of education";

			sap.m.MessageToast.show(msg,
			{
				duration: 2000,
				width: "20em"
			});

}


else if (selectedAY === "" || selectedAY === undefined || selectedAY === "--Select--"){
		sap.ui.getCore().byId("idInitPage--idSelectAY").setValueState("Error");
		
			jQuery.sap.require("sap.m.MessageToast");

			var msg = "Please enter valid Year of Passing";

			sap.m.MessageToast.show(msg,
			{
				duration: 2000,
				width: "20em"
			});

}


else if(sap.ui.getCore().byId("idInitPage--InpEmail").getValue() === ""){
	
		
			jQuery.sap.require("sap.m.MessageToast");

			var msg = "Please enter your Email";

			sap.m.MessageToast.show(msg,
			{
				duration: 2000,
				width: "20em"
			});
}
 
else{
	
	var studName =	sap.ui.getCore().byId("idInitPage--InpName").getValue();
	var eMail =	sap.ui.getCore().byId("idInitPage--InpEmail").getValue();
sap.ui.getCore().byId("myApp").to("idWelcomePage");

	sap.ui.controller("controller.welcomepage").onAfterRenderingWelcome(studName,eMail,selectedBoard, selectedAY);
}

}


});