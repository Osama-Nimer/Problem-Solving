import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

public class RegistrationSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine()); 
        
        HashSet<String> registeredNames = new HashSet<>(); 
        HashMap<String, Integer> nameCount = new HashMap<>(); 
 
        for (int i = 0; i < n; i++) {
            String name = scanner.nextLine();
 
            if (registeredNames.contains(name)) {
                int count = nameCount.get(name) + 1;
                String newName = name + count;
 
                while (registeredNames.contains(newName)) {
                    count++;
                    newName = name + count;
                }
 
                registeredNames.add(newName); 
                nameCount.put(name, count); 
                System.out.println(newName);
            } else {
                registeredNames.add(name); 
                nameCount.put(name, 0); 
                System.out.println("OK");
            }
        }
    }
}