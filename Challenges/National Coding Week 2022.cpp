#include <iostream>
#include <string>
#include <vector>

using std::cout;
using std::endl;
using std::string;
using std::vector;

void dfs(int v, int par, vector<vector<int>>& adj, vector<int>& dist)
{

    for (int i : adj[v]) {

        if (i != par) {

            dist[i] = dist[v] + 1;
 
            dfs(i, v, adj, dist);
        }
    }
}

int solution(vector<int> &A, vector<int> &B) {
    int N = (int)A.size() + 1;


    vector<vector<int>> adj(N);

    for (int i = 0; i < N-1; i++) {

        adj[A[i]].push_back(B[i]);
        adj[B[i]].push_back(A[i]);
    }

 
    vector<int> dist(N);


    dfs(0, -1, adj, dist);


    int L = 0, R = 0;


    for (int i = 0; i < N; i++) {
 
        if ((dist[i] & 0x1) == 0) {

            L++;
        } else {

            R++;
        }
    }

    return L * R;
}
