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
type DFS func(Point)

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
	var dfs DFS
	bfs(a)
	dfs = func(node Point) {
		if node.name == "" || node.children == nil {
			return
		}

		for _, point := range node.children {
			fmt.Printf("from: %s to %s\n", node.name, point.name)
			dfs(point)
		}
	}

		fmt.Println("*******************")
		dfs(a)
	
}
