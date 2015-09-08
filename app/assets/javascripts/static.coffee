ready = ->
	p = $(".popup")
	p.hide()
	$(".show-popup").click ->
    	p.show()
    	$("#cancel").click ->
    		p.hide()

$(document).ready(ready)
$(document).on('page:load', ready)
