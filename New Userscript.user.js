// ==UserScript==
// @name         Attendance Viewer
// @namespace    https://github.com/krsatyam7/NIET-Attendance-Viewer
// @version      0.1
// @description  Are you still skipping classes??
// @author       krsatyam7
// @match        https://niet.instituteoncloud.com/AttendanceReport/StudentAcademicAttendance
// @icon         https://github.com/krsatyam7/NIET-Attendance-Viewer/blob/main/icons.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // Get all elements with the "display:none" property
const hiddenElements = document.querySelectorAll("[style*='display:none']");

// Loop through each hidden element and remove its "display:none" property
hiddenElements.forEach(function(element) {
  element.style.display = "";
});

})();