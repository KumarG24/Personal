var To, toName, board, ayear;
	var streams = [];
	var uniqueStreams = [];
	var specializations = ["Chemical", "Software", "Hardware", "AgricultureAndFarming", "English", "Marathi", "Hindi", "Electrical", "Electronics", "Mechanical", "Civil", "Aeronautical", "WasteManagement"];
	
var languageScore, mathScore, scienceScore, socaialScore, ictScore;

var Literature = 0, Typist = 0, Ethicalhacking = 0, CloudComputing = 0, Blogger = 0, Archeology = 0, Speaker = 0, CivilServices = 0, Ayurveda = 0, Counselling = 0, Teacher = 0, Writer = 0, Poet = 0, ContentWriter = 0, Documentation= 0, WebCoding= 0,  Engineering= 0,  Finance= 0,  NewsReporter= 0, Botany = 0, DataAnalytics= 0, Environment = 0, Painting= 0,  Drawing = 0, Medical = 0;
var Chemical= false, Software = false, Hardware = false, AgricultureAndFarming = false, English = false, Marathi = false, Hindi = false, Electrical = false, Electronics = false, Mechanical = false, Civil = false, Aeronautical = false, WasteManagement = false;


sap.ui.controller("controller.welcomepage",
{
  onInit : function() {



},
onAfterRenderingWelcome: function(studName, eMail, selectedBoard, selectedAY){
	To = eMail;
	toName = studName;
	board = selectedBoard;
	ayear = selectedAY;
		sap.ui.getCore().byId("idWelcomePage--LblWelcome").setText("Welcome, "+studName);
	sap.ui.controller("controller.welcomepage").initialSetInputs();
		sap.ui.controller("controller.welcomepage").initialSetSliders();
},

initialSetInputs:function(){
		sap.ui.getCore().byId("idWelcomePage--idInputLanguages").setValue("0");
			sap.ui.getCore().byId("idWelcomePage--idInputMathematics").setValue("0");
				sap.ui.getCore().byId("idWelcomePage--idInputScience").setValue("0");
					sap.ui.getCore().byId("idWelcomePage--idInputSocialScience").setValue("0");
						sap.ui.getCore().byId("idWelcomePage--idInputICT").setValue("0");

	
},

initialSetSliders:function(){
		sap.ui.getCore().byId("idWelcomePage--idSlideLanguages").setValue(0);
			sap.ui.getCore().byId("idWelcomePage--idSlideMathematics").setValue(0);
				sap.ui.getCore().byId("idWelcomePage--idSlideScience").setValue(0);
					sap.ui.getCore().byId("idWelcomePage--idSlideSocialScience").setValue(0);
						sap.ui.getCore().byId("idWelcomePage--idSlideICT").setValue(0);

	
},

liveChangeLanguages: function(oEvent) {
        	
    	var LanguagesVal = oEvent.getParameters().value;
    		sap.ui.getCore().byId("idWelcomePage--idInputLanguages").setValue(LanguagesVal);
    	
},
        
liveChangeMathematics: function(oEvent) {
        	
    	var MathematicsVal = oEvent.getParameters().value;
    		sap.ui.getCore().byId("idWelcomePage--idInputMathematics").setValue(MathematicsVal);
    	
},
        
   
liveChangeScience: function(oEvent) {
        	
    	var ScienceVal = oEvent.getParameters().value;
    		sap.ui.getCore().byId("idWelcomePage--idInputScience").setValue(ScienceVal);
    	
},
        

liveChangeSocialScience: function(oEvent) {
        	
    	var SocialScienceVal = oEvent.getParameters().value;
    		sap.ui.getCore().byId("idWelcomePage--idInputSocialScience").setValue(SocialScienceVal);
    	
},

liveChangeICT: function(oEvent) {
        	
    	var ICTVal = oEvent.getParameters().value;
    		sap.ui.getCore().byId("idWelcomePage--idInputICT").setValue(ICTVal);
    	
},

onPressNext: function(){
 languageScore = 	sap.ui.getCore().byId("idWelcomePage--idInputLanguages").getValue();
 mathScore = 	sap.ui.getCore().byId("idWelcomePage--idInputMathematics").getValue();
 scienceScore = 	sap.ui.getCore().byId("idWelcomePage--idInputScience").getValue();
 socaialScore = 	sap.ui.getCore().byId("idWelcomePage--idInputSocialScience").getValue();
 ictScore = 	sap.ui.getCore().byId("idWelcomePage--idInputICT").getValue();
if(languageScore==='0' && mathScore==='0' && scienceScore==='0' && socaialScore==='0' && ictScore==='0'){
	
var MsgText = new sap.m.Text();
MsgText.setText("Please rate yourself in at least one subject with minimum 5 rating");
										var dialog = new sap.m.Dialog(
										{
											title: 'Error',
											type: 'Message',
											

											beginButton: new sap.m.Button(
											{
												text: 'OK',
												press: function()
												{

													dialog.close();
												}
											}),
												
											afterClose: function()
											{
												dialog.destroy();
											}

										});
										dialog.addContent(MsgText);

										dialog.setResizable(true);
										dialog.open();

	
}
else{ 
var MsgText1 = new sap.m.Text();
MsgText1.setText("Are you sure you want to continue?");
										var dialog1 = new sap.m.Dialog(
										{
											title: 'Confirmation',
											type: 'Message',
											

											beginButton: new sap.m.Button(
											{
												text: 'OK',
												press: function()
												{
													
													sap.ui.controller("controller.welcomepage").setLevelTwo();
													sap.ui.getCore().byId("idWelcomePage--idIconTabBar").setSelectedKey("Lvl2");
													dialog1.close();
												}
											}),
												endButton: new sap.m.Button(
											{
												text: 'Cancel',
												press: function()
												{
													
													dialog1.close();
												}
											}),
											afterClose: function()
											{
												dialog1.destroy();
											}

										});
										dialog1.addContent(MsgText1);

										dialog1.setResizable(true);
										dialog1.open();
	
}
	
},      



setLevelTwo: function(){

 languageScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideLanguages").getValue();
 mathScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideMathematics").getValue();
 scienceScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideScience").getValue();
 socaialScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideSocialScience").getValue();
 ictScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideICT").getValue();
	

/* Set up topics panel*/

if(languageScore >= '5'){
	 sap.ui.getCore().byId("idWelcomePage--idLanguagePanel").setVisible(true);
	 
}
else{ sap.ui.getCore().byId("idWelcomePage--idLanguagePanel").setVisible(false);
	}
if(mathScore >= '5'){
	 sap.ui.getCore().byId("idWelcomePage--idMathsPanel").setVisible(true);
	
}
else{ sap.ui.getCore().byId("idWelcomePage--idMathsPanel").setVisible(false);
	}
if(scienceScore >= '5'){
	 sap.ui.getCore().byId("idWelcomePage--idSciencePanel").setVisible(true);
	}
else{ sap.ui.getCore().byId("idWelcomePage--idSciencePanel").setVisible(false);
	}
if(socaialScore >= '5'){
	 sap.ui.getCore().byId("idWelcomePage--idSocialSciencePanel").setVisible(true);

	
}
else{ sap.ui.getCore().byId("idWelcomePage--idSocialSciencePanel").setVisible(false);
	}
if(ictScore >= '5'){
	 sap.ui.getCore().byId("idWelcomePage--idIctPanel").setVisible(true);
	 
}
else{ sap.ui.getCore().byId("idWelcomePage--idIctPanel").setVisible(false);
	}	
	
	

	
	
},

onPressReset: function(){
		sap.ui.controller("controller.welcomepage").initialSetInputs();
		sap.ui.controller("controller.welcomepage").initialSetSliders();
},


onPressPrevious:function(){
sap.ui.getCore().byId("idWelcomePage--idIconTabBar").setSelectedKey("Lvl1");	
},

onPressPreviousRes:function(){
sap.ui.getCore().byId("idWelcomePage--idIconTabBar").setSelectedKey("Lvl2");	
},


onPressSubmit:function(){


	
	
var MsgText = new sap.m.Text();
MsgText.setText("Are you sure you want to continue?");
										var dialog = new sap.m.Dialog(
										{
											title: 'Confirmation',
											type: 'Message',
											
											beginButton: new sap.m.Button(
											{
												text: 'OK',
												press: function()
												{
													
													sap.ui.controller("controller.welcomepage").setResults();
													sap.ui.getCore().byId("idWelcomePage--idIconTabBar").setSelectedKey("Res");
													dialog.close();
												}
											}),
												endButton: new sap.m.Button(
											{
												text: 'Cancel',
												press: function()
												{
													
													dialog.close();
												}
											}),
											afterClose: function()
											{
												dialog.destroy();
											}

										});
										dialog.addContent(MsgText);

										dialog.setResizable(true);
										dialog.open();	
},

setResults:function(){
		sap.ui.controller("controller.welcomepage").checkCheckboxes();
		sap.ui.controller("controller.welcomepage").setPieViz();
		sap.ui.controller("controller.welcomepage").setColumnViz();
		sap.ui.controller("controller.welcomepage").setSpecializations();
},

setPieViz: function(){
 languageScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideLanguages").getValue();
 mathScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideMathematics").getValue();
 scienceScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideScience").getValue();
 socaialScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideSocialScience").getValue();
 ictScore = 	sap.ui.getCore().byId("idWelcomePage--idSlideICT").getValue();
	
/* Setup pie chart */
var oChart = sap.ui.getCore().byId("idWelcomePage--idpiechart");	
var aData = {
					Items : [  
						{
							Subject:"Languages",
							Score : languageScore
						},
						{
							Subject:"Mathematics",
							Score : mathScore
						},
						{
							Subject:"Science",
							Score : scienceScore
						},
						{
							Subject:"Social Science",
							Score : socaialScore
						},
						{
							Subject:"Computer Technology",
							Score : ictScore
						}
						]
			};
			
			var oSubjectScoreModel =  new sap.ui.model.json.JSONModel();
			oSubjectScoreModel.setData(aData);

	oChart.setModel(oSubjectScoreModel, "SubjectScoreModel");


 sap.ui.getCore().byId("idWelcomePage--idpiechart").setVizProperties({


                plotArea: {

                    dataLabel: {
                       
                        visible: false
                    }
                },

                
title: {
            text: "Your Score Card"
        }

              
		


});


oChart.setVisible(true);

	
},


setColumnViz:function(){

	var arr = [];
	
	for (var z = 0; z< streams.length; z++){
		
				if (streams[z] === "Literature" && Literature !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Literature});
		}
				if (streams[z] === "Teacher" && Teacher !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Teacher});
		}
				if (streams[z] === "Writer" && Writer !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Writer});
		}
				if (streams[z] === "Poet" && Poet !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Poet});
		}
				if (streams[z] === "ContentWriter" && ContentWriter !== 0)
		{
		arr.push({"Stream": streams[z],"Value": ContentWriter});
		}
				if (streams[z] === "WebCoding" && WebCoding !== 0)
		{
		arr.push({"Stream": streams[z],"Value": WebCoding});
		}
				if (streams[z] === "Typist" && Typist !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Typist});
		}
				if (streams[z] === "CloudComputing" && CloudComputing !== 0)
		{
		arr.push({"Stream": streams[z],"Value": CloudComputing});
		}
				if (streams[z] === "Ethicalhacking" && Ethicalhacking !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Ethicalhacking});
		}
				if (streams[z] === "Blogger" && Blogger !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Blogger});
		}
				if (streams[z] === "Archeology" && Archeology !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Archeology});
		}
				if (streams[z] === "Speaker" && Speaker !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Speaker});
		}
				if (streams[z] === "CivilServices" && CivilServices !== 0)
		{
		arr.push({"Stream": streams[z],"Value": CivilServices});
		}
				if (streams[z] === "Ayurveda" && Ayurveda !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Ayurveda});
		}
				if (streams[z] === "Counselling" && Counselling !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Counselling});
		}
				if (streams[z] === "Documentation" && Documentation !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Documentation});
		}
				if (streams[z] === "Engineering" && Engineering !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Engineering});
		}
				if (streams[z] === "Finance" && Finance !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Finance});
		}
				if (streams[z] === "NewsReporter" && NewsReporter !== 0)
		{
		arr.push({"Stream": streams[z],"Value": NewsReporter});
		}
				if (streams[z] === "Botany" && Botany !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Botany});
		}
				if (streams[z] === "DataAnalytics" && DataAnalytics !== 0)
		{
		arr.push({"Stream": streams[z],"Value": DataAnalytics});
		}
				if (streams[z] === "Environment" && Environment !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Environment});
		}
				if (streams[z] === "Painting" && Painting !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Painting});
		}
				if (streams[z] === "Drawing" && Drawing !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Drawing});
		}
				if (streams[z] === "Medical" && Medical !== 0)
		{
		arr.push({"Stream": streams[z],"Value": Medical});
		}

	}


	var oVizFrame = sap.ui.getCore().byId("idWelcomePage--idcolumn");	
	var oScoreModel = new sap.ui.model.json.JSONModel();
		var data = {
				'Scores' : arr};
		oScoreModel.setData(data);
		oVizFrame.setModel(oScoreModel, "ScoreModel");	


		oVizFrame.setVizProperties({
			   
                    
                    title: {
            text: "Streams you can choose"
        },
            plotArea: { 
            	
            	colorPalette : d3.scale.category20().range()
                }});
	
},

resetStreams: function(){
Literature = 0; Typist = 0; Ethicalhacking = 0; CloudComputing = 0; Blogger = 0; Archeology = 0; Speaker = 0; CivilServices = 0; Ayurveda = 0; Counselling = 0; Teacher = 0; Writer = 0; Poet = 0; ContentWriter = 0; Documentation= 0; WebCoding= 0;  Engineering= 0;  Finance= 0;  NewsReporter= 0; Botany = 0; DataAnalytics= 0; Environment = 0; Painting= 0;  Drawing = 0; Medical = 0;streams = [];	
streams = [];	
},

resetCheckboxes: function(){
	var engLen = sap.ui.getCore().byId("idWelcomePage--hboxEnglish").getItems().length;
	for(var eng = 0; eng<engLen; eng++){
	sap.ui.getCore().byId("idWelcomePage--hboxEnglish").getItems()[eng].setSelected(false);
	}
	var marLen = sap.ui.getCore().byId("idWelcomePage--hboxMarathi").getItems().length;
	for(var mar = 0; mar<marLen; mar++){
	sap.ui.getCore().byId("idWelcomePage--hboxMarathi").getItems()[mar].setSelected(false);
	}
	var hinLen = sap.ui.getCore().byId("idWelcomePage--hboxHindi").getItems().length;
	for(var hin = 0; hin<hinLen; hin++){
	sap.ui.getCore().byId("idWelcomePage--hboxHindi").getItems()[hin].setSelected(false);
	}
	var math1Len = sap.ui.getCore().byId("idWelcomePage--hboxMaths1").getItems().length;
	for(var math1 = 0; math1<math1Len; math1++){
	sap.ui.getCore().byId("idWelcomePage--hboxMaths1").getItems()[math1].setSelected(false);
	}
	var math2Len = sap.ui.getCore().byId("idWelcomePage--hboxMaths2").getItems().length;
	for(var math2 = 0; math2<math2Len; math2++){
	sap.ui.getCore().byId("idWelcomePage--hboxMaths2").getItems()[math2].setSelected(false);
	}
	var sci1Len = sap.ui.getCore().byId("idWelcomePage--hboxScience1").getItems().length;
	for(var sci1 = 0; sci1<sci1Len; sci1++){
	sap.ui.getCore().byId("idWelcomePage--hboxScience1").getItems()[sci1].setSelected(false);
	}
	var sci2Len = sap.ui.getCore().byId("idWelcomePage--hboxScience2").getItems().length;
	for(var sci2 = 0; sci2<sci2Len; sci2++){
	sap.ui.getCore().byId("idWelcomePage--hboxScience2").getItems()[sci2].setSelected(false);
	}
	var soc1Len = sap.ui.getCore().byId("idWelcomePage--hboxSocialScience1").getItems().length;
	for(var soc1 = 0; soc1<soc1Len; soc1++){
	sap.ui.getCore().byId("idWelcomePage--hboxSocialScience1").getItems()[soc1].setSelected(false);
	}
	var soc2Len = sap.ui.getCore().byId("idWelcomePage--hboxSocialScience2").getItems().length;
	for(var soc2 = 0; soc2<soc2Len; soc2++){
	sap.ui.getCore().byId("idWelcomePage--hboxSocialScience2").getItems()[soc2].setSelected(false);
	}
	var ictLen = sap.ui.getCore().byId("idWelcomePage--hboxIct").getItems().length;
	for(var ict = 0; ict<ictLen; ict++){
	sap.ui.getCore().byId("idWelcomePage--hboxIct").getItems()[ict].setSelected(false);
	}
},

checkCheckboxes: function(){
	
	sap.ui.controller("controller.welcomepage").resetStreams();	
if(languageScore >= '5'){
		
var idEg = sap.ui.getCore().byId("idWelcomePage--idEg").getSelected();
var idEf = sap.ui.getCore().byId("idWelcomePage--idEf").getSelected();
var idEs = sap.ui.getCore().byId("idWelcomePage--idEs").getSelected();
var idEc = sap.ui.getCore().byId("idWelcomePage--idEc").getSelected();
var idEp = sap.ui.getCore().byId("idWelcomePage--idEp").getSelected();
var idMg = sap.ui.getCore().byId("idWelcomePage--idMg").getSelected();
var idMs = sap.ui.getCore().byId("idWelcomePage--idMs").getSelected();
var idMc = sap.ui.getCore().byId("idWelcomePage--idMc").getSelected();
var idMp = sap.ui.getCore().byId("idWelcomePage--idMp").getSelected();
var idHg = sap.ui.getCore().byId("idWelcomePage--idHg").getSelected();
var idHs = sap.ui.getCore().byId("idWelcomePage--idHs").getSelected();
var idHc = sap.ui.getCore().byId("idWelcomePage--idHc").getSelected();
var idHp = sap.ui.getCore().byId("idWelcomePage--idHp").getSelected();
 
streams.push("Literature", "Speaker", "Teacher", "Writer", "Poet", "ContentWriter");


if(idEg === true || idMg === true || idHg === true){  Speaker= Speaker+ 1; Teacher = Teacher+ 1;}

if(idEs === true || idMs === true || idHs === true){  ContentWriter = ContentWriter+ 1; Writer = Writer+ 1; Literature = Literature + 1; }

if(idEc === true || idMc === true || idHc === true){ ContentWriter = ContentWriter+ 1; Writer = Writer+ 1; }
if(idEp === true || idMp === true || idHp === true){  Poet= Poet+ 1; Teacher = Teacher+ 1; }

if(idEf === true || idEg === true || idEs === true || idEc === true || idEp === true)

{ 
Poet = Poet + 1; Teacher = Teacher+ 1; English = true; 
}

if( idMg === true || idMs === true || idMc === true || idMp === true)

{ 
Marathi = true; 
}

if( idHg === true || idHs === true || idHc === true || idHp === true)

{ 
Hindi = true; 
}
	
}

if(mathScore >= '5'){
	
var idAp = sap.ui.getCore().byId("idWelcomePage--idAp").getSelected();
var idFp = sap.ui.getCore().byId("idWelcomePage--idFp").getSelected();
var idEq = sap.ui.getCore().byId("idWelcomePage--idEq").getSelected();
var idPr = sap.ui.getCore().byId("idWelcomePage--idPr").getSelected();
var idRp = sap.ui.getCore().byId("idWelcomePage--idRp").getSelected();
var idSt = sap.ui.getCore().byId("idWelcomePage--idSt").getSelected();
var idGr = sap.ui.getCore().byId("idWelcomePage--idGr").getSelected();
var idGe = sap.ui.getCore().byId("idWelcomePage--idGe").getSelected();
var idCo = sap.ui.getCore().byId("idWelcomePage--idCo").getSelected();
var idMe = sap.ui.getCore().byId("idWelcomePage--idMe").getSelected();
var idTr = sap.ui.getCore().byId("idWelcomePage--idTr").getSelected();
var idCg = sap.ui.getCore().byId("idWelcomePage--idCg").getSelected();
var idTc = sap.ui.getCore().byId("idWelcomePage--idTc").getSelected();
	
streams.push("Documentation", "WebCoding", "Engineering", "Finance", "NewsReporter", "DataAnalytics", "Painting", "Drawing");

if(idAp === true){  WebCoding = WebCoding + 1; Engineering = Engineering + 1; Electrical = true;}
if(idFp === true){  Finance = Finance + 1;}
if(idEq === true){  Engineering = Engineering + 1; Electronics = true;}
if(idPr === true){  WebCoding = WebCoding + 1; Engineering = Engineering + 1; NewsReporter = NewsReporter + 1; DataAnalytics = DataAnalytics + 1; }
if(idRp === true){  DataAnalytics = DataAnalytics + 1; Finance = Finance + 1;}
if(idSt === true || idGr === true){ NewsReporter = NewsReporter + 1; DataAnalytics = DataAnalytics + 1; Finance = Finance + 1;}

if(idGe === true || idCo === true){ Engineering = Engineering + 1; Documentation = Documentation + 1; Mechanical = true; Civil = true; }

if(idMe === true || idTr === true){ Engineering = Engineering + 1;  Mechanical = true; Civil = true; }

if(idCg === true){ Engineering = Engineering + 1; Drawing = Drawing + 1;  Mechanical = true; Civil = true; }
if(idTc === true){ Documentation = Documentation + 1; Painting = Painting + 1; Drawing = Drawing + 1; }	
	
	
}


if(scienceScore >= '5'){
	
var idPh = sap.ui.getCore().byId("idWelcomePage--idPh").getSelected();
var idCh = sap.ui.getCore().byId("idWelcomePage--idCh").getSelected();
var idBi = sap.ui.getCore().byId("idWelcomePage--idBi").getSelected();
var idEv = sap.ui.getCore().byId("idWelcomePage--idEv").getSelected();
var idEl = sap.ui.getCore().byId("idWelcomePage--idEl").getSelected();
var idEt = sap.ui.getCore().byId("idWelcomePage--idEt").getSelected();



streams.push("Medical", "Engineering", "Botany", "Environment");

if(idPh === true){ Engineering = Engineering + 1;  Electronics = true;}
if(idCh === true){ Engineering = Engineering + 1; Chemical = true;}
if(idBi === true){ Medical = Medical + 1; Botany = Botany + 1;}
if(idEv === true){ Botany = Botany + 1; Environment = Environment + 1; WasteManagement = true; AgricultureAndFarming = true; }
if(idEl === true){ Engineering = Engineering + 1;  Electrical = true; }
if(idEt === true){ Engineering = Engineering + 1;  Electronics = true; }
	
	
}


if(socaialScore >= '5'){

var idAh = sap.ui.getCore().byId("idWelcomePage--idAh").getSelected();
var idMeh = sap.ui.getCore().byId("idWelcomePage--idMeh").getSelected();
var idMoh = sap.ui.getCore().byId("idWelcomePage--idMoh").getSelected();
var idSh = sap.ui.getCore().byId("idWelcomePage--idSh").getSelected();
var idCw = sap.ui.getCore().byId("idWelcomePage--idCw").getSelected();
var idPd = sap.ui.getCore().byId("idWelcomePage--idPd").getSelected();
var idPm = sap.ui.getCore().byId("idWelcomePage--idPm").getSelected();
var idE = sap.ui.getCore().byId("idWelcomePage--idE").getSelected();
var idPo = sap.ui.getCore().byId("idWelcomePage--idPo").getSelected();

streams.push("Finance", "Literature", "Blogger", "Archeology", "Environment", "CivilServices", "NewsReporter", "Writer", "Ayurveda", "Counselling");

if(idAh === true){ Archeology = Archeology + 1; Ayurveda = Ayurveda + 1; Counselling = Counselling + 1;}
if(idMeh === true){ Finance = Finance + 1; Counselling = Counselling + 1; Literature = Literature + 1; }
if(idMoh === true){ Writer = Writer + 1; CivilServices = CivilServices + 1; Literature = Literature + 1; }
if(idSh === true){ Writer = Writer + 1; Counselling = Counselling + 1; Literature = Literature + 1;}

if(idCw === true || idPd === true || idPm === true){Blogger = Blogger =1 ; NewsReporter = NewsReporter + 1; Environment = Environment + 1; }
if(idE === true){ CivilServices = CivilServices + 1; Finance = Finance + 1; }	
if(idPo === true){ CivilServices = CivilServices + 1;  }


}


if(ictScore >= '5'){
	


var idMo = sap.ui.getCore().byId("idWelcomePage--idMo").getSelected();
var idCt = sap.ui.getCore().byId("idWelcomePage--idCt").getSelected();
var idHa = sap.ui.getCore().byId("idWelcomePage--idHa").getSelected();
var idCc = sap.ui.getCore().byId("idWelcomePage--idCc").getSelected();


streams.push("WebCoding", "Typist", "Ethicalhacking", "CloudComputing", "Documentation", "Engineering");

if(idMo === true){Documentation = Documentation + 1; Typist = Typist + 1; }
if(idCt === true){Engineering = Engineering + 1; Software = true; Documentation = Documentation + 1; Typist = Typist + 1; }
if(idHa === true){Hardware = true; Engineering = Engineering + 1; } 
if(idCc === true){WebCoding = WebCoding + 1; CloudComputing = CloudComputing + 1; Ethicalhacking = Ethicalhacking + 1;}


	
}


$.each(streams, function(i, el){
    if($.inArray(el, uniqueStreams) === -1) uniqueStreams.push(el);
});


},

setSpecializations: function(){
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").removeAllItems();
	
 	for (var s = 0; s < specializations.length; s++){
 	 
 	var oOLI = new sap.m.ObjectListItem({
	title:specializations[s]
	});	
 		
 	if(specializations[s] === "Software" && Software === true)
	{
		oOLI.setIcon("sap-icon://syntax");
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 		
 	if(specializations[s] === "Hardware" && Hardware === true)
	{
		oOLI.setIcon("sap-icon://add-equipment");	
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	
 	 	if(specializations[s] === "AgricultureAndFarming" && AgricultureAndFarming === true)
	{
		oOLI.setIcon("sap-icon://e-care");
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	 	if(specializations[s] === "English" && English === true)
	{
		oOLI.setIcon("sap-icon://alphabetical-order");
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	 	if(specializations[s] === "Marathi" && Marathi === true)
	{
		oOLI.setIcon("sap-icon://add-coursebook");
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	 	if(specializations[s] === "Hindi" && Hindi === true)
	{
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	 	if(specializations[s] === "Electrical" && Electrical === true)
	{
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	 	if(specializations[s] === "Electronics" && Electronics === true)
	{
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	 	if(specializations[s] === "Mechanical" && Mechanical === true)
	{
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	 	if(specializations[s] === "Civil" && Civil === true)
	{
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	 	if(specializations[s] === "Aeronautical" && Aeronautical === true)
	{
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
 	 	if(specializations[s] === "WasteManagement" && WasteManagement === true)
	{
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}
  		if(specializations[s] === "Chemical" && Chemical === true)
	{
	sap.ui.getCore().byId("idWelcomePage--idSpecializationList").addItem(oOLI);	
 	}	
 		
 	}
 		
 	},

onPressRetest:function() {

	
var MsgText = new sap.m.Text();
MsgText.setText("All your selections will be reset. Do you wish to continue?");
										var dialog = new sap.m.Dialog(
										{
											title: 'Error',
											type: 'Message',
											

											beginButton: new sap.m.Button(
											{
												text: 'OK',
												press: function()
												{
sap.ui.getCore().byId("idWelcomePage--idIconTabBar").setSelectedKey("Lvl1");
	sap.ui.controller("controller.welcomepage").initialSetInputs();
		sap.ui.controller("controller.welcomepage").initialSetSliders();
			sap.ui.controller("controller.welcomepage").resetCheckboxes();
													dialog.close();
												}
											}),
											endButton: new sap.m.Button(
											{
												text: 'Cancel',
												press: function()
												{
													
													dialog.close();
												}
											}),	
											afterClose: function()
											{
												dialog.destroy();
											}

										});
										dialog.addContent(MsgText);

										dialog.setResizable(true);
										dialog.open();

	

	
},


onPressEmail: function(){


	var strarr = [];

	
	for (var z = 0; z< uniqueStreams.length; z++){
		
				if (uniqueStreams[z] === "Literature" && Literature !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Literature});
		}
				if (uniqueStreams[z] === "Teacher" && Teacher !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Teacher});
		}
				if (uniqueStreams[z] === "Writer" && Writer !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Writer});
		}
				if (uniqueStreams[z] === "Poet" && Poet !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Poet});
		}
				if (uniqueStreams[z] === "ContentWriter" && ContentWriter !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": ContentWriter});
		}
				if (uniqueStreams[z] === "WebCoding" && WebCoding !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": WebCoding});
		}
				if (uniqueStreams[z] === "Typist" && Typist !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Typist});
		}
				if (uniqueStreams[z] === "CloudComputing" && CloudComputing !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": CloudComputing});
		}
				if (uniqueStreams[z] === "Ethicalhacking" && Ethicalhacking !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Ethicalhacking});
		}
				if (uniqueStreams[z] === "Blogger" && Blogger !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Blogger});
		}
				if (uniqueStreams[z] === "Archeology" && Archeology !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Archeology});
		}
				if (uniqueStreams[z] === "Speaker" && Speaker !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Speaker});
		}
				if (uniqueStreams[z] === "CivilServices" && CivilServices !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": CivilServices});
		}
				if (uniqueStreams[z] === "Ayurveda" && Ayurveda !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Ayurveda});
		}
				if (uniqueStreams[z] === "Counselling" && Counselling !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Counselling});
		}
				if (uniqueStreams[z] === "Documentation" && Documentation !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Documentation});
		}
				if (uniqueStreams[z] === "Engineering" && Engineering !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Engineering});
		}
				if (uniqueStreams[z] === "Finance" && Finance !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Finance});
		}
				if (uniqueStreams[z] === "NewsReporter" && NewsReporter !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": NewsReporter});
		}
				if (uniqueStreams[z] === "Botany" && Botany !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Botany});
		}
				if (uniqueStreams[z] === "DataAnalytics" && DataAnalytics !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": DataAnalytics});
		}
				if (uniqueStreams[z] === "Environment" && Environment !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Environment});
		}
				if (uniqueStreams[z] === "Painting" && Painting !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Painting});
		}
				if (uniqueStreams[z] === "Drawing" && Drawing !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Drawing});
		}
				if (uniqueStreams[z] === "Medical" && Medical !== 0)
		{
		strarr.push({"Stream": uniqueStreams[z],"Value": Medical});
		}

	}
	
 	var mailSpecs = [];

 	for (var y = 0; y < specializations.length; y++){
 	 

 		
 	if(specializations[y] === "Software" && Software === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 		
 	if(specializations[y] === "Hardware" && Hardware === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	
 	 	if(specializations[y] === "AgricultureAndFarming" && AgricultureAndFarming === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	 	if(specializations[y] === "English" && English === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	 	if(specializations[y] === "Marathi" && Marathi === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	 	if(specializations[y] === "Hindi" && Hindi === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	 	if(specializations[y] === "Electrical" && Electrical === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	 	if(specializations[y] === "Electronics" && Software === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	 	if(specializations[y] === "Mechanical" && Software === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	 	if(specializations[y] === "Civil" && Civil === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	 	if(specializations[y] === "Aeronautical" && Aeronautical === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
 	 	if(specializations[y] === "WasteManagement" && WasteManagement === true)
	{
	mailSpecs.push(specializations[y]);	
 	}
  	 	if(specializations[y] === "Chemical" && Chemical === true)
	{
	mailSpecs.push(specializations[y]);	
 	}	
 		
 	}

var mailbodyTextScore = "You rated yourself as follows - \n\n\tLanguages = "+languageScore+"/10 \n\tMathematics = "+mathScore+"/10 \n\tScience = "+scienceScore+"/10 \n\tSocial Science = "+socaialScore+"/10 \n\tInformation and Communication Technology ="+ictScore+"/10 \n\n";
var mailbodyStreams = "We recommend you to choose below streams moving forward in your career based on your liking - \n\n";
var mailbodyStreamsRate = "";
for (var m = 0; m < strarr.length; m++){
	var currStr = strarr[m];
	mailbodyStreamsRate = mailbodyStreamsRate+"\tStream = "+currStr.Stream+", Score = "+currStr.Value+"\n";
}


var mailbodySpecializations = "\nIn your streams, you can choose specializations in -\n\n";
var mailbodySpecializationsNames = "";
for (var x = 0; x < mailSpecs.length; x++){
	
	mailbodySpecializationsNames = mailbodySpecializationsNames+"\t"+mailSpecs[x]+"\n";
}


var subject = "Career Selection Assessment Results of "+toName;
var mailBody = "Hi "+toName+", \n\n Board of Education : "+board+"\n Year of Passing : "+ayear+"\n\n Please find below your Career Selection Assessment Results - \n\n";
var mailSignature = "\n NeJa Tutorials Wishes you all the best for your future. Thanks for choosing our career selection tool.\n\nRegards,\nNeJa Tutorials, \nThane, Mumbai";
	sap.m.URLHelper.triggerEmail(
				To,
				subject,
				mailBody+mailbodyTextScore+mailbodyStreams+mailbodyStreamsRate+mailbodySpecializations+mailbodySpecializationsNames+mailSignature
				);
	
},


navback: function(){
	
sap.ui.getCore().byId("myApp").back();
}


});