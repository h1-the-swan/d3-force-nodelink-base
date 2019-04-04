// d3ForceNodeLink

// import * as d3 from 'd3';
// import jQuery from 'jquery';
// const $ = jQuery;

// import {select, selectAll, event as d3event} from 'd3-selection';
import {select, selectAll} from 'd3-selection';
import {scaleOrdinal, scaleLinear} from 'd3-scale';
import {schemeCategory10} from 'd3-scale-chromatic';
import {forceManyBody, forceSimulation, forceLink, forceCenter} from 'd3-force';
import {extent} from 'd3-array';
import {drag} from 'd3-drag';

const d3 = {select, selectAll, scaleOrdinal, scaleLinear, schemeCategory10, forceManyBody, forceSimulation, forceLink, forceCenter, extent, drag}
// can't figure out how to use d3.event, so replace it with d3event instead


class d3ForceNodeLink {
	constructor(opts = {}) {
		const defaults = {
			el: null,
			data: null,
			width: 960,
			color: d3.scaleOrdinal(d3.schemeCategory10),
			forceStrength: -2,
		};
		Object.assign(this, defaults, opts);  // opts will overwrite defaults
		this._data = this.data;
		this.data = this.updateData;
		if (typeof this.height === 'undefined') {
			this.height = .625 * this.width;
		}
		this.manyBody = d3.forceManyBody()
							.strength(this.forceStrength);
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
		}
		// console.log(typeof updateData);
		// if (typeof updateData === 'function') updateData();
		return this;
	};

	draw(selection) {
		var obj = this;
		var width = this.width;
		var height = this.height;
		var graph = this._data;
		var manyBody = this.manyBody;
		var color = this.color;
		var getLinkId = this.getLinkId;
		selection.each(function() {
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

				sizeScale.domain(d3.extent(graph.nodes, function(d) {
					if (d.hasOwnProperty('flow')) {
						return d.flow;
					} else {
						return [5,5]
					}
				}));


				var nodeEnter = node.enter().append("g")
				// .attr("r", 5)
					.attr("class", "node")
					// .attr("transform", function(d) {
					// 	var tx = (width/2) + d.x;
					// 	var ty = (height/2) + d.y;
					// 	return "translate(" + tx + "," + ty + ")";
					// })
					.call(d3.drag()
						.on("start", dragstarted)
						.on("drag", dragged)
						.on("end", dragended));



				node = node.merge(nodeEnter)
					.attr("cx", function(d) { return d.x = (width/2) + d.x; })
					.attr("cy", function(d) { return d.y = (height/2) + d.y; })
					.each(function(d) {
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

				var nodeCircle = nodeEnter
					.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
					.append("circle")
					// .attr("x", function(d) { return d.x; })
					// .attr("y", function(d) { return d.y; })
					.attr("fill", function(d) { return d.color; })
					.attr("r", 0);

				if (t !== null) {
					// nodeEnter.each(function(d) {
					// 	d.x = width/2;
					// 	d.y = height/2;
					// });
					node
						.selectAll("circle").transition(t)
						.attr("r", function(d) {
							return d.radius;
						})
					// .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });
						.attr("fill", function(d) {
							return d.color;
						});
				} else {

					node.selectAll("circle")
						.attr("r", function(d) {
							return d.radius;
						})
					// .attr("fill", function(d) { return d.color_orig = color(d.cl_top); });
						.attr("fill", function(d) {
							return d.color;
						});
				}

				return node;
			}

			function enterLinks(link, t = null) {
				// pass in the selection for entering links
				
				
				var linkEnter = link.enter().append("line")
					.attr("x1", function(d) { return d.source.x; })
					.attr("y1", function(d) { return d.source.y; })
					.attr("x2", function(d) { return d.target.x; })
					.attr("y2", function(d) { return d.target.y; })
					.attr("class", "link");
				link = link.merge(linkEnter);
				link
				  .attr("stroke-width", function(d) { return Math.sqrt(d.weight); });

				if (t !== null) {
					linkEnter
						// .style("opacity", 0)
						.style("stroke", "green")
					// linkEnter.transition(t)
					// 	.style("opacity", 1);
				} else {
					//
				}

				return link;
			}


			graph.nodes.forEach(function(d) {
				d.id = d.id.toString();
			});
			graph.links.forEach(function(d) {
				d.source = d.source.toString();
				d.target = d.target.toString();
				d.id = getLinkId(d, graph.directed);
			});

			var simulation = d3.forceSimulation()
				.force("link", d3.forceLink().id(function(d) { return d.id; }))
				// .force("link", d3.forceLink())
				.force("charge", manyBody)
				.force("center", d3.forceCenter(width / 2, height / 2));
		console.log('ddd');

		  simulation
			  .nodes(graph.nodes)
			  .on("tick", ticked);

		  simulation.force("link")
			  .links(graph.links);

		  obj.simulation = simulation;

			var sizeScale = d3.scaleLinear()
				.range([4, 12]);


			var g = svg.append("g");

		  var link = g.append("g")
			  .attr("class", "links")
			// .selectAll("line")
			.selectAll(".link");

			link = link.data(graph.links, function(d) {
				return d.id;
			});

		  var node = g.append("g")
			  .attr("class", "nodes")
			.selectAll(".node");

			node = node.data(graph.nodes, function(d) { return d.id; });

			node = enterNodes(node);
			link = enterLinks(link);


			// nodeCircle.on('click', function(d) {
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
			node
				.attr("cx", function(d) { 
					d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
					return d.x; })
				.attr("cy", function(d) { 
					d.y = Math.max(d.radius, Math.min(width - d.radius, d.y));
					return d.y; })
				.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

			link
				// .selectAll("line")
				.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });
		  }

			function reset_layout() {
				node.classed("focus", false);
				node.selectAll("text").style("display", "none");
				// nodeCircle.attr("fill", function(d) { return d.color_orig; })
				// 	.style("opacity", 1);
				link.style("opacity", 1);
			}
			svg.on("click", reset_layout);




		});
	return this;
	}

}

export default d3ForceNodeLink;
