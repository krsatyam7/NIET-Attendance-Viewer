// ==UserScript==
// @name         Attendance Viewer
// @namespace    https://github.com/krsatyam7/NIET-Attendance-Viewer
// @version      0.1
// @description  Are you still skipping classes??
// @author       krsatyam7
// @match        https://niet.instituteoncloud.com/AttendanceReport/StudentAcademicAttendance
// @icon         https://user-images.githubusercontent.com/110342305/230463675-b0cde796-e67d-4330-a53d-e3530b9ab1da.png
// @license MIT 
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
