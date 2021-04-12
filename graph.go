package main

import "fmt"

type Point struct {
	name     string
	children []Point
}

var d = Point{"D", []Point{}}
var b = Point{"B", []Point{d}}
var c = Point{"C", []Point{d}}
var a = Point{"A", []Point{b, c}}

type BFS func(Point)

var bfs BFS = func(node Point) {
	arr := []Point{node}

	for len(arr) > 0 {
		sz := len(arr)

		for i := 0; i < sz; i++ {
			front := arr[0]

			for _, point := range front.children {
				fmt.Printf("from: %s to %s\n", front.name, point.name)
				arr = append(arr, point)
			}

			arr = arr[1:]
		}
	}
}

func main() {
	bfs(a)
}
