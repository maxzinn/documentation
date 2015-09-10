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
			for(var i=0; i < menus.length; i++)
			{
				var menu = $(menus[i]);
           
				
				//Append category
				var categoryTitle = menu.find("title").text();
				var categoryTitleObj = $('<h3 class="sidebar_menu">'+categoryTitle+'</h3>');
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
					var submenuObj = $('<div class="item" onclick="index(&apos;'+link+'&apos;)">'+name+'</div>');
					categoryContainerObj.append(submenuObj);
					
				}
			
			
			
			
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

function newUser() {
    
}




	//error: function() { $("#accordion").children().remove();
	//$("ul").append("<li>There was an error baby!</li>"); }



/*$(document).ready(function() {
                  $.ajax({
                         type: "GET",
                         url: "docs.xml",
                         dataType: "xml",
                         success: xmlParser(xml)
                         });
                  });


function xmlParser(xml) {
    $(xml).find("menu").each(function() {
        $("#accordion").append('<h3 id="programmiersprachen" class="sidebar_menu">' +
                                $(this).find("title").text() +
                                '</h3>' +
                                '<div>' +
                                $(this).find("title/name").text() +
                                '</div>');
        });
}*/
