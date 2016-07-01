// Javascripts solely for the demo site

    $(document).ready(function(){
		
		$('.code-example').each(function() {
		  $(this).prevAll('h2').first().append('<a class="code-example-trigger" href="#">Code</a>');
		});

        $('.code-example').each(function(example){
            var $example = $(this);
            var $pre = $('<pre></pre>');
            $pre.text($example.html())
                .addClass('prettyprint prettyprint-toglable')
                .insertBefore($example);
        });

        $('code.lang-html').text($('code.lang-html').html());
    
        $('pre.prettyprint-toglable').hide();
		$('.code-example-trigger').click(function () {
		  $(this).parent().nextAll('pre.prettyprint-toglable').first().slideToggle('fast');
		  return false;
		});	
		

	});
