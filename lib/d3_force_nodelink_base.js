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
// import {select, selectAll, event as d3event} from 'd3-selection';






const d3 = {
  select: d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"],
  selectAll: d3_selection__WEBPACK_IMPORTED_MODULE_0__["selectAll"],
  scaleOrdinal: d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"],
  scaleLinear: d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"],
  schemeCategory10: d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__["schemeCategory10"],
  forceManyBody: d3_force__WEBPACK_IMPORTED_MODULE_3__["forceManyBody"],
  forceSimulation: d3_force__WEBPACK_IMPORTED_MODULE_3__["forceSimulation"],
  forceLink: d3_force__WEBPACK_IMPORTED_MODULE_3__["forceLink"],
  forceCenter: d3_force__WEBPACK_IMPORTED_MODULE_3__["forceCenter"],
  extent: d3_array__WEBPACK_IMPORTED_MODULE_4__["extent"],
  drag: d3_drag__WEBPACK_IMPORTED_MODULE_5__["drag"] // can't figure out how to use d3.event, so replace it with d3event instead

};

class d3ForceNodeLink {
  constructor(opts = {}) {
    const defaults = {
      el: null,
      data: null,
      width: 960,
      color: d3.scaleOrdinal(d3.schemeCategory10),
      forceStrength: -2
    };
    Object.assign(this, defaults, opts); // opts will overwrite defaults

    this._data = this.data;
    this.data = this.updateData;

    if (typeof this.height === 'undefined') {
      this.height = .625 * this.width;
    }

    this.manyBody = d3.forceManyBody().strength(this.forceStrength);
    this.init = false;
    console.log(this._data);

    if (this.el !== null && this._data !== null) {
      this.draw(this.el);
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
      this.draw(this.el);
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
    selection.each(function () {
      var selItem = this;
      var svg = d3.select(selItem).append("svg").attr("width", width).attr("height", height);
      console.log(graph);

      function dragstarted(d) {
        if (!d3event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3event.x;
        d.fy = d3event.y;
      }

      function dragended(d) {
        if (!d3event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      function enterNodes(node, t = null) {
        // pass in the selection for entering nodes
        var defaultColor = color(0);
        sizeScale.domain(d3.extent(graph.nodes, function (d) {
          if (d.hasOwnProperty('flow')) {
            return d.flow;
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
          if (d.hasOwnProperty('flow')) {
            d.radius = sizeScale(d.flow);
          } else {
            d.radius = 5;
          }

          if (d.hasOwnProperty("cl_top")) {
            d.color = color(d.cl_top);
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
      console.log('ddd');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2QzX2ZvcmNlX25vZGVsaW5rX2Jhc2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS8uL3NyYy92aXMuanMiLCJ3ZWJwYWNrOi8vZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZDMtYXJyYXlcIixcImNvbW1vbmpzMlwiOlwiZDMtYXJyYXlcIixcImFtZFwiOlwiZDMtYXJyYXlcIixcInJvb3RcIjpcImQzXCJ9Iiwid2VicGFjazovL2QzX2ZvcmNlX25vZGVsaW5rX2Jhc2UvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImQzLWRyYWdcIixcImNvbW1vbmpzMlwiOlwiZDMtZHJhZ1wiLFwiYW1kXCI6XCJkMy1kcmFnXCIsXCJyb290XCI6XCJkM1wifSIsIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJkMy1mb3JjZVwiLFwiY29tbW9uanMyXCI6XCJkMy1mb3JjZVwiLFwiYW1kXCI6XCJkMy1mb3JjZVwiLFwicm9vdFwiOlwiZDNcIn0iLCJ3ZWJwYWNrOi8vZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZDMtc2NhbGVcIixcImNvbW1vbmpzMlwiOlwiZDMtc2NhbGVcIixcImFtZFwiOlwiZDMtc2NhbGVcIixcInJvb3RcIjpcImQzXCJ9Iiwid2VicGFjazovL2QzX2ZvcmNlX25vZGVsaW5rX2Jhc2UvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImQzLXNjYWxlLWNocm9tYXRpY1wiLFwiY29tbW9uanMyXCI6XCJkMy1zY2FsZS1jaHJvbWF0aWNcIixcImFtZFwiOlwiZDMtc2NhbGUtY2hyb21hdGljXCIsXCJyb290XCI6XCJkM1wifSIsIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJkMy1zZWxlY3Rpb25cIixcImNvbW1vbmpzMlwiOlwiZDMtc2VsZWN0aW9uXCIsXCJhbWRcIjpcImQzLXNlbGVjdGlvblwiLFwicm9vdFwiOlwiZDNcIn0iXSwibmFtZXMiOlsiZDMiLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJzY2FsZU9yZGluYWwiLCJzY2FsZUxpbmVhciIsInNjaGVtZUNhdGVnb3J5MTAiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2VMaW5rIiwiZm9yY2VDZW50ZXIiLCJleHRlbnQiLCJkcmFnIiwiZDNGb3JjZU5vZGVMaW5rIiwiY29uc3RydWN0b3IiLCJvcHRzIiwiZGVmYXVsdHMiLCJlbCIsImRhdGEiLCJ3aWR0aCIsImNvbG9yIiwiZm9yY2VTdHJlbmd0aCIsIk9iamVjdCIsImFzc2lnbiIsIl9kYXRhIiwidXBkYXRlRGF0YSIsImhlaWdodCIsIm1hbnlCb2R5Iiwic3RyZW5ndGgiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImRyYXciLCJnZXRMaW5rSWQiLCJsaW5rIiwiZGlyZWN0ZWQiLCJzb3VyY2UiLCJ0b1N0cmluZyIsInRhcmdldCIsIml0ZW1zIiwic2VwIiwic29ydCIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2VsZWN0aW9uIiwib2JqIiwiZ3JhcGgiLCJlYWNoIiwic2VsSXRlbSIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJkcmFnc3RhcnRlZCIsImQiLCJkM2V2ZW50IiwiYWN0aXZlIiwic2ltdWxhdGlvbiIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsImZ4IiwieCIsImZ5IiwieSIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbnRlck5vZGVzIiwibm9kZSIsInQiLCJkZWZhdWx0Q29sb3IiLCJzaXplU2NhbGUiLCJkb21haW4iLCJub2RlcyIsImhhc093blByb3BlcnR5IiwiZmxvdyIsIm5vZGVFbnRlciIsImVudGVyIiwiY2FsbCIsIm9uIiwibWVyZ2UiLCJyYWRpdXMiLCJjbF90b3AiLCJub2RlQ2lyY2xlIiwidHJhbnNpdGlvbiIsImVudGVyTGlua3MiLCJsaW5rRW50ZXIiLCJNYXRoIiwic3FydCIsIndlaWdodCIsInN0eWxlIiwiZm9yRWFjaCIsImlkIiwibGlua3MiLCJmb3JjZSIsInRpY2tlZCIsInJhbmdlIiwiZyIsIm1heCIsIm1pbiIsInJlc2V0X2xheW91dCIsImNsYXNzZWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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OEVBQWYsRTs7Ozs7Ozs7Ozs7QUMxVUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsMEQiLCJmaWxlIjoiZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImQzLWFycmF5XCIpLCByZXF1aXJlKFwiZDMtZHJhZ1wiKSwgcmVxdWlyZShcImQzLWZvcmNlXCIpLCByZXF1aXJlKFwiZDMtc2NhbGVcIiksIHJlcXVpcmUoXCJkMy1zY2FsZS1jaHJvbWF0aWNcIiksIHJlcXVpcmUoXCJkMy1zZWxlY3Rpb25cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkM19mb3JjZV9ub2RlbGlua19iYXNlXCIsIFtcImQzLWFycmF5XCIsIFwiZDMtZHJhZ1wiLCBcImQzLWZvcmNlXCIsIFwiZDMtc2NhbGVcIiwgXCJkMy1zY2FsZS1jaHJvbWF0aWNcIiwgXCJkMy1zZWxlY3Rpb25cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImQzLWFycmF5XCIpLCByZXF1aXJlKFwiZDMtZHJhZ1wiKSwgcmVxdWlyZShcImQzLWZvcmNlXCIpLCByZXF1aXJlKFwiZDMtc2NhbGVcIiksIHJlcXVpcmUoXCJkMy1zY2FsZS1jaHJvbWF0aWNcIiksIHJlcXVpcmUoXCJkMy1zZWxlY3Rpb25cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImQzX2ZvcmNlX25vZGVsaW5rX2Jhc2VcIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSwgcm9vdFtcImQzXCJdLCByb290W1wiZDNcIl0sIHJvb3RbXCJkM1wiXSwgcm9vdFtcImQzXCJdLCByb290W1wiZDNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfYXJyYXlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19kcmFnX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfZm9yY2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19zY2FsZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX3NjYWxlX2Nocm9tYXRpY19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX3NlbGVjdGlvbl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZDNGb3JjZU5vZGVMaW5rIGZyb20gJy4vdmlzLmpzJztcbmV4cG9ydCB7IGQzRm9yY2VOb2RlTGluayB9O1xuXG4iLCIvLyBkM0ZvcmNlTm9kZUxpbmtcblxuLy8gaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuLy8gaW1wb3J0IGpRdWVyeSBmcm9tICdqcXVlcnknO1xuLy8gY29uc3QgJCA9IGpRdWVyeTtcblxuLy8gaW1wb3J0IHtzZWxlY3QsIHNlbGVjdEFsbCwgZXZlbnQgYXMgZDNldmVudH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7c2VsZWN0LCBzZWxlY3RBbGx9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQge3NjYWxlT3JkaW5hbCwgc2NhbGVMaW5lYXJ9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7c2NoZW1lQ2F0ZWdvcnkxMH0gZnJvbSAnZDMtc2NhbGUtY2hyb21hdGljJztcbmltcG9ydCB7Zm9yY2VNYW55Qm9keSwgZm9yY2VTaW11bGF0aW9uLCBmb3JjZUxpbmssIGZvcmNlQ2VudGVyfSBmcm9tICdkMy1mb3JjZSc7XG5pbXBvcnQge2V4dGVudH0gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IHtkcmFnfSBmcm9tICdkMy1kcmFnJztcblxuY29uc3QgZDMgPSB7c2VsZWN0LCBzZWxlY3RBbGwsIHNjYWxlT3JkaW5hbCwgc2NhbGVMaW5lYXIsIHNjaGVtZUNhdGVnb3J5MTAsIGZvcmNlTWFueUJvZHksIGZvcmNlU2ltdWxhdGlvbiwgZm9yY2VMaW5rLCBmb3JjZUNlbnRlciwgZXh0ZW50LCBkcmFnfVxuLy8gY2FuJ3QgZmlndXJlIG91dCBob3cgdG8gdXNlIGQzLmV2ZW50LCBzbyByZXBsYWNlIGl0IHdpdGggZDNldmVudCBpbnN0ZWFkXG5cblxuY2xhc3MgZDNGb3JjZU5vZGVMaW5rIHtcblx0Y29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0XHRlbDogbnVsbCxcblx0XHRcdGRhdGE6IG51bGwsXG5cdFx0XHR3aWR0aDogOTYwLFxuXHRcdFx0Y29sb3I6IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKSxcblx0XHRcdGZvcmNlU3RyZW5ndGg6IC0yLFxuXHRcdH07XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0cyk7ICAvLyBvcHRzIHdpbGwgb3ZlcndyaXRlIGRlZmF1bHRzXG5cdFx0dGhpcy5fZGF0YSA9IHRoaXMuZGF0YTtcblx0XHR0aGlzLmRhdGEgPSB0aGlzLnVwZGF0ZURhdGE7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gLjYyNSAqIHRoaXMud2lkdGg7XG5cdFx0fVxuXHRcdHRoaXMubWFueUJvZHkgPSBkMy5mb3JjZU1hbnlCb2R5KClcblx0XHRcdFx0XHRcdFx0LnN0cmVuZ3RoKHRoaXMuZm9yY2VTdHJlbmd0aCk7XG5cdFx0dGhpcy5pbml0ID0gZmFsc2U7XG5cdFx0Y29uc29sZS5sb2codGhpcy5fZGF0YSk7XG5cdFx0aWYgKHRoaXMuZWwgIT09IG51bGwgJiYgdGhpcy5fZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWwpO1xuXHRcdFx0dGhpcy5pbml0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRnZXRMaW5rSWQobGluaywgZGlyZWN0ZWQgPSBmYWxzZSkge1xuXHRcdC8vIGxpbmsgSUQgd2lsbCBiZSB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGUgc291cmNlIElEIGFuZCB0YXJnZXQgSUQsIHNlcGFyYXRlZCBieSBcIi0mLVwiXG5cdFx0Ly8gSWYgdGhlIGdyYXBoIGlzIHVuZGlyZWN0ZWQsIHRoZSBJRHMgd2lsbCBiZSBzb3J0ZWQgQUxQSEFCRVRJQ0FMTFkgdXNpbmcgdGhlIHN0cmluZyB2YWx1ZXMgb2YgdGhlIElEXG5cdFx0dmFyIHNvdXJjZSA9IGxpbmsuc291cmNlLnRvU3RyaW5nKCk7XG5cdFx0dmFyIHRhcmdldCA9IGxpbmsudGFyZ2V0LnRvU3RyaW5nKCk7XG5cdFx0dmFyIGl0ZW1zID0gW3NvdXJjZSwgdGFyZ2V0XTtcblx0XHR2YXIgc2VwID0gXCItJi1cIjtcblx0XHRpZiAoZGlyZWN0ZWQgPT09IHRydWUpIHtcblx0XHRcdGl0ZW1zLnNvcnQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGl0ZW1zWzBdICsgc2VwICsgaXRlbXNbMV07XG5cdH1cblxuXHR1cGRhdGVEYXRhKHZhbHVlKSB7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fZGF0YTtcblx0XHR0aGlzLl9kYXRhID0gdmFsdWU7XG5cdFx0aWYgKHRoaXMuaW5pdCA9PT0gZmFsc2UpIHtcblx0XHRcdHRoaXMuZHJhdyh0aGlzLmVsKTtcblx0XHRcdHRoaXMuaW5pdCA9IHRydWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoaXMudXBkYXRlRGF0YSgpO1xuXHRcdFx0Ly8gTk9UIElNUExFTUVOVEVEXG5cdFx0XHRjb25zb2xlLmxvZyhcIlVQREFUSU5HIERBVEEgTk9UIFlFVCBJTVBMRU1FTlRFRFwiKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2codHlwZW9mIHVwZGF0ZURhdGEpO1xuXHRcdC8vIGlmICh0eXBlb2YgdXBkYXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJykgdXBkYXRlRGF0YSgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGRyYXcoc2VsZWN0aW9uKSB7XG5cdFx0dmFyIG9iaiA9IHRoaXM7XG5cdFx0dmFyIHdpZHRoID0gdGhpcy53aWR0aDtcblx0XHR2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cdFx0dmFyIGdyYXBoID0gdGhpcy5fZGF0YTtcblx0XHR2YXIgbWFueUJvZHkgPSB0aGlzLm1hbnlCb2R5O1xuXHRcdHZhciBjb2xvciA9IHRoaXMuY29sb3I7XG5cdFx0dmFyIGdldExpbmtJZCA9IHRoaXMuZ2V0TGlua0lkO1xuXHRcdHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNlbEl0ZW0gPSB0aGlzO1xuXG5cdFx0XHR2YXIgc3ZnID0gZDMuc2VsZWN0KHNlbEl0ZW0pLmFwcGVuZChcInN2Z1wiKS5hdHRyKFwid2lkdGhcIiwgd2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcblx0XHRcdGNvbnNvbGUubG9nKGdyYXBoKTtcblxuXHRcdFx0ZnVuY3Rpb24gZHJhZ3N0YXJ0ZWQoZCkge1xuXHRcdFx0XHRpZiAoIWQzZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuXHRcdFx0XHRkLmZ4ID0gZC54O1xuXHRcdFx0XHRkLmZ5ID0gZC55O1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBkcmFnZ2VkKGQpIHtcblx0XHRcdFx0ZC5meCA9IGQzZXZlbnQueDtcblx0XHRcdFx0ZC5meSA9IGQzZXZlbnQueTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gZHJhZ2VuZGVkKGQpIHtcblx0XHRcdFx0aWYgKCFkM2V2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcblx0XHRcdFx0ZC5meCA9IG51bGw7XG5cdFx0XHRcdGQuZnkgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBlbnRlck5vZGVzKG5vZGUsIHQgPSBudWxsKSB7XG5cdFx0XHRcdC8vIHBhc3MgaW4gdGhlIHNlbGVjdGlvbiBmb3IgZW50ZXJpbmcgbm9kZXNcblxuXHRcdFx0XHR2YXIgZGVmYXVsdENvbG9yID0gY29sb3IoMCk7XG5cblx0XHRcdFx0c2l6ZVNjYWxlLmRvbWFpbihkMy5leHRlbnQoZ3JhcGgubm9kZXMsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eSgnZmxvdycpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZC5mbG93O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWzUsNV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKTtcblxuXG5cdFx0XHRcdHZhciBub2RlRW50ZXIgPSBub2RlLmVudGVyKCkuYXBwZW5kKFwiZ1wiKVxuXHRcdFx0XHQvLyAuYXR0cihcInJcIiwgNSlcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibm9kZVwiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHQvLyBcdHZhciB0eCA9ICh3aWR0aC8yKSArIGQueDtcblx0XHRcdFx0XHQvLyBcdHZhciB0eSA9IChoZWlnaHQvMikgKyBkLnk7XG5cdFx0XHRcdFx0Ly8gXHRyZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyB0eCArIFwiLFwiICsgdHkgKyBcIilcIjtcblx0XHRcdFx0XHQvLyB9KVxuXHRcdFx0XHRcdC5jYWxsKGQzLmRyYWcoKVxuXHRcdFx0XHRcdFx0Lm9uKFwic3RhcnRcIiwgZHJhZ3N0YXJ0ZWQpXG5cdFx0XHRcdFx0XHQub24oXCJkcmFnXCIsIGRyYWdnZWQpXG5cdFx0XHRcdFx0XHQub24oXCJlbmRcIiwgZHJhZ2VuZGVkKSk7XG5cblxuXG5cdFx0XHRcdG5vZGUgPSBub2RlLm1lcmdlKG5vZGVFbnRlcilcblx0XHRcdFx0XHQuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueCA9ICh3aWR0aC8yKSArIGQueDsgfSlcblx0XHRcdFx0XHQuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueSA9IChoZWlnaHQvMikgKyBkLnk7IH0pXG5cdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0aWYgKGQuaGFzT3duUHJvcGVydHkoJ2Zsb3cnKSkge1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IHNpemVTY2FsZShkLmZsb3cpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZC5yYWRpdXMgPSA1O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eShcImNsX3RvcFwiKSkge1xuXHRcdFx0XHRcdFx0XHRkLmNvbG9yID0gY29sb3IoZC5jbF90b3ApO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0ZC5jb2xvciA9IGRlZmF1bHRDb2xvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR2YXIgbm9kZUNpcmNsZSA9IG5vZGVFbnRlclxuXHRcdFx0XHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgZC54ICsgXCIsXCIgKyBkLnkgKyBcIilcIjsgfSlcblx0XHRcdFx0XHQuYXBwZW5kKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSlcblx0XHRcdFx0XHQvLyAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmNvbG9yOyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiclwiLCAwKTtcblxuXHRcdFx0XHRpZiAodCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIG5vZGVFbnRlci5lYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHQvLyBcdGQueCA9IHdpZHRoLzI7XG5cdFx0XHRcdFx0Ly8gXHRkLnkgPSBoZWlnaHQvMjtcblx0XHRcdFx0XHQvLyB9KTtcblx0XHRcdFx0XHRub2RlXG5cdFx0XHRcdFx0XHQuc2VsZWN0QWxsKFwiY2lyY2xlXCIpLnRyYW5zaXRpb24odClcblx0XHRcdFx0XHRcdC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLnJhZGl1cztcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3Jfb3JpZyA9IGNvbG9yKGQuY2xfdG9wKTsgfSk7XG5cdFx0XHRcdFx0XHQuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZC5jb2xvcjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bm9kZS5zZWxlY3RBbGwoXCJjaXJjbGVcIilcblx0XHRcdFx0XHRcdC5hdHRyKFwiclwiLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBkLnJhZGl1cztcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuY29sb3Jfb3JpZyA9IGNvbG9yKGQuY2xfdG9wKTsgfSk7XG5cdFx0XHRcdFx0XHQuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZC5jb2xvcjtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVudGVyTGlua3MobGluaywgdCA9IG51bGwpIHtcblx0XHRcdFx0Ly8gcGFzcyBpbiB0aGUgc2VsZWN0aW9uIGZvciBlbnRlcmluZyBsaW5rc1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBsaW5rRW50ZXIgPSBsaW5rLmVudGVyKCkuYXBwZW5kKFwibGluZVwiKVxuXHRcdFx0XHRcdC5hdHRyKFwieDFcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueDsgfSlcblx0XHRcdFx0XHQuYXR0cihcInkxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLnk7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ4MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwieTJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueTsgfSlcblx0XHRcdFx0XHQuYXR0cihcImNsYXNzXCIsIFwibGlua1wiKTtcblx0XHRcdFx0bGluayA9IGxpbmsubWVyZ2UobGlua0VudGVyKTtcblx0XHRcdFx0bGlua1xuXHRcdFx0XHQgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIE1hdGguc3FydChkLndlaWdodCk7IH0pO1xuXG5cdFx0XHRcdGlmICh0ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0bGlua0VudGVyXG5cdFx0XHRcdFx0XHQvLyAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cdFx0XHRcdFx0XHQuc3R5bGUoXCJzdHJva2VcIiwgXCJncmVlblwiKVxuXHRcdFx0XHRcdC8vIGxpbmtFbnRlci50cmFuc2l0aW9uKHQpXG5cdFx0XHRcdFx0Ly8gXHQuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbGluaztcblx0XHRcdH1cblxuXG5cdFx0XHRncmFwaC5ub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0ZC5pZCA9IGQuaWQudG9TdHJpbmcoKTtcblx0XHRcdH0pO1xuXHRcdFx0Z3JhcGgubGlua3MuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGQuc291cmNlID0gZC5zb3VyY2UudG9TdHJpbmcoKTtcblx0XHRcdFx0ZC50YXJnZXQgPSBkLnRhcmdldC50b1N0cmluZygpO1xuXHRcdFx0XHRkLmlkID0gZ2V0TGlua0lkKGQsIGdyYXBoLmRpcmVjdGVkKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbigpXG5cdFx0XHRcdC5mb3JjZShcImxpbmtcIiwgZDMuZm9yY2VMaW5rKCkuaWQoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5pZDsgfSkpXG5cdFx0XHRcdC8vIC5mb3JjZShcImxpbmtcIiwgZDMuZm9yY2VMaW5rKCkpXG5cdFx0XHRcdC5mb3JjZShcImNoYXJnZVwiLCBtYW55Qm9keSlcblx0XHRcdFx0LmZvcmNlKFwiY2VudGVyXCIsIGQzLmZvcmNlQ2VudGVyKHdpZHRoIC8gMiwgaGVpZ2h0IC8gMikpO1xuXHRcdGNvbnNvbGUubG9nKCdkZGQnKTtcblxuXHRcdCAgc2ltdWxhdGlvblxuXHRcdFx0ICAubm9kZXMoZ3JhcGgubm9kZXMpXG5cdFx0XHQgIC5vbihcInRpY2tcIiwgdGlja2VkKTtcblxuXHRcdCAgc2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIilcblx0XHRcdCAgLmxpbmtzKGdyYXBoLmxpbmtzKTtcblxuXHRcdCAgb2JqLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuXG5cdFx0XHR2YXIgc2l6ZVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdFx0XHQucmFuZ2UoWzQsIDEyXSk7XG5cblxuXHRcdFx0dmFyIGcgPSBzdmcuYXBwZW5kKFwiZ1wiKTtcblxuXHRcdCAgdmFyIGxpbmsgPSBnLmFwcGVuZChcImdcIilcblx0XHRcdCAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmtzXCIpXG5cdFx0XHQvLyAuc2VsZWN0QWxsKFwibGluZVwiKVxuXHRcdFx0LnNlbGVjdEFsbChcIi5saW5rXCIpO1xuXG5cdFx0XHRsaW5rID0gbGluay5kYXRhKGdyYXBoLmxpbmtzLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdHJldHVybiBkLmlkO1xuXHRcdFx0fSk7XG5cblx0XHQgIHZhciBub2RlID0gZy5hcHBlbmQoXCJnXCIpXG5cdFx0XHQgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2Rlc1wiKVxuXHRcdFx0LnNlbGVjdEFsbChcIi5ub2RlXCIpO1xuXG5cdFx0XHRub2RlID0gbm9kZS5kYXRhKGdyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KTtcblxuXHRcdFx0bm9kZSA9IGVudGVyTm9kZXMobm9kZSk7XG5cdFx0XHRsaW5rID0gZW50ZXJMaW5rcyhsaW5rKTtcblxuXG5cdFx0XHQvLyBub2RlQ2lyY2xlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdC8vIFx0bm9kZS5jbGFzc2VkKCdmb2N1cycsIGZhbHNlKTtcblx0XHRcdC8vIFx0bm9kZS5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHQvLyBcdG5vZGVDaXJjbGUuYXR0cihcImZpbGxcIiwgXCJibGFja1wiKVxuXHRcdFx0Ly8gXHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgLjEpO1xuXHRcdFx0Ly8gXHRsaW5rLnN0eWxlKFwib3BhY2l0eVwiLCAuMSk7XG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnRfaWRzID0gZ3JhcGguZ3JhcGguY29ubmVjdGVkX2NvbXBvbmVudHNbZC5jb21wb25lbnRdO1xuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50ID0gbm9kZS5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBjb21wb25lbnRfaWRzLmluY2x1ZGVzKGQuaWQpOyB9KTtcblx0XHRcdC8vIFx0dmFyIGNvbXBvbmVudExpbmsgPSBsaW5rLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGNvbXBvbmVudF9pZHMuaW5jbHVkZXMoZC5zb3VyY2UuaWQpO30pXG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnRDb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblx0XHRcdC8vIFx0Y29tcG9uZW50LmNsYXNzZWQoXCJmb2N1c1wiLCB0cnVlKTtcblx0XHRcdC8vIFx0Y29tcG9uZW50LnNlbGVjdEFsbChcImNpcmNsZVwiKS5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBjb21wb25lbnRDb2xvcihkLmNsX2JvdHRvbSk7IH0pXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdC8vIFx0Y29tcG9uZW50LnNlbGVjdEFsbChcInRleHRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpOyAgLy8gc2hvdyB0aGVzZSBsYWJlbHNcblx0XHRcdC8vIFx0Y29tcG9uZW50TGluay5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHQvLyBcdFxuXHRcdFx0Ly8gXHQkKCAnI25vZGVsYWItZm9ybScgKS5jc3MoICd2aXNpYmlsaXR5JyAsICd2aXNpYmxlJyApO1xuXHRcdFx0Ly8gXHRhcHBseVJhZGlvU2VsZWN0aW9uKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gXHRkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdC8vXG5cdFx0XHQvLyB9KTtcblxuXG5cblx0XHQgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcblx0XHRcdC8vIG5vZGVcblx0XHRcdC8vICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSlcblx0XHRcdC8vICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueTsgfSk7XG5cdFx0XHQvLyBhZGQgYm91bmRpbmcgYm94XG5cdFx0XHQvLyAgIGh0dHBzOi8vYmwub2Nrcy5vcmcvbWJvc3RvY2svMTEyOTQ5MlxuXHRcdFx0bm9kZVxuXHRcdFx0XHQuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0ZC54ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHdpZHRoIC0gZC5yYWRpdXMsIGQueCkpO1xuXHRcdFx0XHRcdHJldHVybiBkLng7IH0pXG5cdFx0XHRcdC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyBcblx0XHRcdFx0XHRkLnkgPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4od2lkdGggLSBkLnJhZGl1cywgZC55KSk7XG5cdFx0XHRcdFx0cmV0dXJuIGQueTsgfSlcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KTtcblxuXHRcdFx0bGlua1xuXHRcdFx0XHQvLyAuc2VsZWN0QWxsKFwibGluZVwiKVxuXHRcdFx0XHQuYXR0cihcIngxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLng7IH0pXG5cdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcblx0XHRcdFx0LmF0dHIoXCJ4MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuXHRcdFx0XHQuYXR0cihcInkyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lnk7IH0pO1xuXHRcdCAgfVxuXG5cdFx0XHRmdW5jdGlvbiByZXNldF9sYXlvdXQoKSB7XG5cdFx0XHRcdG5vZGUuY2xhc3NlZChcImZvY3VzXCIsIGZhbHNlKTtcblx0XHRcdFx0bm9kZS5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdC8vIG5vZGVDaXJjbGUuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnOyB9KVxuXHRcdFx0XHQvLyBcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHRcdGxpbmsuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0fVxuXHRcdFx0c3ZnLm9uKFwiY2xpY2tcIiwgcmVzZXRfbGF5b3V0KTtcblxuXG5cblxuXHRcdH0pO1xuXHRyZXR1cm4gdGhpcztcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGQzRm9yY2VOb2RlTGluaztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19hcnJheV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19kcmFnX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX2ZvcmNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX3NjYWxlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX3NjYWxlX2Nocm9tYXRpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19zZWxlY3Rpb25fXzsiXSwic291cmNlUm9vdCI6IiJ9