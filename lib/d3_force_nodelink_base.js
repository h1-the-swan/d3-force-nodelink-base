(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3-array"), require("d3-drag"), require("d3-force"), require("d3-scale"), require("d3-scale-chromatic"), require("d3-selection"));
	else if(typeof define === 'function' && define.amd)
		define("d3_force_nodelink_base", ["d3-array", "d3-drag", "d3-force", "d3-scale", "d3-scale-chromatic", "d3-selection"], factory);
	else if(typeof exports === 'object')
		exports["d3_force_nodelink_base"] = factory(require("d3-array"), require("d3-drag"), require("d3-force"), require("d3-scale"), require("d3-scale-chromatic"), require("d3-selection"));
	else
		root["d3_force_nodelink_base"] = factory(root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_d3_array__, __WEBPACK_EXTERNAL_MODULE_d3_drag__, __WEBPACK_EXTERNAL_MODULE_d3_force__, __WEBPACK_EXTERNAL_MODULE_d3_scale__, __WEBPACK_EXTERNAL_MODULE_d3_scale_chromatic__, __WEBPACK_EXTERNAL_MODULE_d3_selection__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: d3ForceNodeLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vis.js */ "./src/vis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d3ForceNodeLink", function() { return _vis_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/vis.js":
/*!********************!*\
  !*** ./src/vis.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale-chromatic */ "d3-scale-chromatic");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-force */ "d3-force");
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_force__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-drag */ "d3-drag");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_drag__WEBPACK_IMPORTED_MODULE_5__);
// d3ForceNodeLink
// import * as d3 from 'd3';
// import jQuery from 'jquery';
// const $ = jQuery;






const d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"],

  get event() {
    return d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"];
  },

  scaleOrdinal: d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"],
  scaleLinear: d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"],
  schemeCategory10: d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__["schemeCategory10"],
  forceManyBody: d3_force__WEBPACK_IMPORTED_MODULE_3__["forceManyBody"],
  forceSimulation: d3_force__WEBPACK_IMPORTED_MODULE_3__["forceSimulation"],
  forceLink: d3_force__WEBPACK_IMPORTED_MODULE_3__["forceLink"],
  forceCenter: d3_force__WEBPACK_IMPORTED_MODULE_3__["forceCenter"],
  extent: d3_array__WEBPACK_IMPORTED_MODULE_4__["extent"],
  drag: d3_drag__WEBPACK_IMPORTED_MODULE_5__["drag"] // d3.event is a live binding, so need to use getter

};

class d3ForceNodeLink {
  constructor(opts = {}) {
    const defaults = {
      element: null,
      data: null,
      width: 960,
      color: d3.scaleOrdinal(d3.schemeCategory10),
      forceStrength: -2,
      sizeField: 'flow',
      // field with continuous variable to use for size
      colorField: 'cl_top' // categorical field to use for colors

    };
    Object.assign(this, defaults, opts); // opts will overwrite defaults

    this._data = this.data;
    this.data = this.updateData;

    if (typeof this.height === 'undefined' || this.height === null) {
      this.height = .625 * this.width;
    }

    this.manyBody = d3.forceManyBody().strength(this.forceStrength);
    this.init = false;
    console.log(this._data);

    if (this.element !== null && this._data !== null) {
      this.draw(this.element);
      this.init = true;
    }
  }

  getLinkId(link, directed = false) {
    // link ID will be the concatenation of the source ID and target ID, separated by "-&-"
    // If the graph is undirected, the IDs will be sorted ALPHABETICALLY using the string values of the ID
    var source = link.source.toString();
    var target = link.target.toString();
    var items = [source, target];
    var sep = "-&-";

    if (directed === true) {
      items.sort();
    }

    return items[0] + sep + items[1];
  }

  updateData(value) {
    if (!arguments.length) return this._data;
    this._data = value;

    if (this.init === false) {
      this.draw(this.element);
      this.init = true;
    } else {
      // this.updateData();
      // NOT IMPLEMENTED
      console.log("UPDATING DATA NOT YET IMPLEMENTED");
    } // console.log(typeof updateData);
    // if (typeof updateData === 'function') updateData();


    return this;
  }

  draw(selection) {
    var obj = this;
    var width = this.width;
    var height = this.height;
    var graph = this._data;
    var manyBody = this.manyBody;
    var color = this.color;
    var getLinkId = this.getLinkId;
    var sizeField = this.sizeField;
    var colorField = this.colorField;
    selection.each(function () {
      var selItem = this;
      var svg = d3.select(selItem).append("svg").attr("width", width).attr("height", height);
      console.log(graph);

      function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        console.log(d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"]);
        console.log(d3.event);
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      function enterNodes(node, t = null) {
        // pass in the selection for entering nodes
        var defaultColor = color(0);
        sizeScale.domain(d3.extent(graph.nodes, function (d) {
          if (d.hasOwnProperty(sizeField)) {
            return d[sizeField];
          } else {
            return [5, 5];
          }
        }));
        var nodeEnter = node.enter().append("g") // .attr("r", 5)
        .attr("class", "node") // .attr("transform", function(d) {
        // 	var tx = (width/2) + d.x;
        // 	var ty = (height/2) + d.y;
        // 	return "translate(" + tx + "," + ty + ")";
        // })
        .call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended));
        node = node.merge(nodeEnter).attr("cx", function (d) {
          return d.x = width / 2 + d.x;
        }).attr("cy", function (d) {
          return d.y = height / 2 + d.y;
        }).each(function (d) {
          if (d.hasOwnProperty(sizeField)) {
            d.radius = sizeScale(d[sizeField]);
          } else {
            d.radius = 5;
          }

          if (d.hasOwnProperty(colorField)) {
            d.color = color(d[colorField]);
          } else {
            d.color = defaultColor;
          }
        });
        var nodeCircle = nodeEnter.attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        }).append("circle") // .attr("x", function(d) { return d.x; })
        // .attr("y", function(d) { return d.y; })
        .attr("fill", function (d) {
          return d.color;
        }).attr("r", 0);

        if (t !== null) {
          // nodeEnter.each(function(d) {
          // 	d.x = width/2;
          // 	d.y = height/2;
          // });
          node.selectAll("circle").transition(t).attr("r", function (d) {
            return d.radius;
          }) // .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });
          .attr("fill", function (d) {
            return d.color;
          });
        } else {
          node.selectAll("circle").attr("r", function (d) {
            return d.radius;
          }) // .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });
          .attr("fill", function (d) {
            return d.color;
          });
        }

        return node;
      }

      function enterLinks(link, t = null) {
        // pass in the selection for entering links
        var linkEnter = link.enter().append("line").attr("x1", function (d) {
          return d.source.x;
        }).attr("y1", function (d) {
          return d.source.y;
        }).attr("x2", function (d) {
          return d.target.x;
        }).attr("y2", function (d) {
          return d.target.y;
        }).attr("class", "link");
        link = link.merge(linkEnter);
        link.attr("stroke-width", function (d) {
          return Math.sqrt(d.weight);
        });

        if (t !== null) {
          linkEnter // .style("opacity", 0)
          .style("stroke", "green"); // linkEnter.transition(t)
          // 	.style("opacity", 1);
        } else {//
          }

        return link;
      }

      graph.nodes.forEach(function (d) {
        d.id = d.id.toString();
      });
      graph.links.forEach(function (d) {
        d.source = d.source.toString();
        d.target = d.target.toString();
        d.id = getLinkId(d, graph.directed);
      });
      var simulation = d3.forceSimulation().force("link", d3.forceLink().id(function (d) {
        return d.id;
      })) // .force("link", d3.forceLink())
      .force("charge", manyBody).force("center", d3.forceCenter(width / 2, height / 2));
      simulation.nodes(graph.nodes).on("tick", ticked);
      simulation.force("link").links(graph.links);
      obj.simulation = simulation;
      var sizeScale = d3.scaleLinear().range([4, 12]);
      var g = svg.append("g");
      var link = g.append("g").attr("class", "links") // .selectAll("line")
      .selectAll(".link");
      link = link.data(graph.links, function (d) {
        return d.id;
      });
      var node = g.append("g").attr("class", "nodes").selectAll(".node");
      node = node.data(graph.nodes, function (d) {
        return d.id;
      });
      node = enterNodes(node);
      link = enterLinks(link); // nodeCircle.on('click', function(d) {
      // 	node.classed('focus', false);
      // 	node.selectAll("text").style("display", "none");
      // 	nodeCircle.attr("fill", "black")
      // 		.style("opacity", .1);
      // 	link.style("opacity", .1);
      // 	var component_ids = graph.graph.connected_components[d.component];
      // 	var component = node.filter(function(d) {return component_ids.includes(d.id); });
      // 	var componentLink = link.filter(function(d) {return component_ids.includes(d.source.id);})
      // 	var componentColor = d3.scaleOrdinal(d3.schemeCategory10);
      // 	component.classed("focus", true);
      // 	component.selectAll("circle").attr("fill", function(d) { return componentColor(d.cl_bottom); })
      // 		.style("opacity", 1);
      // 	component.selectAll("text").style("display", "");  // show these labels
      // 	componentLink.style("opacity", 1);
      // 	
      // 	$( '#nodelab-form' ).css( 'visibility' , 'visible' );
      // 	applyRadioSelection();
      //
      // 	d3.event.stopPropagation();
      //
      // });

      function ticked() {
        // node
        //     .attr("cx", function(d) { return d.x; })
        //     .attr("cy", function(d) { return d.y; });
        // add bounding box
        //   https://bl.ocks.org/mbostock/1129492
        node.attr("cx", function (d) {
          d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
          return d.x;
        }).attr("cy", function (d) {
          d.y = Math.max(d.radius, Math.min(width - d.radius, d.y));
          return d.y;
        }).attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        });
        link // .selectAll("line")
        .attr("x1", function (d) {
          return d.source.x;
        }).attr("y1", function (d) {
          return d.source.y;
        }).attr("x2", function (d) {
          return d.target.x;
        }).attr("y2", function (d) {
          return d.target.y;
        });
      }

      function reset_layout() {
        node.classed("focus", false);
        node.selectAll("text").style("display", "none"); // nodeCircle.attr("fill", function(d) { return d.color_orig; })
        // 	.style("opacity", 1);

        link.style("opacity", 1);
      }

      svg.on("click", reset_layout);
    });
    return this;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (d3ForceNodeLink);

/***/ }),

/***/ "d3-array":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-array","commonjs2":"d3-array","amd":"d3-array","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_array__;

/***/ }),

/***/ "d3-drag":
/*!*****************************************************************************************!*\
  !*** external {"commonjs":"d3-drag","commonjs2":"d3-drag","amd":"d3-drag","root":"d3"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_drag__;

/***/ }),

/***/ "d3-force":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-force","commonjs2":"d3-force","amd":"d3-force","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_force__;

/***/ }),

/***/ "d3-scale":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-scale","commonjs2":"d3-scale","amd":"d3-scale","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_scale__;

/***/ }),

/***/ "d3-scale-chromatic":
/*!**************************************************************************************************************************!*\
  !*** external {"commonjs":"d3-scale-chromatic","commonjs2":"d3-scale-chromatic","amd":"d3-scale-chromatic","root":"d3"} ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_scale_chromatic__;

/***/ }),

/***/ "d3-selection":
/*!********************************************************************************************************!*\
  !*** external {"commonjs":"d3-selection","commonjs2":"d3-selection","amd":"d3-selection","root":"d3"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_selection__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2QzX2ZvcmNlX25vZGVsaW5rX2Jhc2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS8uL3NyYy92aXMuanMiLCJ3ZWJwYWNrOi8vZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZDMtYXJyYXlcIixcImNvbW1vbmpzMlwiOlwiZDMtYXJyYXlcIixcImFtZFwiOlwiZDMtYXJyYXlcIixcInJvb3RcIjpcImQzXCJ9Iiwid2VicGFjazovL2QzX2ZvcmNlX25vZGVsaW5rX2Jhc2UvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImQzLWRyYWdcIixcImNvbW1vbmpzMlwiOlwiZDMtZHJhZ1wiLFwiYW1kXCI6XCJkMy1kcmFnXCIsXCJyb290XCI6XCJkM1wifSIsIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJkMy1mb3JjZVwiLFwiY29tbW9uanMyXCI6XCJkMy1mb3JjZVwiLFwiYW1kXCI6XCJkMy1mb3JjZVwiLFwicm9vdFwiOlwiZDNcIn0iLCJ3ZWJwYWNrOi8vZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZDMtc2NhbGVcIixcImNvbW1vbmpzMlwiOlwiZDMtc2NhbGVcIixcImFtZFwiOlwiZDMtc2NhbGVcIixcInJvb3RcIjpcImQzXCJ9Iiwid2VicGFjazovL2QzX2ZvcmNlX25vZGVsaW5rX2Jhc2UvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImQzLXNjYWxlLWNocm9tYXRpY1wiLFwiY29tbW9uanMyXCI6XCJkMy1zY2FsZS1jaHJvbWF0aWNcIixcImFtZFwiOlwiZDMtc2NhbGUtY2hyb21hdGljXCIsXCJyb290XCI6XCJkM1wifSIsIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJkMy1zZWxlY3Rpb25cIixcImNvbW1vbmpzMlwiOlwiZDMtc2VsZWN0aW9uXCIsXCJhbWRcIjpcImQzLXNlbGVjdGlvblwiLFwicm9vdFwiOlwiZDNcIn0iXSwibmFtZXMiOlsiZDMiLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJldmVudCIsImQzZXZlbnQiLCJzY2FsZU9yZGluYWwiLCJzY2FsZUxpbmVhciIsInNjaGVtZUNhdGVnb3J5MTAiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2VMaW5rIiwiZm9yY2VDZW50ZXIiLCJleHRlbnQiLCJkcmFnIiwiZDNGb3JjZU5vZGVMaW5rIiwiY29uc3RydWN0b3IiLCJvcHRzIiwiZGVmYXVsdHMiLCJlbGVtZW50IiwiZGF0YSIsIndpZHRoIiwiY29sb3IiLCJmb3JjZVN0cmVuZ3RoIiwic2l6ZUZpZWxkIiwiY29sb3JGaWVsZCIsIk9iamVjdCIsImFzc2lnbiIsIl9kYXRhIiwidXBkYXRlRGF0YSIsImhlaWdodCIsIm1hbnlCb2R5Iiwic3RyZW5ndGgiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImRyYXciLCJnZXRMaW5rSWQiLCJsaW5rIiwiZGlyZWN0ZWQiLCJzb3VyY2UiLCJ0b1N0cmluZyIsInRhcmdldCIsIml0ZW1zIiwic2VwIiwic29ydCIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2VsZWN0aW9uIiwib2JqIiwiZ3JhcGgiLCJlYWNoIiwic2VsSXRlbSIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJkcmFnc3RhcnRlZCIsImQiLCJhY3RpdmUiLCJzaW11bGF0aW9uIiwiYWxwaGFUYXJnZXQiLCJyZXN0YXJ0IiwiZngiLCJ4IiwiZnkiLCJ5IiwiZHJhZ2dlZCIsImRyYWdlbmRlZCIsImVudGVyTm9kZXMiLCJub2RlIiwidCIsImRlZmF1bHRDb2xvciIsInNpemVTY2FsZSIsImRvbWFpbiIsIm5vZGVzIiwiaGFzT3duUHJvcGVydHkiLCJub2RlRW50ZXIiLCJlbnRlciIsImNhbGwiLCJvbiIsIm1lcmdlIiwicmFkaXVzIiwibm9kZUNpcmNsZSIsInRyYW5zaXRpb24iLCJlbnRlckxpbmtzIiwibGlua0VudGVyIiwiTWF0aCIsInNxcnQiLCJ3ZWlnaHQiLCJzdHlsZSIsImZvckVhY2giLCJpZCIsImxpbmtzIiwiZm9yY2UiLCJ0aWNrZWQiLCJyYW5nZSIsImciLCJtYXgiLCJtaW4iLCJyZXNldF9sYXlvdXQiLCJjbGFzc2VkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFB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Q0FBaEI7QUFBb0IsU0FML0M7QUFNRTs7QUFFRixlQUFTa0MsWUFBVCxHQUF3QjtBQUN2QjlCLFlBQUksQ0FBQytCLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLEtBQXRCO0FBQ0EvQixZQUFJLENBQUNuRSxTQUFMLENBQWUsTUFBZixFQUF1QnVGLEtBQXZCLENBQTZCLFNBQTdCLEVBQXdDLE1BQXhDLEVBRnVCLENBR3ZCO0FBQ0E7O0FBQ0FwRCxZQUFJLENBQUNvRCxLQUFMLENBQVcsU0FBWCxFQUFzQixDQUF0QjtBQUNBOztBQUNEcEMsU0FBRyxDQUFDMEIsRUFBSixDQUFPLE9BQVAsRUFBZ0JvQixZQUFoQjtBQUtBLEtBclBEO0FBc1BELFdBQU8sSUFBUDtBQUNDOztBQXpUb0I7O0FBNlRQckYsOEVBQWYsRTs7Ozs7Ozs7Ozs7QUMzVkEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsMEQiLCJmaWxlIjoiZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImQzLWFycmF5XCIpLCByZXF1aXJlKFwiZDMtZHJhZ1wiKSwgcmVxdWlyZShcImQzLWZvcmNlXCIpLCByZXF1aXJlKFwiZDMtc2NhbGVcIiksIHJlcXVpcmUoXCJkMy1zY2FsZS1jaHJvbWF0aWNcIiksIHJlcXVpcmUoXCJkMy1zZWxlY3Rpb25cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkM19mb3JjZV9ub2RlbGlua19iYXNlXCIsIFtcImQzLWFycmF5XCIsIFwiZDMtZHJhZ1wiLCBcImQzLWZvcmNlXCIsIFwiZDMtc2NhbGVcIiwgXCJkMy1zY2FsZS1jaHJvbWF0aWNcIiwgXCJkMy1zZWxlY3Rpb25cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImQzLWFycmF5XCIpLCByZXF1aXJlKFwiZDMtZHJhZ1wiKSwgcmVxdWlyZShcImQzLWZvcmNlXCIpLCByZXF1aXJlKFwiZDMtc2NhbGVcIiksIHJlcXVpcmUoXCJkMy1zY2FsZS1jaHJvbWF0aWNcIiksIHJlcXVpcmUoXCJkMy1zZWxlY3Rpb25cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImQzX2ZvcmNlX25vZGVsaW5rX2Jhc2VcIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSwgcm9vdFtcImQzXCJdLCByb290W1wiZDNcIl0sIHJvb3RbXCJkM1wiXSwgcm9vdFtcImQzXCJdLCByb290W1wiZDNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfYXJyYXlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19kcmFnX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfZm9yY2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19zY2FsZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX3NjYWxlX2Nocm9tYXRpY19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX3NlbGVjdGlvbl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZDNGb3JjZU5vZGVMaW5rIGZyb20gJy4vdmlzLmpzJztcbmV4cG9ydCB7IGQzRm9yY2VOb2RlTGluayB9O1xuXG4iLCIvLyBkM0ZvcmNlTm9kZUxpbmtcblxuLy8gaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuLy8gaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuLy8gY29uc3QgJCA9IGpRdWVyeTtcblxuaW1wb3J0IHtzZWxlY3QsIHNlbGVjdEFsbCwgZXZlbnQgYXMgZDNldmVudH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7c2NhbGVPcmRpbmFsLCBzY2FsZUxpbmVhcn0gZnJvbSAnZDMtc2NhbGUnO1xuaW1wb3J0IHtzY2hlbWVDYXRlZ29yeTEwfSBmcm9tICdkMy1zY2FsZS1jaHJvbWF0aWMnO1xuaW1wb3J0IHtmb3JjZU1hbnlCb2R5LCBmb3JjZVNpbXVsYXRpb24sIGZvcmNlTGluaywgZm9yY2VDZW50ZXJ9IGZyb20gJ2QzLWZvcmNlJztcbmltcG9ydCB7ZXh0ZW50fSBmcm9tICdkMy1hcnJheSc7XG5pbXBvcnQge2RyYWd9IGZyb20gJ2QzLWRyYWcnO1xuXG5jb25zdCBkMyA9IHtcblx0c2VsZWN0LCBcblx0c2VsZWN0QWxsLCBcblx0Z2V0IGV2ZW50KCkge3JldHVybiBkM2V2ZW50O30sIFxuXHRzY2FsZU9yZGluYWwsIFxuXHRzY2FsZUxpbmVhciwgXG5cdHNjaGVtZUNhdGVnb3J5MTAsIFxuXHRmb3JjZU1hbnlCb2R5LCBcblx0Zm9yY2VTaW11bGF0aW9uLCBcblx0Zm9yY2VMaW5rLCBcblx0Zm9yY2VDZW50ZXIsIFxuXHRleHRlbnQsIFxuXHRkcmFnXG59XG4vLyBkMy5ldmVudCBpcyBhIGxpdmUgYmluZGluZywgc28gbmVlZCB0byB1c2UgZ2V0dGVyXG5cblxuY2xhc3MgZDNGb3JjZU5vZGVMaW5rIHtcblx0Y29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0XHRlbGVtZW50OiBudWxsLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHRjb2xvcjogZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApLFxuXHRcdFx0Zm9yY2VTdHJlbmd0aDogLTIsXG5cdFx0XHRzaXplRmllbGQ6ICdmbG93JywgIC8vIGZpZWxkIHdpdGggY29udGludW91cyB2YXJpYWJsZSB0byB1c2UgZm9yIHNpemVcblx0XHRcdGNvbG9yRmllbGQ6ICdjbF90b3AnLCAgLy8gY2F0ZWdvcmljYWwgZmllbGQgdG8gdXNlIGZvciBjb2xvcnNcblx0XHR9O1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdHMpOyAgLy8gb3B0cyB3aWxsIG92ZXJ3cml0ZSBkZWZhdWx0c1xuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGE7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy51cGRhdGVEYXRhO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuaGVpZ2h0ID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IC42MjUgKiB0aGlzLndpZHRoO1xuXHRcdH1cblx0XHR0aGlzLm1hbnlCb2R5ID0gZDMuZm9yY2VNYW55Qm9keSgpXG5cdFx0XHRcdFx0XHRcdC5zdHJlbmd0aCh0aGlzLmZvcmNlU3RyZW5ndGgpO1xuXHRcdHRoaXMuaW5pdCA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuX2RhdGEpO1xuXHRcdGlmICh0aGlzLmVsZW1lbnQgIT09IG51bGwgJiYgdGhpcy5fZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWxlbWVudCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGdldExpbmtJZChsaW5rLCBkaXJlY3RlZCA9IGZhbHNlKSB7XG5cdFx0Ly8gbGluayBJRCB3aWxsIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBzb3VyY2UgSUQgYW5kIHRhcmdldCBJRCwgc2VwYXJhdGVkIGJ5IFwiLSYtXCJcblx0XHQvLyBJZiB0aGUgZ3JhcGggaXMgdW5kaXJlY3RlZCwgdGhlIElEcyB3aWxsIGJlIHNvcnRlZCBBTFBIQUJFVElDQUxMWSB1c2luZyB0aGUgc3RyaW5nIHZhbHVlcyBvZiB0aGUgSURcblx0XHR2YXIgc291cmNlID0gbGluay5zb3VyY2UudG9TdHJpbmcoKTtcblx0XHR2YXIgdGFyZ2V0ID0gbGluay50YXJnZXQudG9TdHJpbmcoKTtcblx0XHR2YXIgaXRlbXMgPSBbc291cmNlLCB0YXJnZXRdO1xuXHRcdHZhciBzZXAgPSBcIi0mLVwiO1xuXHRcdGlmIChkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0aXRlbXMuc29ydCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gaXRlbXNbMF0gKyBzZXAgKyBpdGVtc1sxXTtcblx0fVxuXG5cdHVwZGF0ZURhdGEodmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9kYXRhO1xuXHRcdHRoaXMuX2RhdGEgPSB2YWx1ZTtcblx0XHRpZiAodGhpcy5pbml0ID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWxlbWVudCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aGlzLnVwZGF0ZURhdGEoKTtcblx0XHRcdC8vIE5PVCBJTVBMRU1FTlRFRFxuXHRcdFx0Y29uc29sZS5sb2coXCJVUERBVElORyBEQVRBIE5PVCBZRVQgSU1QTEVNRU5URURcIik7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1cGRhdGVEYXRhKTtcblx0XHQvLyBpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRkcmF3KHNlbGVjdGlvbikge1xuXHRcdHZhciBvYmogPSB0aGlzO1xuXHRcdHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG5cdFx0dmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXHRcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdFx0dmFyIG1hbnlCb2R5ID0gdGhpcy5tYW55Qm9keTtcblx0XHR2YXIgY29sb3IgPSB0aGlzLmNvbG9yO1xuXHRcdHZhciBnZXRMaW5rSWQgPSB0aGlzLmdldExpbmtJZDtcblx0XHR2YXIgc2l6ZUZpZWxkID0gdGhpcy5zaXplRmllbGQ7XG5cdFx0dmFyIGNvbG9yRmllbGQgPSB0aGlzLmNvbG9yRmllbGQ7XG5cdFx0c2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsSXRlbSA9IHRoaXM7XG5cblx0XHRcdHZhciBzdmcgPSBkMy5zZWxlY3Qoc2VsSXRlbSkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXHRcdFx0Y29uc29sZS5sb2coZ3JhcGgpO1xuXG5cdFx0XHRmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG5cdFx0XHRcdGlmICghZDMuZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhkM2V2ZW50KTtcblx0XHRcdFx0Y29uc29sZS5sb2coZDMuZXZlbnQpO1xuXHRcdFx0XHRkLmZ4ID0gZC54O1xuXHRcdFx0XHRkLmZ5ID0gZC55O1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcblx0XHRcdFx0ZC5meCA9IGQzLmV2ZW50Lng7XG5cdFx0XHRcdGQuZnkgPSBkMy5ldmVudC55O1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuXHRcdFx0XHRpZiAoIWQzLmV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcblx0XHRcdFx0ZC5meCA9IG51bGw7XG5cdFx0XHRcdGQuZnkgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBlbnRlck5vZGVzKG5vZGUsIHQgPSBudWxsKSB7XG5cdFx0XHRcdC8vIHBhc3MgaW4gdGhlIHNlbGVjdGlvbiBmb3IgZW50ZXJpbmcgbm9kZXNcblxuXHRcdFx0XHR2YXIgZGVmYXVsdENvbG9yID0gY29sb3IoMCk7XG5cblx0XHRcdFx0c2l6ZVNjYWxlLmRvbWFpbihkMy5leHRlbnQoZ3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eShzaXplRmllbGQpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZFtzaXplRmllbGRdO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWzUsNV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblxuXG5cdFx0XHRcdHZhciBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQvLyAuYXR0cihcInJcIiwgNSlcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibm9kZVwiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHQvLyBcdHZhciB0eCA9ICh3aWR0aC8yKSArIGQueDtcblx0XHRcdFx0XHQvLyBcdHZhciB0eSA9IChoZWlnaHQvMikgKyBkLnk7XG5cdFx0XHRcdFx0Ly8gXHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0eCArIFwiLFwiICsgdHkgKyBcIilcIjtcblx0XHRcdFx0XHQvLyB9KVxuXHRcdFx0XHRcdC5jYWxsKGQzLmRyYWcoKVxuXHRcdFx0XHRcdFx0Lm9uKFwic3RhcnRcIiwgZHJhZ3N0YXJ0ZWQpXG5cdFx0XHRcdFx0XHQub24oXCJkcmFnXCIsIGRyYWdnZWQpXG5cdFx0XHRcdFx0XHQub24oXCJlbmRcIiwgZHJhZ2VuZGVkKSk7XG5cblxuXG5cdFx0XHRcdG5vZGUgPSBub2RlLm1lcmdlKG5vZGVFbnRlcilcblx0XHRcdFx0XHQuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueCA9ICh3aWR0aC8yKSArIGQueDsgfSlcblx0XHRcdFx0XHQuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueSA9IChoZWlnaHQvMikgKyBkLnk7IH0pXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0aWYgKGQuaGFzT3duUHJvcGVydHkoc2l6ZUZpZWxkKSkge1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IHNpemVTY2FsZShkW3NpemVGaWVsZF0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZC5yYWRpdXMgPSA1O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eShjb2xvckZpZWxkKSkge1xuXHRcdFx0XHRcdFx0XHRkLmNvbG9yID0gY29sb3IoZFtjb2xvckZpZWxkXSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkLmNvbG9yID0gZGVmYXVsdENvbG9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHZhciBub2RlQ2lyY2xlID0gbm9kZUVudGVyXG5cdFx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KVxuXHRcdFx0XHRcdC5hcHBlbmQoXCJjaXJjbGVcIilcblx0XHRcdFx0XHQvLyAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54OyB9KVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3I7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJyXCIsIDApO1xuXG5cdFx0XHRcdGlmICh0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gbm9kZUVudGVyLmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0ZC54ID0gd2lkdGgvMjtcblx0XHRcdFx0XHQvLyBcdGQueSA9IGhlaWdodC8yO1xuXHRcdFx0XHRcdC8vIH0pO1xuXHRcdFx0XHRcdG5vZGVcblx0XHRcdFx0XHRcdC5zZWxlY3RBbGwoXCJjaXJjbGVcIikudHJhbnNpdGlvbih0KVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnID0gY29sb3IoZC5jbF90b3ApOyB9KTtcblx0XHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLmNvbG9yO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRub2RlLnNlbGVjdEFsbChcImNpcmNsZVwiKVxuXHRcdFx0XHRcdFx0LmF0dHIoXCJyXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQucmFkaXVzO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnID0gY29sb3IoZC5jbF90b3ApOyB9KTtcblx0XHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLmNvbG9yO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZW50ZXJMaW5rcyhsaW5rLCB0ID0gbnVsbCkge1xuXHRcdFx0XHQvLyBwYXNzIGluIHRoZSBzZWxlY3Rpb24gZm9yIGVudGVyaW5nIGxpbmtzXG5cdFx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdFx0dmFyIGxpbmtFbnRlciA9IGxpbmsuZW50ZXIoKS5hcHBlbmQoXCJsaW5lXCIpXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcblx0XHRcdFx0XHQuYXR0cihcIngyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lng7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rXCIpO1xuXHRcdFx0XHRsaW5rID0gbGluay5tZXJnZShsaW5rRW50ZXIpO1xuXHRcdFx0XHRsaW5rXG5cdFx0XHRcdCAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gTWF0aC5zcXJ0KGQud2VpZ2h0KTsgfSk7XG5cblx0XHRcdFx0aWYgKHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHRsaW5rRW50ZXJcblx0XHRcdFx0XHRcdC8vIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblx0XHRcdFx0XHRcdC5zdHlsZShcInN0cm9rZVwiLCBcImdyZWVuXCIpXG5cdFx0XHRcdFx0Ly8gbGlua0VudGVyLnRyYW5zaXRpb24odClcblx0XHRcdFx0XHQvLyBcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly9cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBsaW5rO1xuXHRcdFx0fVxuXG5cblx0XHRcdGdyYXBoLm5vZGVzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRkLmlkID0gZC5pZC50b1N0cmluZygpO1xuXHRcdFx0fSk7XG5cdFx0XHRncmFwaC5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5zb3VyY2UgPSBkLnNvdXJjZS50b1N0cmluZygpO1xuXHRcdFx0XHRkLnRhcmdldCA9IGQudGFyZ2V0LnRvU3RyaW5nKCk7XG5cdFx0XHRcdGQuaWQgPSBnZXRMaW5rSWQoZCwgZ3JhcGguZGlyZWN0ZWQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZhciBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKClcblx0XHRcdFx0LmZvcmNlKFwibGlua1wiLCBkMy5mb3JjZUxpbmsoKS5pZChmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KSlcblx0XHRcdFx0Ly8gLmZvcmNlKFwibGlua1wiLCBkMy5mb3JjZUxpbmsoKSlcblx0XHRcdFx0LmZvcmNlKFwiY2hhcmdlXCIsIG1hbnlCb2R5KVxuXHRcdFx0XHQuZm9yY2UoXCJjZW50ZXJcIiwgZDMuZm9yY2VDZW50ZXIod2lkdGggLyAyLCBoZWlnaHQgLyAyKSk7XG5cblx0XHQgIHNpbXVsYXRpb25cblx0XHRcdCAgLm5vZGVzKGdyYXBoLm5vZGVzKVxuXHRcdFx0ICAub24oXCJ0aWNrXCIsIHRpY2tlZCk7XG5cblx0XHQgIHNpbXVsYXRpb24uZm9yY2UoXCJsaW5rXCIpXG5cdFx0XHQgIC5saW5rcyhncmFwaC5saW5rcyk7XG5cblx0XHQgIG9iai5zaW11bGF0aW9uID0gc2ltdWxhdGlvbjtcblxuXHRcdFx0dmFyIHNpemVTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcblx0XHRcdFx0LnJhbmdlKFs0LCAxMl0pO1xuXG5cblx0XHRcdHZhciBnID0gc3ZnLmFwcGVuZChcImdcIik7XG5cblx0XHQgIHZhciBsaW5rID0gZy5hcHBlbmQoXCJnXCIpXG5cdFx0XHQgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5rc1wiKVxuXHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubGlua1wiKTtcblxuXHRcdFx0bGluayA9IGxpbmsuZGF0YShncmFwaC5saW5rcywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRyZXR1cm4gZC5pZDtcblx0XHRcdH0pO1xuXG5cdFx0ICB2YXIgbm9kZSA9IGcuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0ICAuYXR0cihcImNsYXNzXCIsIFwibm9kZXNcIilcblx0XHRcdC5zZWxlY3RBbGwoXCIubm9kZVwiKTtcblxuXHRcdFx0bm9kZSA9IG5vZGUuZGF0YShncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSk7XG5cblx0XHRcdG5vZGUgPSBlbnRlck5vZGVzKG5vZGUpO1xuXHRcdFx0bGluayA9IGVudGVyTGlua3MobGluayk7XG5cblxuXHRcdFx0Ly8gbm9kZUNpcmNsZS5vbignY2xpY2snLCBmdW5jdGlvbihkKSB7XG5cdFx0XHQvLyBcdG5vZGUuY2xhc3NlZCgnZm9jdXMnLCBmYWxzZSk7XG5cdFx0XHQvLyBcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0Ly8gXHRub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIFwiYmxhY2tcIilcblx0XHRcdC8vIFx0XHQuc3R5bGUoXCJvcGFjaXR5XCIsIC4xKTtcblx0XHRcdC8vIFx0bGluay5zdHlsZShcIm9wYWNpdHlcIiwgLjEpO1xuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50X2lkcyA9IGdyYXBoLmdyYXBoLmNvbm5lY3RlZF9jb21wb25lbnRzW2QuY29tcG9uZW50XTtcblx0XHRcdC8vIFx0dmFyIGNvbXBvbmVudCA9IG5vZGUuZmlsdGVyKGZ1bmN0aW9uKGQpIHtyZXR1cm4gY29tcG9uZW50X2lkcy5pbmNsdWRlcyhkLmlkKTsgfSk7XG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnRMaW5rID0gbGluay5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBjb21wb25lbnRfaWRzLmluY2x1ZGVzKGQuc291cmNlLmlkKTt9KVxuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50Q29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5jbGFzc2VkKFwiZm9jdXNcIiwgdHJ1ZSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJjaXJjbGVcIikuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY29tcG9uZW50Q29sb3IoZC5jbF9ib3R0b20pOyB9KVxuXHRcdFx0Ly8gXHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHQvLyBcdGNvbXBvbmVudC5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIlwiKTsgIC8vIHNob3cgdGhlc2UgbGFiZWxzXG5cdFx0XHQvLyBcdGNvbXBvbmVudExpbmsuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0Ly8gXHRcblx0XHRcdC8vIFx0JCggJyNub2RlbGFiLWZvcm0nICkuY3NzKCAndmlzaWJpbGl0eScgLCAndmlzaWJsZScgKTtcblx0XHRcdC8vIFx0YXBwbHlSYWRpb1NlbGVjdGlvbigpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0ZDMuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gfSk7XG5cblxuXG5cdFx0ICBmdW5jdGlvbiB0aWNrZWQoKSB7XG5cdFx0XHQvLyBub2RlXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pXG5cdFx0XHQvLyAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnk7IH0pO1xuXHRcdFx0Ly8gYWRkIGJvdW5kaW5nIGJveFxuXHRcdFx0Ly8gICBodHRwczovL2JsLm9ja3Mub3JnL21ib3N0b2NrLzExMjk0OTJcblx0XHRcdG5vZGVcblx0XHRcdFx0LmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IFxuXHRcdFx0XHRcdGQueCA9IE1hdGgubWF4KGQucmFkaXVzLCBNYXRoLm1pbih3aWR0aCAtIGQucmFkaXVzLCBkLngpKTtcblx0XHRcdFx0XHRyZXR1cm4gZC54OyB9KVxuXHRcdFx0XHQuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0ZC55ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHdpZHRoIC0gZC5yYWRpdXMsIGQueSkpO1xuXHRcdFx0XHRcdHJldHVybiBkLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSk7XG5cblx0XHRcdGxpbmtcblx0XHRcdFx0Ly8gLnNlbGVjdEFsbChcImxpbmVcIilcblx0XHRcdFx0LmF0dHIoXCJ4MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS54OyB9KVxuXHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG5cdFx0XHRcdC5hdHRyKFwieDJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcblx0XHRcdFx0LmF0dHIoXCJ5MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC55OyB9KTtcblx0XHQgIH1cblxuXHRcdFx0ZnVuY3Rpb24gcmVzZXRfbGF5b3V0KCkge1xuXHRcdFx0XHRub2RlLmNsYXNzZWQoXCJmb2N1c1wiLCBmYWxzZSk7XG5cdFx0XHRcdG5vZGUuc2VsZWN0QWxsKFwidGV4dFwiKS5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuXHRcdFx0XHQvLyBub2RlQ2lyY2xlLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3Jfb3JpZzsgfSlcblx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHRsaW5rLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdH1cblx0XHRcdHN2Zy5vbihcImNsaWNrXCIsIHJlc2V0X2xheW91dCk7XG5cblxuXG5cblx0XHR9KTtcblx0cmV0dXJuIHRoaXM7XG5cdH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkM0ZvcmNlTm9kZUxpbms7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfYXJyYXlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfZHJhZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19mb3JjZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19zY2FsZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19zY2FsZV9jaHJvbWF0aWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfc2VsZWN0aW9uX187Il0sInNvdXJjZVJvb3QiOiIifQ==