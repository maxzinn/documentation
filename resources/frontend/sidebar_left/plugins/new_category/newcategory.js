$(document).ready(function() {
    
     //var newCategory = $("#newcategory");
    var window = $("#new-category-window");
    
    
    // newCategory.click( function() {
    //     alert("HALOIE");
    // });
    $(".k-window").addClass("not_selectable");
    
    if (!window.data("kendoWindow")) {
                        window.kendoWindow({
                            width: "80%",
                            height: "80%",
                            actions: ["Close"],
                            title: "Neue Kategorie hinzufügen",
                            visible: false,
                            pinned: false,
                            modal: true,
                            resizable: false,
                            draggable: false,
                            position: {
                                top: "10%",
                                left: "10%"
                            }
                            
                        });
                    }
                    
                    $(document).on("keydown.examples", function(e) {
                    if (e.escKey) {
                        $("#new-category-window").close();
                    }
                });
                    
                    
});
function newCategory() {
    var window = $("#new-category-window");
    var data = window.data("kendoWindow");
    data.open();
    data.center();
}