import java.util.*;

public class Panagram {
    public static boolean checkPanagram(String s){
        Set<Character> myset = new HashSet<Character>();
        int n=s.length();
        for(int i=0;i<n;i++){
            if(Character.isLetter(s.charAt(i))){
                char lower = Character.toLowerCase(s.charAt(i));
                myset.add(lower);
            }
        }
        if(myset.size()==26){
            return true;
        }
        else{
            return false;
        }
    }
    public static void main(String[] args){
        // String str="The quick brown fox jumps over a lazy dog";
        Scanner scanner = new Scanner(System.in);
        System.out.println("write your sentence");
        String str = scanner.nextLine();
        scanner.close();
        if(checkPanagram(str)){
            System.out.println("is a panagram");
        }
        else{
            System.out.println("not a panagram");
        }
    }
}
