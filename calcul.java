import java.util.Scanner;



public class calcul {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("ingresar el primer numero: ");
        int num1 = scanner.nextInt();

        System.out.println("ingresar el segundo numero: ");
        int num2 = scanner.nextInt();

        System.out.println("ingresar la operacion (+, -, *, /): ");
        char operator = scanner.next().charAt(0);

        int result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                } else {
                    System.out.println("error: Division par cero");
                    scanner.close();
                    return;
                }
                break;
            default:
                System.out.println("error: operacion invalida");
                scanner.close();
                return;
        }

        System.out.println(result);
        scanner.close();
    }
}