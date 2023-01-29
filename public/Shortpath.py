import heapq as heap
import pandas as pd
from collections import defaultdict

# First, download everything from the google sheet and generate the graph. 
# The graph is going to be represented by path and nodes where the weight of the paths between 
# two nodes are gonna be the inverse of the number of people the clubs have in common.
# From there we implement the dijkstra algorithm.

url = "https://docs.google.com/spreadsheets/d/19NKhRn4BkNzrV8-BkMRnA-hSWLIsIHtpJvUDmNsDZSA/edit?usp=sharing"
df = pd.read_csv(url)
print(df.head())

def dijkstra(G, startingNode):
	visited = set()
	parentsMap = {}
	pq = []
	nodeCosts = defaultdict(lambda: float('inf'))
	nodeCosts[startingNode] = 0
	heap.heappush(pq, (0, startingNode))

	while pq:
		# go greedily by always extending the shorter cost nodes first
		_, node = heap.heappop(pq)
		visited.add(node)
 
		for adjNode, weight in G[node].items():
			if adjNode in visited:	continue
				
			newCost = nodeCosts[node] + weight
			if nodeCosts[adjNode] > newCost:
				parentsMap[adjNode] = node
				nodeCosts[adjNode] = newCost
				heap.heappush(pq, (newCost, adjNode))
        
	return parentsMap, nodeCosts