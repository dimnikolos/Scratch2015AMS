(function(ext) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
    navigator.getUserMedia(
        {audio : true},
        function(stream) {

          var url = URL.createObjectURL(stream);
          var audioContext = new AudioContext();
          var mediastreamsource = audioContext.createMediaStreamSource(stream);
          var analyser = audioContext.createAnalyser();
          var frequencyData = new Uint8Array(analyser.frequencyBinCount);
          mediastreamsource.connect(analyser);
      },
      function(e) {
          console.log(e);
      }
      );

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {
    };

    // Status reporting code
    // Return any message to be displayed as a tooltip.
    // Status values: 0 = error (red), 1 = warning (yellow), 2 = ready (green)
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // For information on writing Scratch extensions, see the ScratchX wiki:
    // https://github.com/LLK/scratchx/wiki#writing-extensions-for-scratchx
    ext.consoleWrite = function() {
        // code to do something goes here
        console.log("Hi there!");
    };

    ext.whistle = function(base,exponent){
        console.write(frequencyData[1]);
        analyser.getByteFrequencyData(frequencyData);
        return(frequencyData.indexOf(Math.max.apply(Math, frequencyData)));

    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        [' ', 'Write to console', 'consoleWrite'],
        ['r', 'whistle','whistle']

        ],
        url: 'http://' // Link to extension documentation, homepage, etc.
    };

    // Register the extension
    ScratchExtensions.register('Console', descriptor, ext);
})({});
