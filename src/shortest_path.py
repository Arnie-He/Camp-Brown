import heapq as heap
import pandas as pd
from collections import defaultdict
import os

# First, download everything from the google sheet and generate the graph. 
# The graph is going to be represented by path and nodes where the weight of the paths between 
# two nodes are gonna be the inverse of the number of people the clubs have in common.
# From there we implement the dijkstra algorithm.
f = os.path.dirname(os.path.realpath(__file__)) + '/data.csv'
df = pd.read_csv(f)
print(df.head())

df = [
	["A", 0, 0, 0, 0, 1, 1],
	["B", 0, 0, 0, 1, 1, 1],
	["C", 0, 0, 1, 0, 0, 1],
	["D", 0, 0, 1, 0, 1, 0],
	["E", 1, 0, 0, 0, 1, 1],
	["F", 0, 1, 0, 0, 1, 1],
]

def generate_Graph(tb):
	G = [[0] * 10] * 10
	for i in range(0, len(tb)):
		for j in range(i + 1, len(tb)):
			count = 0
			for k in range(1, len(tb[i])):
				if tb[i][k] == tb[j][k] == 1:
					count += 1
			G[i][j] = G[j][i] = 0 - count
	return G

print(generate_Graph(df))

graph = generate_Graph(df)

def minDistance(self, dist, sptSet):
 
	# Initialize minimum distance for next node
	min = 1e7

	# Search not nearest vertex not in the
	# shortest path tree
	for v in range(self.V):
		if dist[v] < min and sptSet[v] == False:
			min = dist[v]
			min_index = v

	return min_index

# Function that implements Dijkstra's single source
# shortest path algorithm for a graph represented
# using adjacency matrix representation
def dijkstra(self, src):

	dist = [1e7] * self.V
	dist[src] = 0
	sptSet = [False] * self.V

	for cout in range(self.V):
			# Pick the minimum distance vertex from
		# the set of vertices not yet processed.
		# u is always equal to src in first iteration
		u = self.minDistance(dist, sptSet)

		# Put the minimum distance vertex in the
		# shortest path tree
		sptSet[u] = True

		# Update dist value of the adjacent vertices
		# of the picked vertex only if the current
		# distance is greater than new distance and
		# the vertex in not in the shortest path tree
		for v in range(self.V):
			if (self.graph[u][v] > 0 and
				sptSet[v] == False and
				dist[v] > dist[u] + self.graph[u][v]):
				dist[v] = dist[u] + self.graph[u][v]

	self.printSolution(dist)
 
'''
# Driver program
g = Graph(9)
g.graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
           [4, 0, 8, 0, 0, 0, 0, 11, 0],
           [0, 8, 0, 7, 0, 4, 0, 0, 2],
           [0, 0, 7, 0, 9, 14, 0, 0, 0],
           [0, 0, 0, 9, 0, 10, 0, 0, 0],
           [0, 0, 4, 14, 10, 0, 2, 0, 0],
           [0, 0, 0, 0, 0, 2, 0, 1, 6],
           [8, 11, 0, 0, 0, 0, 1, 0, 7],
           [0, 0, 2, 0, 0, 0, 6, 7, 0]
           ]
 
df.dijkstra(0)
'''