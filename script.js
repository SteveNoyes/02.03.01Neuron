// create a network
const { Layer, Network } = window.synaptic;

var inputLayer = new Layer(2);
var hiddenLayer = new Layer(3);
var outputLayer = new Layer(1);

// output of inputLayer connects all connections to hiddenLayer
inputLayer.project(hiddenLayer);
// output of hiddenLayer connects all connections to outputLayer
hiddenLayer.project(outputLayer);

var twoThreeOneNetwork = new Network({
	input: inputLayer,
	hidden: [hiddenLayer],
	output: outputLayer
});

// train network to learn XOR
// exclusive or 
// if one value is exclusive 0 or 1 than out will be 0 or 1

// learning rate can be adjusted but monitor. Too low and 
// training will not occur. Too fast and training will be cursory

var learningRate = .3;
for (var i = 0; i < 20000; i++) {
	
	// 0,0 => 0
	twoThreeOneNetwork.activate([0,0]);
	twoThreeOneNetwork.propagate(learningRate, [0]);

	// 0,1 => 1
	twoThreeOneNetwork.activate([0,1]);
	twoThreeOneNetwork.propagate(learningRate, [1]);

	// 1,0 => 1
	twoThreeOneNetwork.activate([1,0]);
	twoThreeOneNetwork.propagate(learningRate, [1]);

	// 1,1 => 0
	twoThreeOneNetwork.activate([1,1]);
	twoThreeOneNetwork.propagate(learningRate, [0]);
}

// testing network
console.log(twoThreeOneNetwork.activate([0,0]));
console.log(twoThreeOneNetwork.activate([0,1]));
console.log(twoThreeOneNetwork.activate([1,0]));
console.log(twoThreeOneNetwork.activate([1,1]));

