// points
// A -> B, C
// B -> D
// C -> D

class Point {
  constructor(public name: string, public children: Point[]) {}
}

const d = new Point("D", []);
const b = new Point("B", [d]);
const c = new Point("C", [d]);
const a = new Point("A", [b, c]);

type BFS = (node: Point) => void;

// bfs
const bfs: BFS = (node: Point): void => {
  const arr: Array<Point> = new Array();
  arr.push(node);

  while (arr.length > 0) {
    const sz = arr.length;

    for (let i = 0; i < sz; ++i) {
      const front = arr[0];

      front.children.forEach((point) => {
        console.log(`from: ${front.name} to ${point.name}`);
        arr.push(point);
      });

      arr.shift();
    }
  }
};

bfs(a);

console.log("***************************");
// dfs
type DFS = (node: Point) => void;

const dfs: DFS = (node: Point): void => {
  if (!node || !node.children) return;

  node.children.forEach((point) => {
    console.log(`from: ${node.name} to ${point.name}`);
    dfs(point);
  });
};

dfs(a);
