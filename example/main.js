var d3ForceNodeLink = d3_force_nodelink_base.d3ForceNodeLink;


var nodelinkvis;

// d3.json("data/test_coauthorship_graph.json").then(function(graph) {
d3.json("data/test_coauthorship_graph_combined_max600.json").then(function(graph) {
	var sel = d3.select('#chartDiv');
	var config = {
		data: graph,
		el: sel
	};
	nodelinkvis = new d3ForceNodeLink(config);

});
