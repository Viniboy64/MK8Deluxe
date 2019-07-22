import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import ReactTilt from "react-universal-tilt"

const Header = ({ siteTitle }) => (
  <div className = "Header">
    <div className = "ItemsGroup">
      <div className = "ItemsIcon"/>
      <div className = "ItemsText"> Items </div>
    </div>
    <div className = "CupsGroup">
      <div className = "CupsIcon"/>
      <div className = "CupsText"> Cups </div>
    </div>
    <div className = "VehiclesGroup">
      <div className = "VehiclesIcon"/>
      <div className = "VehiclesText"> Vehicles </div>
    </div>
    <div className = "RacersGroup">
      <div className = "RacersIcon"/>
      <div className = "RacersText"> Racers </div>
    </div>
    <ReactTilt
      settings = { {
        base: 'element',
        easing: 'cubic-bezier(0.32, 0.64, 0.32, 0.8)',
        perspective: 640,
        reverse: true,
        scale: 1.1,
        speed: 640,
      } }
      className = "HomeIcon"
    />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header

// (
//   function() {
//     // Init:
//     var container = document.getElementsByClassName('Header'),
//         homeIcon = document.getElementsByClassName('HomeIcon');

//     // Mouse:
//     var mouse = {
//       _x: 0,
//       _y: 0,
//       x: 0,
//       y: 0,

//       updatePosition: function(event) {
//         var e = event || window.event;
    
//         this.x = e.clientX - this._x;
//         this.y = (e.clientY - this._y) * -1;
//       },

//       setOrigin: function(e) {
//         this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
//         this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
//       },

//       show: function() {
//         return '(' + this.x + ', ' + this.y + ')';
//       }
//     };

//     // Track the mouse osition relative to the center of the container:
//     mouse.setOrigin(container);

//     // ****************
//     var counter = 0;
//     var updateRate = 10;
//     var isTimeToUpdate = function() {
//       return counter++ % updateRate === 0;
//     };

//     // ****************
//     var onMouseEnterHandler = function(event) {
//       update(event);
//     };

//     var onMouseLeaveHandler = function() {
//       homeIcon.style = "";
//     };
    
//     var onMouseMoveHandler = function(event) {
//       if (isTimeToUpdate()) {
//         update(event);
//       }
//     };

//     // ****************
//     var update = function(event) {
//       mouse.updatePosition(event);

//       updateTransformStyle(
//         (mouse.y / homeIcon.offsetHeight / 2).toFixed(2),
//         (mouse.x / homeIcon.offsetWidth / 2).toFixed(2)
//       );
//     };

//     var updateTransformStyle = function(x, y) {
//       var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";

//       homeIcon.style.transform = style;
//     };

//     // ****************
//     container.onMouseEnter = onMouseEnterHandler;
//     container.onMouseLeave = onMouseLeaveHandler;
//     container.onMouseMove = onMouseMoveHandler;
//   }
// )();