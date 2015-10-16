<!DOCTYPE html>
<html><!-- This is the main page, where everything should be placed on. -->
    <head>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"/>
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css"/>
        <script src="resources/kendoui/js/kendo.all.min.js"></script>
        <link href="resources/kendoui/styles/kendo.common.min.css" rel="stylesheet"/>
        <link href="resources/kendoui/styles/kendo.default.min.css" rel="stylesheet"/>
        <link href="resources/kendoui/styles/kendo.dataviz.min.css" rel="stylesheet"/>
        <link href="resources/kendoui/styles/kendo.dataviz.default.min.css" rel="stylesheet"/>
        <!--<script src="//code.jquery.com/jquery-1.10.2.js"/>-->
        <script src="resources/jquery-ui/jquery-ui.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
        <script src="resources/kendoui/js/kendo.all.min.js"></script>
        <link rel="stylesheet" href="resources/css/style.css"/>
        <script type="text/javascript" src="resources/doc/getDocs.js"></script>
        <script type="text/javascript" src="resources/frontend/sidebar_left/plugins/new_category/newcategory.js"></script>
        <!--<script type="text/javascript" src="resources/frontend/sidebar_left/plugins/new_user/newuser.js"/>-->
    </head>
    <body onload="index('resources/doc/index.xml')">
    
    	<?php include ("resources/doc/manager.php"); ?>
    
        <div id="new-category-window" class="not_selectable">
            <input type="textfield" id="category-title"/>
            <button id="category-ok">Ok</button>
        </div><!--<div id="newUser">
            <input type="textfield" id="username"/>
            <button id="submit">Ok</button>
        </div>-->
        <div id="body"><!-- Title Bar on top of the page, where the actual Path of the Documentation is. -->
            <div id="title_bar" class="not_selectable">
                <div id="title_pane">
                    
                        <div id="title_logo" onClick="window.location.reload()"></div>
                    
                    <div id="title">Dokumentation</div>
                </div>
            </div><!-- End of the Title Bar --><!-- Left Sidebar, where the TreeView is. -->
            <div id="sidebar_left" class="not_selectable"><!--                TreeView                            -->
                <div id="accordion"/>
            </div><!-- End of the Left Sidebar --><!-- Main Page with content Documentation -->
            <div id="main"/><!-- End of Main Page -->
        </div>
    </body>
</html>