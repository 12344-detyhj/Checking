package UserPassword;

public class User {
    private String account;
    private String password;
    private String name;
    //private String identity;确认为老师还是学生，暂时不用
    private String email;
    private String phone;
    public String getPassword(){
        return password;
    }
    public String getAccount(){
        return account;
    }
    public void updateAccount(String Account){
        account = Account;
    }
    public void updatePassword(String Password){
        password = Password;
    }
}
