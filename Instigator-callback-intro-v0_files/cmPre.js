// Copyright (c) CaseMaster Technology Ltd. All rights reserved.
// See LICENSE file in the project root for full license information.

// Array of functions to be executed on document ready
var onDocumentReadyFunctions = [];

// Close modal; optionally reloading a URL in parent window
function closeModal(url) {
    // Hide the modal
    parent.$('#cmModal').modal('hide');

    if (url !== undefined) {
        // Redirect the parent window
        parent.location.href = url;
    }
}

// Open a row link; handling any user modifiers
function rowLinkOpen(e, url) {
    // Handle target
    var specs;

    switch (e.which) {
        case 1:
            if (e.ctrlKey) {
                target = '_blank';
            } else if (e.shiftKey) {
                target = '_blank';
                specs = '';
            } else {
                target = '_self';
            }
            break;
        case 2:
            target = '_blank';
            break;
        default:
            return false;
    }

    window.open(url, target, specs);
}