/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

  CKEDITOR.replace('description');
  CKEDITOR.replace('metadescription');
    
   $(document).ready(function(){ 
    $("#add_form").validate();
    
     $("#template_title").keyup(function () {

        var str = $.trim($("#template_title").val());
        str = str.replace(/\s+/g, '-').toLowerCase();
        $("#template_slug").val(str);
    })
      
    
    
    });