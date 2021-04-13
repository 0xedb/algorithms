class Point {
  constructor(public name: string, public children: Point[]) {}
}

const a: Point = new Point("A", []);
const b: Point = new Point("B", []);
const c: Point = new Point("C", []);
const d: Point = new Point("D", []);
const e: Point = new Point("E", []);
const f: Point = new Point("F", []);

a.children.push(b);
b.children.push(c, d, e);
d.children.push(e);
e.children.push(f);


const nodes = new Array(a,b,c,d,e,f)
const visited = new WeakSet()
const stk = new Array()



const dfs = (node) => {
  if (!node) {
    return
  }

  visited.add(node)
  for(const i of node.children) {
    if(!visited.has(i))
    dfs(i)
  }

  stk.push(node.name)
}

for(const i of nodes) {
  if(!visited.has(i))
  dfs(i)  
}



console.log(stk.reverse())

