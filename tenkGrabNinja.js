/*
* Javascript to help redesininja web pages
*
* Author: Christian Flores
* Company: tenK Solutions
* Website: http://christianmflores.com/
*
* Version: 	0.0.1 (17 February 2016)
*			Can move objects and change the fonts of an element after a double click
* 			uses prompt to take inputs
*Version:       0.0.2 (18 February 2016)
*                       It is broken. somthing having to do with the a missing semicolon or a
*                       missing bracket because all of the functions are not workig.
*                       
*/

function createWorkBench (dataName, attrName) {
    var workbenchName = "workbench";
    if ($("#" + workbenchName).length <= 0) {

        let styles = {
            background:     "#fff",
            color:          "#696969",
            position:       "fixed",
            padding:        "10px",
            top:            "0",
            left:           "0",
            width:          "300px",
            zIndex:         "99999999999"
        };

        $("<input/>", {
            id: workbenchName,
            class: "OFF",
            type: 'text'
        }).css( styles ).attr(
            dataName,
            attrName
        ).appendTo($( 'body' ));
    }
    else {
        $("#" + workbenchName).each(function() {
            var attributes = this.attributes;
            var i = attributes.length;
            while( i-- ){
                this.removeAttributeNode(attributes[i]);
            }
        });
         $("#" + workbenchName).attr(
             dataName,
             attrName
         );
    }
}

function _styleBox (count) {
    const nameStyle = {
        background:     "#fff",
        color:          "#696969",
        position:       "fixed",
        padding:        "10px",
        top:            "0",
        left:           "0",
        width:          "300px",
        zIndex:         "99999999999"
    };
    const valueStyle = {
        background:     "#fff",
        color:          "#696969",
        position:       "fixed",
        padding:        "10px",
        top:            "0",
        left:           "305px",
        width:          "300px",
        zIndex:         "99999999999"
    };

    $("<input/>", {
        id: 'style-name',
        class: "OFF",
        type: 'text',
    }).css( nameStyle ).appendTo($( 'body' ));

    $("<input/>", {
        id: 'style-value',
        class: "OFF",
        type: 'text'
    }).css( valueStyle ).appendTo($('body'));
}

var firstAttb = false;

function buildStyle(e) {
    firstAttb = true;
}
function finishStyle(e) {
   if(firstAttb == true) {
       $(e.target).css(
           $('#style-name').val() , $('#style-value').val()
       );

       console.log($('#style-name').val());
       console.log( $('#style-value').val() );
   }
}

var count = 0;

$(document).on('click', function(e) {

    if ($(e.target).attr('class') != "OFF") {

        _styleBox(count);

        const nameBox = $('#style-name');
        const valueInput = $('#style-value');
        const tempStyle = {
            valueInput: valueInput
        };

        $('#style-name').change(buildStyle);
        $('#style-value').change(finishStyle(e));

        //$(e.target).css( tempStyle );

        if(!$(e.target).hasClass('OFF')) {
            $(e.target).attr('contenteditable', 'true');
        }

        $(e.target).draggable({
            appendTo: "body"
        });

    }
    count++;
});

// function User( uid ) {
//     var binder = new DataBinder( uid ),
//
//         user = {
//             attributes: {},
//
//             // The attribute setter publish changes using the DataBinder PubSub
//             set: function( attr_name, val ) {
//                 this.attributes[ attr_name ] = val;
//                 binder.trigger( uid + ":change", [ attr_name, val, this ] );
//             },
//
//             get: function( attr_name ) {
//                 return this.attributes[ attr_name ];
//             },
//
//             _binder: binder
//         };
//
//     // Subscribe to the PubSub
//     binder.on( uid + ":change", function( evt, attr_name, new_val, initiator ) {
//         if ( initiator !== user ) {
//             user.set( attr_name, new_val );
//         }
//     });
//
//     return user;
// }
//
// var ninja = (function(window, undefined){
//
// 	//Constructor
// 	function ninja(){
//             this.count = 0;
//             this.top = 0;
//             this.left = 0;
//             this.xPos = 0;
//             this.yPos = 0;
//             this.el = "";
//             this.lastElem = null;
//             this.noSelectArray = [
//                 "grab-off"
//             ];
//             this.element = {
//                 size: "",
//                 family: "",
//                 color: "",
//                 backgroundColor: ""
//             };
//             this.styleBox = {
//                 html:   "<div id='GrabNinja' class='grab-off'>" +
//                         "<label for='fontsize' class='grab-off'>Font Size</label>"+
//                         "<input data-bind-123='name' name='fontsize' id='fontsize' class='grab-off'>" +
//                         "<label for='fontfamily' class='grab-off'>Font Family</label>" +
//                         "<input name='fontfamily' id='fontfamily' class='grab-off'>" +
//                         "<label for='fontcolor' class='grab-off'>Font Color</label>" +
//                         "<input name='fontcolor' id='fontcolor' class='grab-off'>" +
//                         "<label for='background' class='grab-off'>Background Color</label>" +
//                         "<input name='background' id='background' class='grab-off'>" +
//                         "</div>",
//                 made: false,
//                 position: {
//                     x: 0,
//                     y: 0
//                 }
//             };
// 	}
//
// 	ninja.prototype.init = function (e) {
//
//         var selectable = true;
//         if($(e.target).attr("class") == 'grab-off'){
//             console.log($(e.target).attr('class'));
//             selectable = false;
//         }
//
//         if(e.target!==document.documentElement&&e.target!==document.body&&selectable){
//             this.count++;
//             this.el = this.count;
//             e.target.setAttribute("drag", this.el);
//             if(e.target.id!=='ninjabox'){
//                 e.target.style.position="relative";
//             }
//             this.top = parseInt(e.target.style.top) || 0;
//             this.left = parseInt(e.target.style.left) || 0;
//         }
//
//         this.xPos = e.clientX;
//         this.yPos = e.clientY;
//
//         this.element.size = $(e.target).css('font-size') || 'none';
//         this.element.family = $(e.target).css('font-family') || 'none';
//         this.element.color = $(e.target).css('color') || 'none';
//         this.element.backgroundColor = $(e.target).css('background-color') || 'none';
//
// 	};
//
// 	ninja.prototype.moveObject = function (e) {
//         if(this.el!==""){
//             var a = document.querySelector('[drag="'+this.el+'"]');
//             a.style.left = this.left + (e.clientX-this.xPos)+ 'px';
//             a.style.top = this.top + (e.clientY-this.yPos)+ 'px';
//             a.style.zIndex = this.el;
//         }
//
// 	};
//
// 	ninja.prototype.destroy = function () {
// 	        if(this.el != this.lastEl){
//
//             }
//             this.el = "";
// 	};
//
// 	ninja.prototype.changeFontSize = function () {
// 	    this.el.css("font-size", $(this.val() + "px"));
//     };
//
// 	ninja.prototype.styleBoxController = function (e) {
// 	    // Grab info. Font size, font type, color, background color
//         //let size = $(e.target).css('font-size') || 'none';
//         // let size = $(e.target).css('font-size') || 'none';
//         // let family = $(e.target).css('font-family') || 'none';
//         // let color = $(e.target).css('color') || 'none';
//         // let backgroundColor = $(e.target).css('background-color') || 'none';
//         //console.log(size, family, color, backgroundColor);
//
//         // Fill variables
//         user.name = this.element.size;
//         this.element.size = user.name;
//         console.log(this.element.size);
//         //this.element.size = size;
//         // this.element.family = family;
//         // this.element.color = color;
//         // this.element.backgroundColor = backgroundColor;
//
// 	    // Create Box if not created
//         if(this.styleBox.made == false) {
//             $(e.target).after(this.styleBox.html);
//             this.styleBox.made = true;
//         }
//
//         // Set position
//
//
//     };
//
// 	ninja.prototype.prevent = function (e) {
//         if($(e.target).attr("class") != "grab-off") {
//             e.preventDefault();
//         }
//     };
//
//
// 	return ninja;
// })( window );
//
// var user = new User(123);
// // user.set( "name", "Wolfgang" );
//
//     var GrabNinja = new ninja();
//
//     GrabNinja.styleBoxGenerator();
//
//     document.addEventListener("click", function(q){
//         q.preventDefault();
//     });
//
//     // Initialize
// 	document.onmousedown = function (e) {
//         if($(e.target).attr("class") != "grab-off") {
//             e.preventDefault();
//             GrabNinja.init(e);
//             GrabNinja.styleBoxController(e);
//             user.set( "name", "" );
//         }
// 	};
//
//     // Start
// 	document.onmousemove = function (e) {
//         if($(e.target).attr("class") != "grab-off") {
//             e.preventDefault();
//             GrabNinja.moveObject(e);
//         }
// 	};
//
// 	// Destroy
// 	document.onmouseup = function (e) {
//         if($(e.target).attr("class") != "grab-off") {
//             GrabNinja.destroy();
//         }
// 	};
//
//