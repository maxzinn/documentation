$(document).ready(function() {
                    var window = $("#newUser"),
                        newUser = $("#createnewuser");
                        
                        //window.data("kendoWindow").close();
                        
                    newUser.bind("click", function() {
                        window.data("kendoWindow").open();
                        
                    });

                    if (!window.data("kendoWindow")) {
                        window.kendoWindow({
                            width: "500px",
                            visible: false,
                            actions: ["Close"],
                            title: "Neuen Benutzer hinzufügen",
                        });
                        
                    }
                    
                });