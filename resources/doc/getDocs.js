$(document).ready( function() {
                  corporateData();
                  index();
                  
                  });


function index(link) {
    
    var main = $("#main");
    var content = main.children();
    content.remove();
    
    $.ajax({
        url: link,
        dataType: "xml",
        success: function(data) {
           
           var header = $(data).find("header").text();
           var paragraphs = $(data).find("paragraph");
           
           main.append('<div class="header">' + header + '</div>');
           
           for(var i=0; i < paragraphs.length; i++) {
           
                var paragraphObj = $(paragraphs[i]);
                var paragraphHeader = paragraphObj.find("paragraph-header").text();
                var paragraphText = paragraphObj.find("text").text();
           
           main.append(
                '<div class="paragraph_header">' +
                paragraphHeader +
                '</div><div class="paragrah_text">' +
                paragraphText +
                '</div>'
           
           );
           }
        }
    });
}

function corporateData() {

	$.ajax({
		url:"resources/doc/docs.xml",
		dataType: "xml",
		success: function(data) {

			var accordion = $("#accordion");
			var menus = $(data).find("category");
			var types = $(data).find("type");
			var funcs = $(data).find("func");
			for(var i=0; i < menus.length; i++)
			{
	            
                    var menu = $(menus[i]);
                    var type = $(types[i]).text();
                    var func = $(funcs[i]).text();
                
                    switch(type) {
                        
                        case "menu":
                            //Append category
                            var categoryId = menu.find("id").text();
                            var categoryTitle = menu.find("title").text();
                            var categoryTitleObj = $('<h3 id="'+categoryId+'" class="sidebar_menu sidebar_menu_'+type+'">'+categoryTitle+'</h3>');
                            var categoryContainerObj = $('<div></div>');
                            accordion.append(categoryTitleObj);
                            accordion.append(categoryContainerObj);
                            
                            var names = menu.find("sub").find('name');
                            var links = menu.find("sub").find('link');
                            for(var j=0; j < names.length; j++)
                            {
                                var name = $(names[j]).text();
                                var link = $(links[j]).text();
                                
                                //example
                                var submenuObj = $('<div class="item" onclick="index(&apos;'+link+'&apos;)"><div class="text">'+name+'</div></div>');
                                categoryContainerObj.append(submenuObj);
                                
                            }
                        break;
                        
                        case "button":
                            var buttonId = menu.find("id").text();
                            var buttonTitle = menu.find("title");
                            var buttonTitleObj = $('<h3 id="'+buttonId+'" class="sidebar_menu sidebar_menu_'+type+'" onclick="'+func+'">'+buttonTitle.text()+'</h3>');
                            var buttonContainerObj = $('<div></div>');
                            accordion.append(buttonTitleObj);
                            accordion.append(buttonContainerObj);
                            
                            // var names = menu.find("sub").find('name');
                            //var links = menu.find("sub").find('link');
                            // for(var j=0; j < names.length; j++)
                            // {
                            // 	var name = $(names[j]).text();
                            //var link = $(links[j]).text();
                            
                            // 	//example
                            // 	var submenuObj = $('<div class="item" onclick="index(&apos;'+link+'&apos;)"><div class="text">'+name+'</div></div>');
                            // 	categoryContainerObj.append(submenuObj);
                            	
                            // }
                        break;
                    }
                        //break;
		            //}
			    
			    
			
			
			
			
				/*
				var info = '<h3 class="sidebar_menu">' +
				$(this).find("title").text() +
				'</h3>' +
				'<div>' +
				$(this).find("lang").find('name').text() +
				'</div>';
			
				$("#accordion").children().append(info);
				*/
			}
			
			accordion.accordion({
            	collapsible: true
            });
	
		}
	});
}













