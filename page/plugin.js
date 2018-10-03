CKEDITOR.plugins.add( 'page', {
  icons: 'page',
  init: function( editor ) {
    var pluginDirectory = this.path;
    editor.addContentsCss( pluginDirectory + 'style.css' );

    editor.widgets.add('page', {
      button: 'New Page',
      template: '<div class="page"> \
          Hello \
        </div>',

      editables: {
        page: {
          selector: '.page',
          allowedContent: 'p'
        }
      },

      allowedContent: 'div(!page);',
      requiredContent: 'div(page)',

      upcast: function( element ) {
        return element.name == 'div' && element.hasClass( 'page' );
      }
    });
  }
});



    /*editor.addCommand( 'insertPage', {
      allowedContent: 'table(page)',
      exec: function( editor ) {
        var range = editor.createRange();
        editor.insertHtml('\
        <table class="page"> \
          <tr> \
            <td> \
              hello \
            </td> \
          </tr> \
        </table>', 'html', range);
      }
    });

    editor.ui.addButton( 'Page', {
      label: 'Insert Page',
      command: 'insertPage',
      toolbar: 'insert'
    });*/
