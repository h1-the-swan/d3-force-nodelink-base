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
        if (!d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].x;
        d.fy = d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].y;
      }

      function dragended(d) {
        if (!d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].active) simulation.alphaTarget(0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2QzX2ZvcmNlX25vZGVsaW5rX2Jhc2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS8uL3NyYy92aXMuanMiLCJ3ZWJwYWNrOi8vZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZDMtYXJyYXlcIixcImNvbW1vbmpzMlwiOlwiZDMtYXJyYXlcIixcImFtZFwiOlwiZDMtYXJyYXlcIixcInJvb3RcIjpcImQzXCJ9Iiwid2VicGFjazovL2QzX2ZvcmNlX25vZGVsaW5rX2Jhc2UvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImQzLWRyYWdcIixcImNvbW1vbmpzMlwiOlwiZDMtZHJhZ1wiLFwiYW1kXCI6XCJkMy1kcmFnXCIsXCJyb290XCI6XCJkM1wifSIsIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJkMy1mb3JjZVwiLFwiY29tbW9uanMyXCI6XCJkMy1mb3JjZVwiLFwiYW1kXCI6XCJkMy1mb3JjZVwiLFwicm9vdFwiOlwiZDNcIn0iLCJ3ZWJwYWNrOi8vZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZS9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZDMtc2NhbGVcIixcImNvbW1vbmpzMlwiOlwiZDMtc2NhbGVcIixcImFtZFwiOlwiZDMtc2NhbGVcIixcInJvb3RcIjpcImQzXCJ9Iiwid2VicGFjazovL2QzX2ZvcmNlX25vZGVsaW5rX2Jhc2UvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImQzLXNjYWxlLWNocm9tYXRpY1wiLFwiY29tbW9uanMyXCI6XCJkMy1zY2FsZS1jaHJvbWF0aWNcIixcImFtZFwiOlwiZDMtc2NhbGUtY2hyb21hdGljXCIsXCJyb290XCI6XCJkM1wifSIsIndlYnBhY2s6Ly9kM19mb3JjZV9ub2RlbGlua19iYXNlL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJkMy1zZWxlY3Rpb25cIixcImNvbW1vbmpzMlwiOlwiZDMtc2VsZWN0aW9uXCIsXCJhbWRcIjpcImQzLXNlbGVjdGlvblwiLFwicm9vdFwiOlwiZDNcIn0iXSwibmFtZXMiOlsiZDMiLCJzZWxlY3QiLCJzZWxlY3RBbGwiLCJzY2FsZU9yZGluYWwiLCJzY2FsZUxpbmVhciIsInNjaGVtZUNhdGVnb3J5MTAiLCJmb3JjZU1hbnlCb2R5IiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2VMaW5rIiwiZm9yY2VDZW50ZXIiLCJleHRlbnQiLCJkcmFnIiwiZDNGb3JjZU5vZGVMaW5rIiwiY29uc3RydWN0b3IiLCJvcHRzIiwiZGVmYXVsdHMiLCJlbGVtZW50IiwiZGF0YSIsIndpZHRoIiwiY29sb3IiLCJmb3JjZVN0cmVuZ3RoIiwic2l6ZUZpZWxkIiwiY29sb3JGaWVsZCIsIk9iamVjdCIsImFzc2lnbiIsIl9kYXRhIiwidXBkYXRlRGF0YSIsImhlaWdodCIsIm1hbnlCb2R5Iiwic3RyZW5ndGgiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImRyYXciLCJnZXRMaW5rSWQiLCJsaW5rIiwiZGlyZWN0ZWQiLCJzb3VyY2UiLCJ0b1N0cmluZyIsInRhcmdldCIsIml0ZW1zIiwic2VwIiwic29ydCIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic2VsZWN0aW9uIiwib2JqIiwiZ3JhcGgiLCJlYWNoIiwic2VsSXRlbSIsInN2ZyIsImFwcGVuZCIsImF0dHIiLCJkcmFnc3RhcnRlZCIsImQiLCJkM2V2ZW50IiwiYWN0aXZlIiwic2ltdWxhdGlvbiIsImFscGhhVGFyZ2V0IiwicmVzdGFydCIsImZ4IiwieCIsImZ5IiwieSIsImRyYWdnZWQiLCJkcmFnZW5kZWQiLCJlbnRlck5vZGVzIiwibm9kZSIsInQiLCJkZWZhdWx0Q29sb3IiLCJzaXplU2NhbGUiLCJkb21haW4iLCJub2RlcyIsImhhc093blByb3BlcnR5Iiwibm9kZUVudGVyIiwiZW50ZXIiLCJjYWxsIiwib24iLCJtZXJnZSIsInJhZGl1cyIsIm5vZGVDaXJjbGUiLCJ0cmFuc2l0aW9uIiwiZW50ZXJMaW5rcyIsImxpbmtFbnRlciIsIk1hdGgiLCJzcXJ0Iiwid2VpZ2h0Iiwic3R5bGUiLCJmb3JFYWNoIiwiaWQiLCJsaW5rcyIsImZvcmNlIiwidGlja2VkIiwicmFuZ2UiLCJnIiwibWF4IiwibWluIiwicmVzZXRfbGF5b3V0IiwiY2xhc3NlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FB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QUd2QjtBQUNBOztBQUNBckQsWUFBSSxDQUFDcUQsS0FBTCxDQUFXLFNBQVgsRUFBc0IsQ0FBdEI7QUFDQTs7QUFDRHJDLFNBQUcsQ0FBQzJCLEVBQUosQ0FBTyxPQUFQLEVBQWdCb0IsWUFBaEI7QUFLQSxLQW5QRDtBQW9QRCxXQUFPLElBQVA7QUFDQzs7QUF2VG9COztBQTJUUHRGLDhFQUFmLEU7Ozs7Ozs7Ozs7O0FDNVVBLHNEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDBEIiwiZmlsZSI6ImQzX2ZvcmNlX25vZGVsaW5rX2Jhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkMy1hcnJheVwiKSwgcmVxdWlyZShcImQzLWRyYWdcIiksIHJlcXVpcmUoXCJkMy1mb3JjZVwiKSwgcmVxdWlyZShcImQzLXNjYWxlXCIpLCByZXF1aXJlKFwiZDMtc2NhbGUtY2hyb21hdGljXCIpLCByZXF1aXJlKFwiZDMtc2VsZWN0aW9uXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZDNfZm9yY2Vfbm9kZWxpbmtfYmFzZVwiLCBbXCJkMy1hcnJheVwiLCBcImQzLWRyYWdcIiwgXCJkMy1mb3JjZVwiLCBcImQzLXNjYWxlXCIsIFwiZDMtc2NhbGUtY2hyb21hdGljXCIsIFwiZDMtc2VsZWN0aW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImQzX2ZvcmNlX25vZGVsaW5rX2Jhc2VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkMy1hcnJheVwiKSwgcmVxdWlyZShcImQzLWRyYWdcIiksIHJlcXVpcmUoXCJkMy1mb3JjZVwiKSwgcmVxdWlyZShcImQzLXNjYWxlXCIpLCByZXF1aXJlKFwiZDMtc2NhbGUtY2hyb21hdGljXCIpLCByZXF1aXJlKFwiZDMtc2VsZWN0aW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkM19mb3JjZV9ub2RlbGlua19iYXNlXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0sIHJvb3RbXCJkM1wiXSwgcm9vdFtcImQzXCJdLCByb290W1wiZDNcIl0sIHJvb3RbXCJkM1wiXSwgcm9vdFtcImQzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX2FycmF5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfZHJhZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX2ZvcmNlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfc2NhbGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19zY2FsZV9jaHJvbWF0aWNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19zZWxlY3Rpb25fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGQzRm9yY2VOb2RlTGluayBmcm9tICcuL3Zpcy5qcyc7XG5leHBvcnQgeyBkM0ZvcmNlTm9kZUxpbmsgfTtcblxuIiwiLy8gZDNGb3JjZU5vZGVMaW5rXG5cbi8vIGltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbi8vIGltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5Jztcbi8vIGNvbnN0ICQgPSBqUXVlcnk7XG5cbmltcG9ydCB7c2VsZWN0LCBzZWxlY3RBbGwsIGV2ZW50IGFzIGQzZXZlbnR9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQge3NjYWxlT3JkaW5hbCwgc2NhbGVMaW5lYXJ9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7c2NoZW1lQ2F0ZWdvcnkxMH0gZnJvbSAnZDMtc2NhbGUtY2hyb21hdGljJztcbmltcG9ydCB7Zm9yY2VNYW55Qm9keSwgZm9yY2VTaW11bGF0aW9uLCBmb3JjZUxpbmssIGZvcmNlQ2VudGVyfSBmcm9tICdkMy1mb3JjZSc7XG5pbXBvcnQge2V4dGVudH0gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IHtkcmFnfSBmcm9tICdkMy1kcmFnJztcblxuY29uc3QgZDMgPSB7c2VsZWN0LCBzZWxlY3RBbGwsIHNjYWxlT3JkaW5hbCwgc2NhbGVMaW5lYXIsIHNjaGVtZUNhdGVnb3J5MTAsIGZvcmNlTWFueUJvZHksIGZvcmNlU2ltdWxhdGlvbiwgZm9yY2VMaW5rLCBmb3JjZUNlbnRlciwgZXh0ZW50LCBkcmFnfVxuLy8gY2FuJ3QgZmlndXJlIG91dCBob3cgdG8gdXNlIGQzLmV2ZW50LCBzbyByZXBsYWNlIGl0IHdpdGggZDNldmVudCBpbnN0ZWFkXG5cblxuY2xhc3MgZDNGb3JjZU5vZGVMaW5rIHtcblx0Y29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG5cdFx0Y29uc3QgZGVmYXVsdHMgPSB7XG5cdFx0XHRlbGVtZW50OiBudWxsLFxuXHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHRjb2xvcjogZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApLFxuXHRcdFx0Zm9yY2VTdHJlbmd0aDogLTIsXG5cdFx0XHRzaXplRmllbGQ6ICdmbG93JywgIC8vIGZpZWxkIHdpdGggY29udGludW91cyB2YXJpYWJsZSB0byB1c2UgZm9yIHNpemVcblx0XHRcdGNvbG9yRmllbGQ6ICdjbF90b3AnLCAgLy8gY2F0ZWdvcmljYWwgZmllbGQgdG8gdXNlIGZvciBjb2xvcnNcblx0XHR9O1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGVmYXVsdHMsIG9wdHMpOyAgLy8gb3B0cyB3aWxsIG92ZXJ3cml0ZSBkZWZhdWx0c1xuXHRcdHRoaXMuX2RhdGEgPSB0aGlzLmRhdGE7XG5cdFx0dGhpcy5kYXRhID0gdGhpcy51cGRhdGVEYXRhO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5oZWlnaHQgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuaGVpZ2h0ID09PSBudWxsKSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IC42MjUgKiB0aGlzLndpZHRoO1xuXHRcdH1cblx0XHR0aGlzLm1hbnlCb2R5ID0gZDMuZm9yY2VNYW55Qm9keSgpXG5cdFx0XHRcdFx0XHRcdC5zdHJlbmd0aCh0aGlzLmZvcmNlU3RyZW5ndGgpO1xuXHRcdHRoaXMuaW5pdCA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuX2RhdGEpO1xuXHRcdGlmICh0aGlzLmVsZW1lbnQgIT09IG51bGwgJiYgdGhpcy5fZGF0YSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWxlbWVudCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGdldExpbmtJZChsaW5rLCBkaXJlY3RlZCA9IGZhbHNlKSB7XG5cdFx0Ly8gbGluayBJRCB3aWxsIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBzb3VyY2UgSUQgYW5kIHRhcmdldCBJRCwgc2VwYXJhdGVkIGJ5IFwiLSYtXCJcblx0XHQvLyBJZiB0aGUgZ3JhcGggaXMgdW5kaXJlY3RlZCwgdGhlIElEcyB3aWxsIGJlIHNvcnRlZCBBTFBIQUJFVElDQUxMWSB1c2luZyB0aGUgc3RyaW5nIHZhbHVlcyBvZiB0aGUgSURcblx0XHR2YXIgc291cmNlID0gbGluay5zb3VyY2UudG9TdHJpbmcoKTtcblx0XHR2YXIgdGFyZ2V0ID0gbGluay50YXJnZXQudG9TdHJpbmcoKTtcblx0XHR2YXIgaXRlbXMgPSBbc291cmNlLCB0YXJnZXRdO1xuXHRcdHZhciBzZXAgPSBcIi0mLVwiO1xuXHRcdGlmIChkaXJlY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0aXRlbXMuc29ydCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gaXRlbXNbMF0gKyBzZXAgKyBpdGVtc1sxXTtcblx0fVxuXG5cdHVwZGF0ZURhdGEodmFsdWUpIHtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9kYXRhO1xuXHRcdHRoaXMuX2RhdGEgPSB2YWx1ZTtcblx0XHRpZiAodGhpcy5pbml0ID09PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5kcmF3KHRoaXMuZWxlbWVudCk7XG5cdFx0XHR0aGlzLmluaXQgPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aGlzLnVwZGF0ZURhdGEoKTtcblx0XHRcdC8vIE5PVCBJTVBMRU1FTlRFRFxuXHRcdFx0Y29uc29sZS5sb2coXCJVUERBVElORyBEQVRBIE5PVCBZRVQgSU1QTEVNRU5URURcIik7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKHR5cGVvZiB1cGRhdGVEYXRhKTtcblx0XHQvLyBpZiAodHlwZW9mIHVwZGF0ZURhdGEgPT09ICdmdW5jdGlvbicpIHVwZGF0ZURhdGEoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRkcmF3KHNlbGVjdGlvbikge1xuXHRcdHZhciBvYmogPSB0aGlzO1xuXHRcdHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XG5cdFx0dmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXHRcdHZhciBncmFwaCA9IHRoaXMuX2RhdGE7XG5cdFx0dmFyIG1hbnlCb2R5ID0gdGhpcy5tYW55Qm9keTtcblx0XHR2YXIgY29sb3IgPSB0aGlzLmNvbG9yO1xuXHRcdHZhciBnZXRMaW5rSWQgPSB0aGlzLmdldExpbmtJZDtcblx0XHR2YXIgc2l6ZUZpZWxkID0gdGhpcy5zaXplRmllbGQ7XG5cdFx0dmFyIGNvbG9yRmllbGQgPSB0aGlzLmNvbG9yRmllbGQ7XG5cdFx0c2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsSXRlbSA9IHRoaXM7XG5cblx0XHRcdHZhciBzdmcgPSBkMy5zZWxlY3Qoc2VsSXRlbSkuYXBwZW5kKFwic3ZnXCIpLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCkuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXHRcdFx0Y29uc29sZS5sb2coZ3JhcGgpO1xuXG5cdFx0XHRmdW5jdGlvbiBkcmFnc3RhcnRlZChkKSB7XG5cdFx0XHRcdGlmICghZDNldmVudC5hY3RpdmUpIHNpbXVsYXRpb24uYWxwaGFUYXJnZXQoMC4zKS5yZXN0YXJ0KCk7XG5cdFx0XHRcdGQuZnggPSBkLng7XG5cdFx0XHRcdGQuZnkgPSBkLnk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGRyYWdnZWQoZCkge1xuXHRcdFx0XHRkLmZ4ID0gZDNldmVudC54O1xuXHRcdFx0XHRkLmZ5ID0gZDNldmVudC55O1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBkcmFnZW5kZWQoZCkge1xuXHRcdFx0XHRpZiAoIWQzZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDApO1xuXHRcdFx0XHRkLmZ4ID0gbnVsbDtcblx0XHRcdFx0ZC5meSA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIGVudGVyTm9kZXMobm9kZSwgdCA9IG51bGwpIHtcblx0XHRcdFx0Ly8gcGFzcyBpbiB0aGUgc2VsZWN0aW9uIGZvciBlbnRlcmluZyBub2Rlc1xuXG5cdFx0XHRcdHZhciBkZWZhdWx0Q29sb3IgPSBjb2xvcigwKTtcblxuXHRcdFx0XHRzaXplU2NhbGUuZG9tYWluKGQzLmV4dGVudChncmFwaC5ub2RlcywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdGlmIChkLmhhc093blByb3BlcnR5KHNpemVGaWVsZCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBkW3NpemVGaWVsZF07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBbNSw1XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkpO1xuXG5cblx0XHRcdFx0dmFyIG5vZGVFbnRlciA9IG5vZGUuZW50ZXIoKS5hcHBlbmQoXCJnXCIpXG5cdFx0XHRcdC8vIC5hdHRyKFwiclwiLCA1KVxuXHRcdFx0XHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJub2RlXCIpXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdC8vIFx0dmFyIHR4ID0gKHdpZHRoLzIpICsgZC54O1xuXHRcdFx0XHRcdC8vIFx0dmFyIHR5ID0gKGhlaWdodC8yKSArIGQueTtcblx0XHRcdFx0XHQvLyBcdHJldHVybiBcInRyYW5zbGF0ZShcIiArIHR4ICsgXCIsXCIgKyB0eSArIFwiKVwiO1xuXHRcdFx0XHRcdC8vIH0pXG5cdFx0XHRcdFx0LmNhbGwoZDMuZHJhZygpXG5cdFx0XHRcdFx0XHQub24oXCJzdGFydFwiLCBkcmFnc3RhcnRlZClcblx0XHRcdFx0XHRcdC5vbihcImRyYWdcIiwgZHJhZ2dlZClcblx0XHRcdFx0XHRcdC5vbihcImVuZFwiLCBkcmFnZW5kZWQpKTtcblxuXG5cblx0XHRcdFx0bm9kZSA9IG5vZGUubWVyZ2Uobm9kZUVudGVyKVxuXHRcdFx0XHRcdC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC54ID0gKHdpZHRoLzIpICsgZC54OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC55ID0gKGhlaWdodC8yKSArIGQueTsgfSlcblx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0XHRpZiAoZC5oYXNPd25Qcm9wZXJ0eShzaXplRmllbGQpKSB7XG5cdFx0XHRcdFx0XHRcdGQucmFkaXVzID0gc2l6ZVNjYWxlKGRbc2l6ZUZpZWxkXSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRkLnJhZGl1cyA9IDU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChkLmhhc093blByb3BlcnR5KGNvbG9yRmllbGQpKSB7XG5cdFx0XHRcdFx0XHRcdGQuY29sb3IgPSBjb2xvcihkW2NvbG9yRmllbGRdKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGQuY29sb3IgPSBkZWZhdWx0Q29sb3I7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dmFyIG5vZGVDaXJjbGUgPSBub2RlRW50ZXJcblx0XHRcdFx0XHQuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueCArIFwiLFwiICsgZC55ICsgXCIpXCI7IH0pXG5cdFx0XHRcdFx0LmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwieFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLng7IH0pXG5cdFx0XHRcdFx0Ly8gLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueTsgfSlcblx0XHRcdFx0XHQuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcjsgfSlcblx0XHRcdFx0XHQuYXR0cihcInJcIiwgMCk7XG5cblx0XHRcdFx0aWYgKHQgIT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBub2RlRW50ZXIuZWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdFx0Ly8gXHRkLnggPSB3aWR0aC8yO1xuXHRcdFx0XHRcdC8vIFx0ZC55ID0gaGVpZ2h0LzI7XG5cdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdFx0bm9kZVxuXHRcdFx0XHRcdFx0LnNlbGVjdEFsbChcImNpcmNsZVwiKS50cmFuc2l0aW9uKHQpXG5cdFx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZC5yYWRpdXM7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmNvbG9yX29yaWcgPSBjb2xvcihkLmNsX3RvcCk7IH0pO1xuXHRcdFx0XHRcdFx0LmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQuY29sb3I7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdG5vZGUuc2VsZWN0QWxsKFwiY2lyY2xlXCIpXG5cdFx0XHRcdFx0XHQuYXR0cihcInJcIiwgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZC5yYWRpdXM7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmNvbG9yX29yaWcgPSBjb2xvcihkLmNsX3RvcCk7IH0pO1xuXHRcdFx0XHRcdFx0LmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGQuY29sb3I7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBlbnRlckxpbmtzKGxpbmssIHQgPSBudWxsKSB7XG5cdFx0XHRcdC8vIHBhc3MgaW4gdGhlIHNlbGVjdGlvbiBmb3IgZW50ZXJpbmcgbGlua3Ncblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR2YXIgbGlua0VudGVyID0gbGluay5lbnRlcigpLmFwcGVuZChcImxpbmVcIilcblx0XHRcdFx0XHQuYXR0cihcIngxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLng7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJ5MVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNvdXJjZS55OyB9KVxuXHRcdFx0XHRcdC5hdHRyKFwieDJcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50YXJnZXQueDsgfSlcblx0XHRcdFx0XHQuYXR0cihcInkyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lnk7IH0pXG5cdFx0XHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImxpbmtcIik7XG5cdFx0XHRcdGxpbmsgPSBsaW5rLm1lcmdlKGxpbmtFbnRlcik7XG5cdFx0XHRcdGxpbmtcblx0XHRcdFx0ICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBNYXRoLnNxcnQoZC53ZWlnaHQpOyB9KTtcblxuXHRcdFx0XHRpZiAodCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdGxpbmtFbnRlclxuXHRcdFx0XHRcdFx0Ly8gLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuXHRcdFx0XHRcdFx0LnN0eWxlKFwic3Ryb2tlXCIsIFwiZ3JlZW5cIilcblx0XHRcdFx0XHQvLyBsaW5rRW50ZXIudHJhbnNpdGlvbih0KVxuXHRcdFx0XHRcdC8vIFx0LnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGxpbms7XG5cdFx0XHR9XG5cblxuXHRcdFx0Z3JhcGgubm9kZXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGQuaWQgPSBkLmlkLnRvU3RyaW5nKCk7XG5cdFx0XHR9KTtcblx0XHRcdGdyYXBoLmxpbmtzLmZvckVhY2goZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRkLnNvdXJjZSA9IGQuc291cmNlLnRvU3RyaW5nKCk7XG5cdFx0XHRcdGQudGFyZ2V0ID0gZC50YXJnZXQudG9TdHJpbmcoKTtcblx0XHRcdFx0ZC5pZCA9IGdldExpbmtJZChkLCBncmFwaC5kaXJlY3RlZCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24oKVxuXHRcdFx0XHQuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpLmlkKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuaWQ7IH0pKVxuXHRcdFx0XHQvLyAuZm9yY2UoXCJsaW5rXCIsIGQzLmZvcmNlTGluaygpKVxuXHRcdFx0XHQuZm9yY2UoXCJjaGFyZ2VcIiwgbWFueUJvZHkpXG5cdFx0XHRcdC5mb3JjZShcImNlbnRlclwiLCBkMy5mb3JjZUNlbnRlcih3aWR0aCAvIDIsIGhlaWdodCAvIDIpKTtcblxuXHRcdCAgc2ltdWxhdGlvblxuXHRcdFx0ICAubm9kZXMoZ3JhcGgubm9kZXMpXG5cdFx0XHQgIC5vbihcInRpY2tcIiwgdGlja2VkKTtcblxuXHRcdCAgc2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIilcblx0XHRcdCAgLmxpbmtzKGdyYXBoLmxpbmtzKTtcblxuXHRcdCAgb2JqLnNpbXVsYXRpb24gPSBzaW11bGF0aW9uO1xuXG5cdFx0XHR2YXIgc2l6ZVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdFx0XHQucmFuZ2UoWzQsIDEyXSk7XG5cblxuXHRcdFx0dmFyIGcgPSBzdmcuYXBwZW5kKFwiZ1wiKTtcblxuXHRcdCAgdmFyIGxpbmsgPSBnLmFwcGVuZChcImdcIilcblx0XHRcdCAgLmF0dHIoXCJjbGFzc1wiLCBcImxpbmtzXCIpXG5cdFx0XHQvLyAuc2VsZWN0QWxsKFwibGluZVwiKVxuXHRcdFx0LnNlbGVjdEFsbChcIi5saW5rXCIpO1xuXG5cdFx0XHRsaW5rID0gbGluay5kYXRhKGdyYXBoLmxpbmtzLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdHJldHVybiBkLmlkO1xuXHRcdFx0fSk7XG5cblx0XHQgIHZhciBub2RlID0gZy5hcHBlbmQoXCJnXCIpXG5cdFx0XHQgIC5hdHRyKFwiY2xhc3NcIiwgXCJub2Rlc1wiKVxuXHRcdFx0LnNlbGVjdEFsbChcIi5ub2RlXCIpO1xuXG5cdFx0XHRub2RlID0gbm9kZS5kYXRhKGdyYXBoLm5vZGVzLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmlkOyB9KTtcblxuXHRcdFx0bm9kZSA9IGVudGVyTm9kZXMobm9kZSk7XG5cdFx0XHRsaW5rID0gZW50ZXJMaW5rcyhsaW5rKTtcblxuXG5cdFx0XHQvLyBub2RlQ2lyY2xlLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdC8vIFx0bm9kZS5jbGFzc2VkKCdmb2N1cycsIGZhbHNlKTtcblx0XHRcdC8vIFx0bm9kZS5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHQvLyBcdG5vZGVDaXJjbGUuYXR0cihcImZpbGxcIiwgXCJibGFja1wiKVxuXHRcdFx0Ly8gXHRcdC5zdHlsZShcIm9wYWNpdHlcIiwgLjEpO1xuXHRcdFx0Ly8gXHRsaW5rLnN0eWxlKFwib3BhY2l0eVwiLCAuMSk7XG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnRfaWRzID0gZ3JhcGguZ3JhcGguY29ubmVjdGVkX2NvbXBvbmVudHNbZC5jb21wb25lbnRdO1xuXHRcdFx0Ly8gXHR2YXIgY29tcG9uZW50ID0gbm9kZS5maWx0ZXIoZnVuY3Rpb24oZCkge3JldHVybiBjb21wb25lbnRfaWRzLmluY2x1ZGVzKGQuaWQpOyB9KTtcblx0XHRcdC8vIFx0dmFyIGNvbXBvbmVudExpbmsgPSBsaW5rLmZpbHRlcihmdW5jdGlvbihkKSB7cmV0dXJuIGNvbXBvbmVudF9pZHMuaW5jbHVkZXMoZC5zb3VyY2UuaWQpO30pXG5cdFx0XHQvLyBcdHZhciBjb21wb25lbnRDb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblx0XHRcdC8vIFx0Y29tcG9uZW50LmNsYXNzZWQoXCJmb2N1c1wiLCB0cnVlKTtcblx0XHRcdC8vIFx0Y29tcG9uZW50LnNlbGVjdEFsbChcImNpcmNsZVwiKS5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBjb21wb25lbnRDb2xvcihkLmNsX2JvdHRvbSk7IH0pXG5cdFx0XHQvLyBcdFx0LnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblx0XHRcdC8vIFx0Y29tcG9uZW50LnNlbGVjdEFsbChcInRleHRcIikuc3R5bGUoXCJkaXNwbGF5XCIsIFwiXCIpOyAgLy8gc2hvdyB0aGVzZSBsYWJlbHNcblx0XHRcdC8vIFx0Y29tcG9uZW50TGluay5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHQvLyBcdFxuXHRcdFx0Ly8gXHQkKCAnI25vZGVsYWItZm9ybScgKS5jc3MoICd2aXNpYmlsaXR5JyAsICd2aXNpYmxlJyApO1xuXHRcdFx0Ly8gXHRhcHBseVJhZGlvU2VsZWN0aW9uKCk7XG5cdFx0XHQvL1xuXHRcdFx0Ly8gXHRkMy5ldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdC8vXG5cdFx0XHQvLyB9KTtcblxuXG5cblx0XHQgIGZ1bmN0aW9uIHRpY2tlZCgpIHtcblx0XHRcdC8vIG5vZGVcblx0XHRcdC8vICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueDsgfSlcblx0XHRcdC8vICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQueTsgfSk7XG5cdFx0XHQvLyBhZGQgYm91bmRpbmcgYm94XG5cdFx0XHQvLyAgIGh0dHBzOi8vYmwub2Nrcy5vcmcvbWJvc3RvY2svMTEyOTQ5MlxuXHRcdFx0bm9kZVxuXHRcdFx0XHQuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHsgXG5cdFx0XHRcdFx0ZC54ID0gTWF0aC5tYXgoZC5yYWRpdXMsIE1hdGgubWluKHdpZHRoIC0gZC5yYWRpdXMsIGQueCkpO1xuXHRcdFx0XHRcdHJldHVybiBkLng7IH0pXG5cdFx0XHRcdC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyBcblx0XHRcdFx0XHRkLnkgPSBNYXRoLm1heChkLnJhZGl1cywgTWF0aC5taW4od2lkdGggLSBkLnJhZGl1cywgZC55KSk7XG5cdFx0XHRcdFx0cmV0dXJuIGQueTsgfSlcblx0XHRcdFx0LmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBkLnggKyBcIixcIiArIGQueSArIFwiKVwiOyB9KTtcblxuXHRcdFx0bGlua1xuXHRcdFx0XHQvLyAuc2VsZWN0QWxsKFwibGluZVwiKVxuXHRcdFx0XHQuYXR0cihcIngxXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQuc291cmNlLng7IH0pXG5cdFx0XHRcdC5hdHRyKFwieTFcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zb3VyY2UueTsgfSlcblx0XHRcdFx0LmF0dHIoXCJ4MlwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnRhcmdldC54OyB9KVxuXHRcdFx0XHQuYXR0cihcInkyXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGFyZ2V0Lnk7IH0pO1xuXHRcdCAgfVxuXG5cdFx0XHRmdW5jdGlvbiByZXNldF9sYXlvdXQoKSB7XG5cdFx0XHRcdG5vZGUuY2xhc3NlZChcImZvY3VzXCIsIGZhbHNlKTtcblx0XHRcdFx0bm9kZS5zZWxlY3RBbGwoXCJ0ZXh0XCIpLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdC8vIG5vZGVDaXJjbGUuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5jb2xvcl9vcmlnOyB9KVxuXHRcdFx0XHQvLyBcdC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cdFx0XHRcdGxpbmsuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXHRcdFx0fVxuXHRcdFx0c3ZnLm9uKFwiY2xpY2tcIiwgcmVzZXRfbGF5b3V0KTtcblxuXG5cblxuXHRcdH0pO1xuXHRyZXR1cm4gdGhpcztcblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGQzRm9yY2VOb2RlTGluaztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19hcnJheV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19kcmFnX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX2ZvcmNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX3NjYWxlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX3NjYWxlX2Nocm9tYXRpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19zZWxlY3Rpb25fXzsiXSwic291cmNlUm9vdCI6IiJ9