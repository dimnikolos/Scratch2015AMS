(function(ext) {
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

    ext.power = function(base,exponent){
        return Math.power(base,exponent);
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        [' ', 'Write to console', 'consoleWrite'],
        ['r', '%n ^ %n', 'power', 2, 3]

        ],
        url: 'http://' // Link to extension documentation, homepage, etc.
    };

    // Register the extension
    ScratchExtensions.register('Console', descriptor, ext);
})({});
