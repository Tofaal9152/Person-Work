import java.util.Random;

public class Array {
   public static void main(String[] args) {
      int[] n = new int[10];
      Random Ran = new Random();
      for (int i = 0; i < 10; i++) {
         n[i] = Ran.nextInt(100) + 1;
      }

      for (int i = 0; i < n.length; i += 2) {
         System.out.print(n[i] + " ");
      }
      System.out.println();

      for (int i = 0; i < n.length; i++) {
         if (n[i] % 2 == 0) {
            System.out.print(n[i] + " ");
         }
      }
      System.out.println();

      for (int i = n.length - 1; i >= 0; i--) {
         System.out.print(n[i] + " ");
      }
      System.out.println();

      System.out.printf("%d %d\n", n[0], n[n.length - 1]);
   }
}
