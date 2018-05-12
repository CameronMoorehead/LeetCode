const Graph = function() {
  const vertices = [];
  const adjList = new Map();
  
  this.addVertex = v => {
    vertices.push(v);
    adjList.set(v, []);
  }

  this.addEdge = (v, w) => {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  }

  const initializeColor = () => {
    const color = [];
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i] = 'white'];
    }
    return color;
  }

  this.bfs = (v, callback) => {
    const color = initializeColor();
    const queue = [];
    queue.push(v);

    while (!queue.isEmpty()) {
      const u = queue.shift();
      const neighbors = adjList.get(u);
      color[u] = 'grey';

      for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }

      color[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
  }
};

const graph = new Graph();
const myVertices = ['A','B','C','D','E','F','G','H','I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
