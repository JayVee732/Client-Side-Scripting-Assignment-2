//VintageTXT
$(function () {
  var VintageTxtTest = {
    
    el : $('#doThis'),
    
    go : function go() {
      this.el.vintageTxt({
         text : [".  .  .  "]
        ,textSpeed: 300
        ,promptEnabled: false
        ,overlayImage: 'plugins/jqVintageTxt/img/lostpcB.png'
        ,onFinishedTyping : this.intro
      });
    },

    intro : function intro() {
      var texts = [
        ["Hello,","and welcome to my demo of VintageTxt."]
        ,["This is a plugin that consists of displaying text on a computer, basically.","To start, I'll write my name."]
      ];

      self.el.vintageTxt('updateOptions', {
        textSpeed: 60
        ,onFinishedTyping : null
        ,onEnterKey : self.pageOne
        ,promptEnabled : true
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageOne : function pageOne(e, inputTxt) {
      var texts = [
        ["As we can see, my name is " + inputTxt + "!","It was an input prompt!","And it works!"]
        ,["There's also additonal features like..."]
      ];

      self.el.vintageTxt('updateOptions', {
        onFinishedTyping : self.pageTwo
        ,onEnterKey : null
        ,promptEnabled : false
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageTwo : function pageTwo() {
      self.el.vintageTxt('reset'
        ,["... like changing the typing speed,","and the delay for carriage returns.","So you can type lots and lots and lots and lots and lots and lots and lots of stuff without waiting forever."," ","See?"]
        ,{  textSpeed : 10
           ,linePause : 30
           ,onFinishedTyping : function(){setTimeout(self.pageThree, 2000);}
        }
      );
    },

    pageThree : function pageThree() {
      self.el.vintageTxt('reset'
        ,["And","you","can","also","adjust","the","maximum","number","of","lines","per","screen."]
        ,{  textSpeed : 30
           ,linePause : 400
            , maxRows: 2
            , onFinishedTyping: function () { setTimeout(self.finalPage, 2000); }
        }
      );
    },

    finalPage : function finalPage() {
      self.el.vintageTxt('reset'
        ,["And that's about it really, it works by making pages with arrays of strings","that make up this text.","And then setting properties in those pages.","Simple and neat!", "And that's about it for VintageTxt.", "We can see now how it can also respond to inputs."]
        ,{  onFinishedTyping: null
           ,onEnterKey: null
           ,promptEnabled : true
         }
      );
    }

  }
  var self = VintageTxtTest;

  VintageTxtTest.go();

  //Adaptive Background
  $("img.vintageTxt_overlay").attr("data-adaptive-background", 1);
  $("img.vintageTxt_overlay").attr("data-ab-parent", 'body');
  $.adaptiveBackground.run();

});
