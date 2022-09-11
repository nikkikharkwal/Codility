import java.util.*;

class Solution 
{
      public int solution(int[] X, int[] Y, String colors) 
      {
        List<Double> distanceList = new ArrayList<Double>(X.length);
        List<Integer> noList = new ArrayList<Integer>(X.length);
        noList.add(0);
        int noR=0, noG=0;
       
        String[] strSplit = colors.split("");
  
        // Now convert string into ArrayList
        List<String> colorList = new ArrayList<String>(
            Arrays.asList(strSplit));

        if(!colorList.contains("R") || !colorList.contains("G")){
            return 0;
        }

        for(int i=0;i<X.length;i++){
            distanceList.add(Math.round(distance(0, 0, X[i], Y[i]) *100000.0)/ 100000.0);
        }
         for(int i=0;i<distanceList.size();i++){
             double node=distanceList.get(i);
            for(int j=0;j<distanceList.size();j++){
                if(node>distanceList.get(j) || node==distanceList.get(j)){
                    // System.out.println(j+ ":"+ colorList.get(j));
                if(colorList.get(j).equals("R")){
                    noR++;
                }
                else if(colorList.get(j).equals("G")){
                    noG++;
                }
            }
        
        }
        if(noR==noG){
            noList.add(noG+noR);
        } 
        noG=0;
        noR=0;                
    }       
        return Collections.max(noList);

    }

    static double distance(int x1, int y1, int x2, int y2)
    {
        // Calculating distance
        return Math.sqrt(Math.pow(x2 - x1, 2)
                         + Math.pow(y2 - y1, 2) * 1.0);
    }
}
