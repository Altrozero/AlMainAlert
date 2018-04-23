/**
 * Simple jQuery plugin for showing alerts and errors on a page.
 *
 * @author Timothy Wilson 2018 <https://github.com/Altrozero>
 *
 * Thanks to; http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/
 *
 * ******************************
 * SETTINGS
 * ******************************
 * message string "The displayed content"
 * class string "The style you want to use"
 * type [overlay|block] "overlay is the default, you can use block when you dont want it to cover content.
 *    It's suggested you don't mixed and match both in a project."
 *
 */

(function($) {
  $.alMainAlert = function(options) {
    var defaults = {
      message: 'Test Message New',
      class: 'alMainAlert',
      type: 'overlay' // Options Overlay or Block
    }

    var plugin = this;

    plugin.settings = {}

    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);

      // Add the holder for hoverovers
      if (!$("#alSiteAlert-holder").length) {
        jQuery("<div/>", {
          id: "alSiteAlert-holder",
          css: {
            position: "fixed",
            top: "0px",
            right: "0px",
            left: "0px"
          }
        }).appendTo("body");
      }

      // Add the holder for dropdowns
      if (!$("#alSiteAlert-holderBlock").length) {
        jQuery("<div/>", {
          id: "alSiteAlert-holderBlock",
          css: {
            position: "relative",
            top: "0px",
            right: "0px",
            left: "0px"
          }
        }).prependTo("body");
      }

      plugin.add();
    }

    plugin.add = function() {
      var holder = jQuery("<div/>", {
        class: plugin.settings.class,
        html: plugin.settings.message
      }).append(
        jQuery("<div/>", {
          class: "alMainAlertClose",
          html: "X",
          click: function(){
              jQuery(this).parent().remove();
          }
        })
      );

      switch(plugin.settings.type) {
        case "block":
          holder.appendTo("#alSiteAlert-holderBlock");
          break;
        case "overlay":
        default:
          holder.appendTo("#alSiteAlert-holder");
          break;
      }
    }

    // Start the plugin
    plugin.init();
  }

  $.fn.alMainAlert = function(options) {
      return this.each(function() {
          if (undefined == $(this).data("alMainAlert")) {
              var plugin = new $.alSiteAlerts(this, options);
              $(this).data("alMainAlert", plugin);
          }
      });

  }
})(jQuery);
