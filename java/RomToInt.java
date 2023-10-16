import java.util.*;

public class RomToInt {
    public static int convertFunc(String s){
        if(s==null||s.length()==0){
            return 0;
        }
        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
        int n=s.length();
        int temp = map.get(s.charAt(n-1));
        int ans = temp;
        for(int i=n-2;i>=0;i--){ 
            if(temp<map.get(s.charAt(i))){
                ans+=map.get(s.charAt(i));
            }
            else{
                ans-=map.get(s.charAt(i));
            }
            temp=map.get(s.charAt(i));
        }
        return ans;
    }

    public static void main(String[] args){
        String str = "MCMXCIV";
        int answer = convertFunc(str);
        System.out.println(answer);
    }
    
}
