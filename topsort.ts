class Point {
  constructor(public name: string, public children: Point[]) {}
}

const a: Point = new Point("A", []);
