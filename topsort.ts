class Point {
  constructor(public name: string, public children: Point[]) {}
}

const a: Point = new Point("shirt", []);
const b: Point = new Point("hoodie", []);
const c: Point = new Point("underwear", []);
const d: Point = new Point("pants", []);
const e: Point = new Point("school", []);
const f: Point = new Point("socks", []);
const g: Point = new Point("shoes", []);


a.children.push(b);
b.children.push(e);
c.children.push(d)
d.children.push(g);
f.children.push(g)

// e.children.push(f);


const nodes = new Array(a,b,c,d,e,f, g)
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

