$(Document).ready( function() {
                  
                  $("#createnewuser").onclick(function() {
                              
                        var window = $("#window"),
                        undo = $("#undo");
                        
                        undo.bind("click", function() {
                            window.data("kendoWindow").open();
                            undo.hide();
                        });
                                              
                        if (!window.data("kendoWindow")) {
                            window.kendoWindow({
                                width: "500px",
                                actions: ["Custom", "Minimize", "Maximize", "Close"],
                                title: "About Josef Hoffmann",
                                close: function() {
                                    undo.show();
                                }
                            });
                        }
                        window.data("kendoWindow").wrapper.find(".k-i-custom").click(function(e){
                            alert("Custom action button clicked");
                            e.preventDefault();
                        });
                              
                  });
});