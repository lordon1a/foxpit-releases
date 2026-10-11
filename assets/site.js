(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    var downloadBtn = document.getElementById('primary-download-btn');
    if (!downloadBtn) return;

    var ua = navigator.userAgent || '';
    var platform = navigator.platform || '';
    var os = 'Download for Windows';
    var note = 'Windows x64 (.exe)';

    if (/Macintosh|Mac OS X/i.test(ua) || /Mac/i.test(platform)) {
      os = 'Download for macOS';
      note = 'macOS Universal (.dmg)';
    } else if (/Linux/i.test(ua) || /Linux/i.test(platform)) {
      os = 'Download for Linux';
      note = 'Linux (.AppImage / .deb)';
    }

    var labelSpan = downloadBtn.querySelector('.download-label');
    if (labelSpan) {
      labelSpan.textContent = os;
    }

    var noteEl = document.getElementById('download-os-note');
    if (noteEl) {
      noteEl.textContent = note;
    }
  });
})();
